import React from 'react';
import {Text, Animated } from 'react-native';
import { Place } from '../../types/place';
import FloatingButton from '../Button';
import styles from './styles';
 
interface Props {
  place: Place;
  onSave: () => void;
  fadeAnim: Animated.Value;
   
}
const InfoCard: React.FC<Props> = ({ place, onSave, fadeAnim }) => {
  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
      <Text style={styles.title}>{place.name}</Text>
      <Text style={styles.sub}>{place.address}</Text>
      <Text style={styles.sub}>Lat: {place.location.lat}</Text>
      <Text style={styles.sub}>Lng: {place.location.lng}</Text>
      <Text style={styles.link}>
        https://maps.google.com/?q={place.location.lat},{place.location.lng}
      </Text>

      <FloatingButton
        title="Save Location"
        onPress={onSave}
        style={styles.saveBtn}
        textStyle={styles.saveBtnText}
      />
    </Animated.View>
  );
};
 
export default React.memo(InfoCard);
