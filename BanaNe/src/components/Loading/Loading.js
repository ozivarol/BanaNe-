import React from "react";
import LottieView from "lottie-react-native"
import {View,Text} from "react-native"
import styles from "../Loading/Loading.style"


function Loading({navigation}){
    function go(){
        navigation.navigate("LoginPage")
    }
   
   

    
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bana Ne?</Text>
        
           <LottieView source={require("../../asset/loading.json")} autoPlay={true} loop={false} onAnimationFinish={go} style={styles.animation}/>
        </View>
    )
    
    
}

export default Loading