import React from "react";
import { Pressable, Text } from "react-native";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const profileImage =
  "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4Njg1MTk0MXw&ixlib=rb-4.0.3&q=85&w=1920";

const ProfileInfo = ({ onOptionPress, onProfilePress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onProfilePress} style={styles.profileContainerCover}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <View style={styles.profileContainer}>
          <Text style={styles.name}>Lyons Masawa</Text>
          <Text style={styles.location}>Nairobi, Kenya</Text>
        </View>
      </Pressable>
      <Pressable onPress={onOptionPress}>
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileContainerCover: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileContainer: {
    marginLeft: 8,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 11,
    fontWeight: 700,
  },
  location: {
    fontSize: 8,
  },
});

export default ProfileInfo;
