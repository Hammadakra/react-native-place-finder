import React, { useRef } from 'react';
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator/types';
import { usePlaceSearch } from '../../hooks/usePlaceSearch';
import MapWithMarker from '../../components/MapWithMarker';
import SearchSection from '../../components/SearchSection';
import FloatingButton from '../../components/Button';
import InfoCard from '../../components/InfoCard';
import styles from './styles';
import MapView from 'react-native-maps';

const MapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const focusPlace = (route.params as any)?.focusPlace;

  const {
    query,
    suggestions,
    selectedPlace,
    fadeAnim,
    setMapReady,
    handleTextChange,
    handleSuggestionPress,
    handleSaveLocation,
  } = usePlaceSearch(mapRef, focusPlace);

  return (
    <SafeAreaView style={styles.container}>
       <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}
      >
        <MapWithMarker
          mapRef={mapRef}
          style={styles.map}
          selectedPlace={selectedPlace}
          onMapReady={() => setMapReady(true)}
          suggestionsCount={suggestions.length}
        />
        <SearchSection
          query={query}
          suggestions={suggestions}
          onChangeText={handleTextChange}
          onSelect={handleSuggestionPress}
        />
        <FloatingButton
          title="View Saved Locations"
          onPress={() => navigation.navigate('DetailsScreen')}
          style={styles.savedBtn}
          textStyle={styles.savedBtnText}
        />
        {selectedPlace && (
          <InfoCard
            place={selectedPlace}
            fadeAnim={fadeAnim}
            onSave={handleSaveLocation}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MapScreen;
 