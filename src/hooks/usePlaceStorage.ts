import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Place } from '../types/place';
import {
  getSavedHistory,
  removePlaceFromHistory,
} from '../utils/storage';

export const usePlaceStorage = () => {
  const [savedPlaces, setSavedPlaces] = useState<Place[]>([]);

  useEffect(() => {
    fetchSavedPlaces();
  }, []);

  const fetchSavedPlaces = async () => {
    const places = await getSavedHistory();
    setSavedPlaces(places);
  };

  const confirmAndDeletePlace = (placeId: string) => {
    Alert.alert(
      'Delete Location',
      'Are you sure you want to delete this location?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await removePlaceFromHistory(placeId);
            setSavedPlaces(prev => prev.filter(p => p.id !== placeId));
          },
        },
      ],
    );
  };

  return {
    savedPlaces,
    fetchSavedPlaces,
    confirmAndDeletePlace,
  };
};
