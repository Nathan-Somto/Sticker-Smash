import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { TapGestureHandler,PanGestureHandler,  } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler
} from "react-native-reanimated";
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View);
export default function EmojiSticker({ imageSize, stickerSource }) {
  const start = useSharedValue({ x: 0, y: 0 });
  const offset = useSharedValue({ x: 0, y: 0 });
  const scale = useSharedValue(imageSize);
  const tapGesture = useAnimatedGestureHandler({
    onActive : (e) => {
      console.log(e)
      if (imageSize * 2 !== scale.value) {
        scale.value = scale.value * 2;
      }
    }}
  )
  const panGesture = useAnimatedGestureHandler({
    onStart: (e) => {
      start.value = {
        x: e.translationX,
        y: e.translationY,
      };
    },
    onActive: (e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    }
  }
    )
  const containerStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
      ],
    };
  });
  const imageStyles = useAnimatedStyle(() => {
    return {
      width: withSpring(scale.value),
      height: withSpring(scale.value),
    };
  });
  
  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <AnimatedView  style={[containerStyles,{ top: -350  }]}>
        <TapGestureHandler numberOfTaps={2} onGestureEvent={tapGesture}>
        <AnimatedImage
          source={stickerSource}
          resizeMode="contain"
          style={[imageStyles,{ width: imageSize, height: imageSize }]}
        />
        </TapGestureHandler>
      </AnimatedView>  
      </PanGestureHandler>
  );
}

const styles = StyleSheet.create({});
