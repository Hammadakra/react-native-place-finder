import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
  title?: string;
  subtitle?: string;
};

const ListEmpty: React.FC<Props> = ({
  title = 'No data found.',
  subtitle = 'Try adding some items first.',
}) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{title}</Text>
      <Text style={styles.emptySubText}>{subtitle}</Text>
    </View>
  );
};
 
export default ListEmpty;
