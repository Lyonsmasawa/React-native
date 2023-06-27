import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const PostPreview = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        style={{ width: width - 20, height: width - 20 }}
        source={{
          uri:
            "https://images.unsplash.com/photo-1477544437652-fdfbf813e056?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NTQzMjAzOHw&ixlib=rb-4.0.3&q=85&w=1920",
        }}
      />
      <View style={styles.actionsWrapper}>
      <View style={styles.actionsContainer}>
        <AntDesign style={{marginRight: 15}} name="hearto" size={24} color="black" />
        <AntDesign style={{marginRight: 15}} name="message1" size={24} color="black" />
        <Feather style={{marginRight: 15}} name="send" size={24} color="black" />
      </View>
      <Feather name="bookmark" size={24} color="black" />
      </View>
    </View>
  );
};

// const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  actionsContainer: {
    flexDirection: "row",
  },
  actionsWrapper: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent:'space-between',
    paddingVertical: 10,

  }
});

export default PostPreview;
