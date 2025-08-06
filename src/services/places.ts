import { GOOGLE_API_BASE } from '../constants';
import { Place } from '../types/place';
import {GOOGLE_MAPS_API_KEY} from '@env';

const GOOGLE_MAPS_API = process.env['GOOGLE_MAPS_API_KEY'];
export const fetchPlaceSuggestions = async (input: string): Promise<Place[]> => {
  const url = `${GOOGLE_API_BASE}/autocomplete/json?input=${input}&key=${GOOGLE_MAPS_API}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.predictions) return [];

  return data.predictions.map((item: any) => ({
    id: item.place_id,
    name: item.description,
    address: item.description,
    location: { lat: 0, lng: 0 },
  }));
};

export const fetchPlaceDetails = async (placeId: string): Promise<Place | null> => {
  const url = `${GOOGLE_API_BASE}/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.result) return null;

  return {
    id: data.result.place_id,
    name: data.result.name,
    address: data.result.formatted_address,
    location: {
      lat: data.result.geometry.location.lat,
      lng: data.result.geometry.location.lng,
    },
  };
};
