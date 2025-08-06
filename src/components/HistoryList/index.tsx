import React from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
 import styles from './styles';
import { Place } from '../../types/place';

type Props = {
  history: Place[];
  onSelect: (place: Place) => void;
};
const HistoryList: React.FC<Props> = ({ history, onSelect }) => {
  return (
    <FlatList
      data={history}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)} style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

 

export default HistoryList;
