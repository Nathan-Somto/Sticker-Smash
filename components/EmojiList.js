import { FlatList, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function EmojiList({onSelect,onCloseModal}) {
    const emoji = [
        require('../assets/images/emoji1.png'),
        require('../assets/images/emoji2.png'),
        require('../assets/images/emoji3.png'),
        require('../assets/images/emoji4.png'),
        require('../assets/images/emoji5.png'),
        require('../assets/images/emoji6.png'),
      ];
  return (
   <FlatList
   horizontal
   data={emoji}
   contentContainerStyle={styles.flatListContainer}
   renderItem={
    ({item,index})=>{
        return(
            <Pressable
            onPress={()=>{
                onSelect(item);
                onCloseModal();
            }}
            >
            <Image source={item} key={index} style={styles.image}/>
            </Pressable>
        )
    }
   }
   />
  )
}

const styles = StyleSheet.create({
    flatListContainer:{
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    image:{
        width:100,
        height:100,
        marginRight:20,
    }
})