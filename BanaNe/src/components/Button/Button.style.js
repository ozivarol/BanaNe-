import { StyleSheet } from "react-native";
const base_style =StyleSheet.create({
    container:{
        padding:8,
        margin:10,
        backgroundColor:"#c7a4ff",
        borderRadius:20,
        alignItems:"center",

    },
    button_container:{
        flexDirection:"row",
        alignItems:"center",

    },
    title:{
        marginLeft:5,
        fontWeight:"bold",
        fontSize:17,
        

    }
})

export default {
    primary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:"#c7a4ff",

        },
        title:{
            ...base_style.title,
            color:"white",
    
        }

    }),
    secondary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:"white",
            borderColor:"#c7a4ff",
            borderWidth:1,
            
            
    
        },
        title:{
            ...base_style.title,
            color:"#c7a4ff",
    
        }
       
       
    })
    
}