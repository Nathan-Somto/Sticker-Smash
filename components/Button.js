import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
/**
 * 
 * @param {{text:string, theme:string, onPress:((event: GestureResponderEvent) => void) | null | undefined}} 
 * @returns  React.JSX.Element
 * @description customizable button component built from scratch with the pressable component.
 */
export default function Button({text,theme,onPress}) {
    if(theme==="primary"){
       return( <View
            style={[styles.buttonContainer, {borderWidth:4, borderColor:'#ffd33d', borderRadius:20}]}
        >
        <Pressable
            style={[styles.button, {backgroundColor:'#fff'}]}
            onPress={onPress}
        >
            <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
            />
            <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{text}</Text>
        </Pressable>
        </View>
       )
    }
  return (
    <View style={styles.buttonContainer}>
     <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{text}</Text>
     </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:300,
        height:70,
        marginHorizontal:25,
        alignItems:'center',
        justifyContent:"center",
        padding:2.8,
    },
    button:{
        borderRadius:12,
        width:"100%",
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonIcon:{
        paddingRight:10,
    },
    buttonLabel:{
        color:'#fff',
        fontSize:16
    }
})