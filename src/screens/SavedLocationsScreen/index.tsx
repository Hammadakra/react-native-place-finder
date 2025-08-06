import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
 import { usePlaceStorage } from '../../hooks/usePlaceStorage';
import { Place } from '../../types/place';
import { RootStackParamList } from '../../navigation/AppNavigator/types';
import SavedLocationCard from '../../components/SavedLocationCard';
import ListEmpty from '../../components/ListEmptyComp';
import styles from './styles';
 

const SavedLocationsScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { savedPlaces, fetchSavedPlaces, confirmAndDeletePlace } = usePlaceStorage();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchSavedPlaces);
    return unsubscribe;
  }, [navigation, fetchSavedPlaces]);

  const handlePress = (place: Place) => {
    navigation.navigate('MapScreen', { focusPlace: place });
  };

  const renderItem = ({ item }: { item: Place }) => (
    <SavedLocationCard
      place={item}
      onPress={handlePress}
      onDelete={confirmAndDeletePlace}
    />
  );

  const ListEmptyComp = () => (
    <ListEmpty
      title="No saved locations found."
      subtitle="Try searching and saving a location first."
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={savedPlaces}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={ListEmptyComp}
       />
    </View>
  );
};



export default SavedLocationsScreen;
