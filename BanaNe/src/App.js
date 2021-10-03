import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";
import FlashMessage from "react-native-flash-message";
import Messages from "./pages/auth/Messages";
import auth from "@react-native-firebase/auth"
import Icon from "react-native-vector-icons/MaterialIcons"
import Loading from "./components/Loading";
const Stack = createNativeStackNavigator()

function App(){
  const [userSession,setUserSession] = React.useState()
    React.useEffect(()=>{
      auth().onAuthStateChanged((user)=>{
        setUserSession(!!user)
      })
    })
  const AuthStack = () =>{
    
    return(
        
      <Stack.Navigator screenOptions = {{headerShown:false}}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
        
      </Stack.Navigator>
      
    

    )
  }
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {
          !userSession ? (
           <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}} />)
          :(<Stack.Screen name="MessagesScreen" component={Messages} options={{title:"Dertlerim",headerTintColor:"#790e8b",headerRight:()=> <Icon name="logout" size={30} color="#790e8b" onPress={() => auth().signOut()}/>,headerTitleAlign:"center"}} />)
        }
      
       
       
      </Stack.Navigator>
      <FlashMessage position="top"/>
    </NavigationContainer>
    
  )
}
export default App