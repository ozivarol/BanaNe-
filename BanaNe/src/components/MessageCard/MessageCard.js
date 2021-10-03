import React from "react";
import {View,Text,TouchableOpacity} from "react-native"
import styles from "./MessageCard.style"
import {formatDistance} from "date-fns"
import {tr} from "date-fns/locale"
import {parseISO} from "date-fns"
import  Icon  from "react-native-vector-icons/MaterialIcons";

const MessageCard = ({message,onBanane}) =>{
    const formattedDate=formatDistance(parseISO(message.date),new Date(),{
        addSuffix:true,
        locale:tr,
    })
    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.user}>{message.username}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
                
            </View>
             <Text style={styles.title}>{message.text}</Text>
            
            <View style={styles.footer}>
                <TouchableOpacity style={styles.dislike_container} onPress={onBanane}>
                    {!!message.dislike && (
                        <View style={styles.dislike_count_container}>
                            
                            <Text style={styles.dislike_count_text}>{message.dislike}</Text>
                        </View>
                    )}
                    <Icon name="favorite" color="#c7a4ff" size={30} style={styles.icon} />
                </TouchableOpacity>
            
           </View>
        </View>
        
    )
}
export default MessageCard