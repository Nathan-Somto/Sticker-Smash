import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'


export default function IconButton({icon, text, onPress}) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons
        name={icon}
        size={24}
        color='#fff'
        />
      <Text style={styles.iconButtonText}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    iconButton:{
        justifyContent:'center',
        alignContent:'center'
    },
    iconButtonText:{
        color:"#fff",
        marginTop:8,
        fontSize:18,
    }
})