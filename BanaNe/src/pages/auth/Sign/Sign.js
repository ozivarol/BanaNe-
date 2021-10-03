import React, { useState } from "react";
import { SafeAreaView,Text,View } from "react-native";
import styles from "./Sign.style"
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const initialFormValues = {
    usermail:"",
    password:"",
    repassword:"",
}

const Sign = ({navigation}) =>{
    const [loading,setLoading]=useState(false)
    function handleLogin(){
        navigation.goBack()
    }
   async function handelFormSubmit(formValues){
        if(formValues.password !== formValues.repassword){
            showMessage({
                message:"Şifreler Uyuşmuyor",
                type:"danger"
            })
            return

        }
        try {
           await auth().createUserWithEmailAndPassword(formValues.usermail,formValues.password,formValues.repassword)
            showMessage({
                message:"Kullanıcı oluştu",
                type:"success",
                icon:"success"
            })
            navigation.navigate("LoginPage")
            
        } 
        
        catch (error) {
            showMessage({
                message:authErrorMessageParser(error.code),
                type:"danger",
                icon:"danger"
                
            })
            setLoading(false)
            
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Bana Ne?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handelFormSubmit}>
               {({values,handleChange,handleSubmit}) =>(
                   <>
                    <Input placeholder ="E-postanızı girin" value={values.usermail} onType={handleChange("usermail")} />
                    <Input placeholder = "Şifrenizi girin" value={values.password} onType={handleChange("password")} isSecure/>
                    <Input placeholder = "Şifrenizi tekrar girin" value={values.repassword} onType={handleChange("repassword")} isSecure/>
                    <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading}/>
                   </> 
                )}
            </Formik>
            <Button text="Geri" theme="secondary" onPress={handleLogin}/>
            
            
        </SafeAreaView>
    )
}

export default Sign