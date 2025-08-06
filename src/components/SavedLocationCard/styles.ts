import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  textContainer:{
    flex:1,
  },
  name: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  color: colors.primary
 },
  address: {
     fontSize: 14,
     color: colors.black
 },
 crossContainer:{
  position:'absolute',
  right:10,
  top:10,
  height:25,
  width:25,
  backgroundColor:colors.primary,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:15
 },
  deleteText: { 
    color: colors.white, 
  fontWeight: 'bold',
   fontSize: 10
 },
});
  export default styles