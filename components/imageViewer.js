import { StyleSheet,Image} from 'react-native'
import React from 'react'

export default function ImageViewer({placeholderImageSource, selectedImage}) {
    const imgSource = selectedImage !== null ? {
        uri:selectedImage
    }:
    (placeholderImageSource)
  return (
    <>
    <Image
    source={imgSource}
    style={styles.image}
    />
    </>
  )
}

const styles = StyleSheet.create({
    image:{
      height:450,
      width:300,
      borderRadius:20,
    },
})