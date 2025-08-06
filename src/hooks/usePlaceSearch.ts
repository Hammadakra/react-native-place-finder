import {useEffect, useRef, useState } from 'react';
import { Keyboard, Animated, Alert } from 'react-native';
import MapView from 'react-native-maps';
import { Place } from '../types/place';
import { fetchPlaceSuggestions, fetchPlaceDetails } from '../services/places';
import { savePlaceToHistory } from '../utils/storage';

export const usePlaceSearch = (
  mapRef: React.RefObject<MapView | null>,
  focusPlace?: Place
) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Place[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [isSelectingSuggestion, setIsSelectingSuggestion] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const hasFocused = useRef(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleTextChange = (text: string) => {
    if (isSelectingSuggestion) return; // ⛔ Skip fetching if selecting
  
    setQuery(text);
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    typingTimeout.current = setTimeout(async () => {
      if (!text.trim()) {
        setSuggestions([]);
        return;
      }
  
      try {
        const results = await fetchPlaceSuggestions(text);
        setSuggestions(results);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    }, 300);
  };
  

  const animateMapToPlace = (place: Place) => {
    mapRef.current?.animateToRegion(
      {
        latitude: place.location.lat,
        longitude: place.location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      1000
    );
  };

  const animateInfoCard = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleSuggestionPress = async (place: Place) => {
    Keyboard.dismiss();
    setIsSelectingSuggestion(true); // ✅ Block fetch during this time
    setSuggestions([]);
  
    try {
      const details = await fetchPlaceDetails(place.id);
      if (details) {
        setQuery(details.name);
        setSelectedPlace(details);
        animateMapToPlace(details);
        animateInfoCard();
      }
    } catch (error) {
      console.error('Failed to fetch place details:', error);
    } finally {
      setTimeout(() => {
        setIsSelectingSuggestion(false); // ✅ Allow again after 500ms
      }, 500);
    }
  };
  

  const handleSaveLocation = async () => {
    if (!selectedPlace) return;

    Alert.alert('Save Location', 'Do you want to save this location to your history?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Save',
        onPress: async () => {
          try {
            await savePlaceToHistory(selectedPlace);
            console.log('Saved location:', selectedPlace.name);
          } catch (err) {
            console.error('Failed to save location:', err);
          }
        },
      },
    ]);
  };

  const handleClearSelected = () => {
    setSelectedPlace(null);
    setQuery('');
    setSuggestions([]);
    fadeAnim.setValue(0);
  };

  useEffect(() => {
    if (focusPlace && mapReady && !hasFocused.current) {
      hasFocused.current = true;
      setQuery(focusPlace.name);
      setSelectedPlace(focusPlace);
      animateMapToPlace(focusPlace);
      animateInfoCard();
    }
  }, [focusPlace, mapReady]);

  return {
    query,
    suggestions,
    selectedPlace,
    fadeAnim,
    setMapReady,
    handleTextChange,
    handleSuggestionPress,
    handleSaveLocation,
    handleClearSelected,
  };
};
 