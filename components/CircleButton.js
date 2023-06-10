import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function CircleButton({onPress}) {
  return (
    <View style ={styles.circleButtonContainer}>
    <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e"/>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    circleButtonContainer:{
        width:90,
        height:90,
        borderWidth:4,
        borderColor:'#ffd33d',
        borderRadius:'50%',
        padding:3,
    },
    circleButton:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'50%',
        backgroundColor:'#fff'
    }
})