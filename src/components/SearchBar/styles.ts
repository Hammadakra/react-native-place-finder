import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    elevation: 3,
  },
});
  export default styles