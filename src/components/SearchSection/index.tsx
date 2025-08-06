import React from 'react';
import SearchBar from '../SearchBar';
import SuggestionList from '../SuggestionList';
import { Place } from '../../types/place';
 

interface Props {
  query: string;
  suggestions: Place[];
  onChangeText: (text: string) => void;
  onSelect: (place: Place) => void;
}

const SearchSection: React.FC<Props> = ({
  query,
  suggestions,
  onChangeText,
  onSelect,
}) => (
  <>
    <SearchBar
      value={query}
      onChangeText={onChangeText}
      suggestions={suggestions}
      onSelect={onSelect}
    />
    {suggestions.length > 0 && (
      <SuggestionList suggestions={suggestions} onSelect={onSelect} />
    )}
  </>
);

export default React.memo(SearchSection);
