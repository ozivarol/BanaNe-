import React from "react";
import {View,TextInput} from "react-native"
import Button from "../../Button";
import styles from "./ContentInputModal.style"
import Modal from "react-native-modal"

const ContentInputModal = ({visible,onClose,onSend}) =>{
    const [text,setText] = React.useState(null)
    function handleSend(){
        if(!text){
            return
        }
        else{
            onSend(text)
            setText(null)
        }
    }
    return(
        <Modal isVisible={visible} onSwipeComplete={onClose} onBackdropPress={onClose} onBackButtonPress={onClose} style={styles.modal} swipeDirection="down">
            <View style={styles.container}>
                <View style={styles.input_container}> 
                 <TextInput placeholder="Darla Hadi Beni" onChangeText={setText} multiline/>
                </View>
                <Button text="Gönder" onPress={handleSend}/>
            </View>
        </Modal>

    )
}

export default ContentInputModal