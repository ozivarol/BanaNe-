import React, { Fragment, useEffect, useState } from "react";
import { SafeAreaView,Text,View} from "react-native";
import styles from "./Login.style"
import Input from "../../../components/Input"
import Button from "../../../components/Button";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";
import Loading from "../../../components/Loading/Loading";


const initialFormValues = {
    usermail:"",
    password:"",
}

const Login = ({navigation}) =>{
    
    const [loading,setLoading] =useState(false)
    
    
    function handelSignUp(formValues){
        if (formValues.usermail == "" && formValues.password == "" ){
            showMessage({
                message:"Tekrar dene",
                type:"danger"
            })
        }
        
        navigation.navigate("SignPage")
    }
   
   async function handelFormSubmit(formValues){
        try {
           setLoading(true)
            await auth().signInWithEmailAndPassword(formValues.usermail,formValues.password)
            

           setLoading(false)
           
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
            {({values,handleChange,handleSubmit})=>(
                <>   
                    <Input value={values.usermail} onType={handleChange("usermail")} placeholder ="E-postanızı girin" />
                    <Input value={values.password} onType={handleChange("password")} placeholder = "Şifrenizi girin" isSecure/>
                    <Button text="Giriş Yap" onPress={handleSubmit} loading={loading}/>
                </>
            )}
            </Formik>
            <Button text="Kayıt Ol" theme="secondary" onPress={handelSignUp}/>
            
            
        </SafeAreaView>
    )
}

export default Login