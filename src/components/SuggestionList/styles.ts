import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    list: {
      position: 'absolute',
      top: 80,
      left: 10,
      right: 10,
      backgroundColor: colors.white,
      borderRadius: 8,
      zIndex: 10,
      maxHeight: 200,
      marginHorizontal:18
    },
    item: {
      padding: 12,
      borderBottomWidth: 1,
      borderColor: colors.white,
      fontSize: 14,
    },
  });

  export default styles