import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function EmojiPicker({isVisible, children, onClose}) {
  return (
   <Modal animationType='slide' transparent={true} visible={isVisible} >
    <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a sticker</Text>
            <Pressable onPress={onClose}>
                <MaterialIcons name="close" color="#fff" size={25}/>
            </Pressable>
        </View>
        {children}
    </View>
   </Modal>
  )
}

const styles = StyleSheet.create({
    modalContent:{
        height:'35%',
        width:'100%',
        backgroundColor:'#25292e',
       borderTopRightRadius:20,
       borderTopLeftRadius:20,
       position:'absolute',
       bottom:0,
    },
    titleContainer:{
        height:'27%',
        backgroundColor:'#464C55',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        color:"#fff",
        fontSize:18
    },
    pickerContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical:20,
    }
})