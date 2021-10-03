import { StyleSheet,Dimensions } from "react-native";
const device = Dimensions.get("window")
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center"
    

        

        
    },
    header:{
        color:"#790e8b",
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
    }

})