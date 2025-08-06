import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Place } from '../../types/place';
import styles from './styles';
 
type Props = {
  place: Place;
  onPress: (place: Place) => void;
  onDelete: (placeId: string) => void;
};
const SavedLocationCard: React.FC<Props> = ({ place, onPress, onDelete }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(place)}
      activeOpacity={0.7}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(place.id)} style={styles.crossContainer}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

 

export default SavedLocationCard;
