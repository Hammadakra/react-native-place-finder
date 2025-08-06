import AsyncStorage from '@react-native-async-storage/async-storage';
import { Place } from '../types/place';

const HISTORY_KEY = 'SEARCH_HISTORY';

export const savePlaceToHistory = async (place: Place): Promise<void> => {
  try {
    const json = await AsyncStorage.getItem(HISTORY_KEY);
    let history: Place[] = json ? JSON.parse(json) : [];
console.log(place,"PLACE");

    // Avoid duplicates
    history = history.filter((p) => p.id !== place.id);
    history.unshift(place);

    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (e) {
    console.error('Error saving history', e);
  }
};

export const getSavedHistory = async (): Promise<Place[]> => {
  try {
    const json = await AsyncStorage.getItem(HISTORY_KEY);
    return json ? JSON.parse(json) : [];
    console.log(json,"JSON");
    
  } catch (e) {
    console.error('Error reading history', e);
    return [];
  }
};

export const removePlaceFromHistory = async (placeId: string): Promise<void> => {
  try {
    const json = await AsyncStorage.getItem(HISTORY_KEY);
    if (json) {
      const history: Place[] = JSON.parse(json);
      const updated = history.filter((p) => p.id !== placeId);
      await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    }
  } catch (e) {
    console.error('Error removing place from history', e);
  }
};
