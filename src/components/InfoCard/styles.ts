import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 16,
  },
  sub: {
    fontSize: 14,
    color: colors.black,
  },
  link: {
    fontSize: 12,
    color: colors.primary,
  },
  saveBtn: {
    marginTop: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    width: '80%',
  },
  saveBtnText: { color: colors.white, textAlign: 'center' },
});
export default styles;
