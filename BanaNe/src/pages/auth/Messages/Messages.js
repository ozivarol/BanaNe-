import React from "react";
import {SafeAreaView,Text,FlatList} from "react-native"
import styles from "./Messages.style"
import FloatingButton from "../../../components/FloatingButton"
import ContentInputModal from "../../../components/modal/ContentInputModal/";
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import parseContentData from "../../../utils/parseContentData";
import MessageCard from "../../../components/MessageCard"
const Messages = () =>{
    const [inputModalVisible,setInputModalVisible] = React.useState(false)
    const [contentList,setContentList]= React.useState([])
    React.useEffect(()=>{
        database().ref("messages/").on("value",snapshot=>{
            const contentData=snapshot.val()
          
            const parsedData = parseContentData(contentData || {})
            setContentList(parsedData)

        })

    },[])
    function handleInputToggle(){
        setInputModalVisible(!inputModalVisible)
    }
    function handleSendContent(content){
        handleInputToggle()
        sendContent(content)
        

    }
    function sendContent(content){
        const userMail = auth().currentUser.email
        const contentObj = {
            text:content,
            username:userMail.split("@")[0],
            date:new Date().toISOString(),
            dislike:0,
        }
        database().ref("messages/").push(contentObj)
    }
    function handleBanane(item){
        database().ref(`messages/${item.id}`).update({dislike:item.dislike+1})

    }
    const renderContent = ({item}) => <MessageCard message={item} onBanane={() =>handleBanane(item)} />
    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={contentList}
            renderItem={renderContent}
              
            
            />
            <FloatingButton icon="add" onPress={handleInputToggle} />
            <ContentInputModal visible={inputModalVisible} onClose={handleInputToggle} onSend={handleSendContent} />
        </SafeAreaView>
    )
}

export default Messages