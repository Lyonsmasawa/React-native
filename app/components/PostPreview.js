import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
  FlatList,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const posts = [
  {
    id: "1",
    postImage:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "2",
    postImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzcxNDY0NXw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "3",
    postImage:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4Nzg2NDUyNHw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "4",
    postImage:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "5",
    postImage:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "6",
    postImage:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "7",
    postImage:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
];

const PostPreview = () => {
  const [currentStateIndex, setCurrentStateIndex] = useState(0);

  const onViewableItemsChanged = useRef((item) => {
    const index = item.viewableItems[0].index;
    setCurrentStateIndex(index);
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });

  return (
    <View>
      <FlatList
        data={posts}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Post postImage={item.postImage} />;
        }}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
      />
      <View style={{ position: "relative" }}>
        <Actions />
        <View
          style={[
            { ...StyleSheet.absoluteFillObject },
            {
              flexDirection: "row",
              position: "absolute",
              alignItems: "center",
              // top: 0,
              // left: 0,
              // right: 0,
              // bottom: 0,
              zIndex: -1,
              justifyContent: "center",
            },
          ]}
        >
          {posts.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor:
                    currentStateIndex === index ? "#6167F6" : "#D3D4DA",
                  marginHorizontal: 2,
                }}
              ></View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const Post = ({ postImage }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        style={{ width: width - 20, height: width - 20 }}
        source={{
          uri: postImage,
        }}
      />
    </View>
  );
};

const Actions = () => {
  return (
    <View style={styles.actionsWrapper}>
      <View style={styles.actionsContainer}>
        <AntDesign
          style={{ marginRight: 15 }}
          name="hearto"
          size={24}
          color="black"
        />
        <AntDesign
          style={{ marginRight: 15 }}
          name="message1"
          size={24}
          color="black"
        />
        <Feather
          style={{ marginRight: 15 }}
          name="send"
          size={24}
          color="black"
        />
      </View>
      <Feather name="bookmark" size={24} color="black" />
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});

export default PostPreview;
