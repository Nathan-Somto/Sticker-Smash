import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/imageViewer";
import Button from "./components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker'
export default function App() {
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  async function pickImage (){
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1
    });
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      return;
    }
    alert("You did not select any image.");
  }
  function ToggleAppOptions(){
    setShowAppOptions(true);
  }
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImage = async () => {
   
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };


  const placeholderImage = require("./assets/images/background-image.png");
  const buttonArr = [
    { text: "Choose a photo", theme: "primary", onPress:pickImage },
    { text: "Use this photo", onPress:ToggleAppOptions },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
      <Text style={styles.heading}>Sticker Smash</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} selectedImage={selectedImage} />
        {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
      </View>
      {
        showAppOptions?(
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" text="Reset" onPress={onReset}/>
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon="save-alt" text="Save" onPress={onSaveImage}/>
          </View>
        </View>):
     (<View style={styles.footerContainer}>
        {buttonArr.map((item, index) => (
          <Button key={index} {...item} />
        ))}
      </View>)
      }
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        {/* A list of emoji component will go here */}
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  imageContainer:{
    flex:1,
    paddingTop:10
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
  },
  optionsContainer:{
    position:'absolute',
    bottom:30,
  },
  optionsRow:{
    alignItems:'center',
    flexDirection:'row',
    gap:60
  }
});
