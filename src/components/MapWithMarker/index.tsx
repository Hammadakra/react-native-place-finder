import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleProp, ViewStyle } from 'react-native';
import { Place } from '../../types/place';
 
interface MapWithMarkerProps {
  mapRef: React.RefObject<MapView>;
  style?: StyleProp<ViewStyle>;
  selectedPlace: Place | null;
  onMapReady: () => void;
  suggestionsCount: number;
}

const MapWithMarker: React.FC<MapWithMarkerProps> = ({
  mapRef,
  style,
  selectedPlace,
  onMapReady,
  suggestionsCount,
}) => (
  <MapView
    ref={mapRef}
    style={style}
    onMapReady={onMapReady}
    pointerEvents={suggestionsCount > 0 ? 'none' : 'auto'}
  >
    {selectedPlace && (
      <Marker
        coordinate={{
          latitude: selectedPlace.location.lat,
          longitude: selectedPlace.location.lng,
        }}
      />
    )}
  </MapView>
);

export default React.memo(MapWithMarker);
