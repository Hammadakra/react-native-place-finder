import React from 'react';
import { View, TextInput } from 'react-native';
import { Place } from '../../types/place';
import styles from './styles';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  suggestions: Place[];
  onSelect: (place: Place) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
       placeholder="Search a place"
       style={styles.input}
       value={value}
       onChangeText={onChangeText}
       autoCorrect={false}
       autoComplete="off"
       autoCapitalize="none"
       underlineColorAndroid="transparent"
      />
    
    </View>
  );
};

 

export default SearchBar;


 