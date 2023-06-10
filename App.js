import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/imageViewer";
import Button from "./components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  async function pickImage (){
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1
    });
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      return;
    }
    alert("You did not select any image.");
  }
  const placeholderImage = require("./assets/images/background-image.png");
  const buttonArr = [
    { text: "Choose a photo", theme: "primary", onPress:pickImage },
    { text: "Use this photo" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
      <Text style={styles.heading}>Sticker Smash</Text>
      </View>
      <ImageViewer placeholderImageSource={placeholderImage} selectedImage={selectedImage} />
      <View style={styles.footerContainer}>
        {buttonArr.map((item, index) => (
          <Button key={index} {...item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  headingContainer:{
    textAlign:'center',
    marginVertical:20,
    paddingVertical:20
  },
  heading:{
    fontSize:30,
   fontWeight:"600",
   color:'#fff'
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems:'center',
    marginTop:20
  }
});
