import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { Place } from '../../types/place';
import styles from './styles';
 
interface Props {
  suggestions: Place[];
  onSelect: (place: Place) => void;
}

const SuggestionList: React.FC<Props> = ({ suggestions, onSelect }) => {
  if (!suggestions.length) return null;

  return (
    <ScrollView style={styles.list} keyboardShouldPersistTaps="handled">
      {suggestions.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => onSelect(item)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

 

export default SuggestionList;
