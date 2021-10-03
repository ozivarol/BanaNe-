import React from "react";
import { View,TextInput} from "react-native";
import styles from "./Input.style"
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({placeholder,value,onType,isSecure}) =>{
    return(
        <View style={styles.container}>
            <TextInput autoCapitalize="none" style={styles.input} placeholder={placeholder} onChangeText={onType} value={value} secureTextEntry={isSecure} />
            
            
        </View>
    )
}

export default Input