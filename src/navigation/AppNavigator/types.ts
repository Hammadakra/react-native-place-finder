import { Place } from '../../types/place';

export type RootStackParamList = {
  MapScreen: { focusPlace?: Place } | undefined;
  DetailsScreen: undefined;
};
