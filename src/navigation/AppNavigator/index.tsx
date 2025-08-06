import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import MapScreen from '../../screens/MapScreen';
import SavedLocationsScreen from '../../screens/SavedLocationsScreen';
import { colors } from '../../constants/colors';
  
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MapScreen"
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={SavedLocationsScreen}
        options={{ title: 'Saved Locations' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
