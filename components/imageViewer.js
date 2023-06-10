import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function ImageViewer({placeholderImageSource, selectedImage}) {
    console.log(selectedImage)
    const imgSource = selectedImage !== null ? {
        uri:selectedImage
    }:
    (placeholderImageSource)
  return (
    <View style={styles.imageContainer}>
    <Image
    source={imgSource}
    style={styles.image}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer:{
        flex:1,
        paddingTop:10
    },
    image:{
      height:450,
      width:300,
      borderRadius:20,
    },
})