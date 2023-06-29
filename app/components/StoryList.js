import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const stories = [
  {
    id: "1",
    uri:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "2",
    uri:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzcxNDY0NXw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "3",
    uri:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4Nzg2NDUyNHw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "4",
    uri:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "5",
    uri:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "6",
    uri:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "7",
    uri:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "8",
    uri:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
  {
    id: "9",
    uri:
      "https://images.unsplash.com/photo-1470165525439-3cf9e6dccbad?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU0NzE3Mnw&ixlib=rb-4.0.3&q=85&w=1920",
  },
];

const StoryList = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={{ position: "relative" }}>
        <ProfileHead
          key={1}
          uri="https://images.unsplash.com/photo-1506532876253-45e83404042b?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3Nzc4NzkyNQ&ixlib=rb-4.0.3&q=85&w=1920"
        />
        <View
          style={{
            position: "absolute",
            bottom: 15,
            right: 5,
            backgroundColor: "blue",
            borderRadius: 10,
            padding: 1,
            borderColor: "white",
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AntDesign name="plus" size={16} color="white" />
        </View>
      </View>
      <View style={styles.storyContainer}>
        {stories.map(({ id, uri }) => (
          <ProfileHead key={id} uri={uri} />
        ))}
      </View>
    </ScrollView>
  );
};

const ProfileHead = ({ uri }) => {
  return (
    <View style={styles.storyProfile}>
      <Image
        style={styles.storyProfileImage}
        source={{
          uri,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: "row",
  },

  storyProfile: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: "black",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  storyProfileImage: {
    width: "90%",
    height: "90%",
    borderRadius: 80 / 2,
  },

  container: {},
});

export default StoryList;
