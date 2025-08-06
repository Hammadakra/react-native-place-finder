import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
   innerContainer:{
    flex: 1,
   },
  map: {
    flex: 1,
    zIndex: -1,
  },
  heading:{
    marginTop: 50,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: colors.white,
  },
  savedBtn: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    zIndex: 11,
    width:'68%',
    alignItems:"center"
  },
  savedBtnText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
