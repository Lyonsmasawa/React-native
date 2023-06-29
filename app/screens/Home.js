import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import PostPreview from "../components/PostPreview";
import StoryList from "../components/StoryList";

const Home = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
    const navigateToProfile = () => {
        navigation.navigate('Profile')
    }

  return (
    <View >
      <ScrollView>
        {/* <ScrollView contentContainerStyle={styles.container}> */}
        {/* <StatusBar visible /> */}
        <Modal
          visible={showModal}
          transparent
          animationType="slide"
          onRequestClose={() => {
            setShowModal(false);
          }}
        >
          <Pressable
            onPress={() => setShowModal(false)}
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <Pressable
                style={({ pressed }) => {
                  return {
                    backgroundColor: !pressed ? "transparent" : "#ccc",
                    paddingVertical: 10,
                  };
                }}
              >
                <Text style={{ fontSize: 18 }}>Option on</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => {
                  return {
                    backgroundColor: !pressed ? "transparent" : "#ccc",
                    paddingVertical: 10,
                  };
                }}
              >
                <Text style={{ fontSize: 18 }}>Option on</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => {
                  return {
                    backgroundColor: !pressed ? "transparent" : "#ccc",
                    paddingVertical: 10,
                  };
                }}
              >
                <Text style={{ fontSize: 18 }}>Option on</Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal>
        <StoryList />
        <ProfileInfo
          onOptionPress={() => {
            setShowModal(true);
          }}
          onProfilePress={navigateToProfile}
        />
        <PostPreview />
        <ProfileInfo />
        <PostPreview />
        <ProfileInfo />
        <PostPreview />
        <ProfileInfo />
        <PostPreview />
        <ProfileInfo />
        <PostPreview />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 
});
export default Home;
