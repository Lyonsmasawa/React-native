import { Text, View, SafeAreaView, TextInput, Button, StyleSheet, ScrollView } from "react-native"
import Constants from "expo-constants"
import Header from "./app/Header"
import { StatusBar } from "expo-status-bar"
import StoryList from "./app/StoryList"
import ProfileInfo from "./app/ProfileInfo"
import PostPreview from "./app/PostPreview"

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar visible />
      <Header />
      <StoryList />
      <ProfileInfo />
      <PostPreview />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingTop: Constants.statusBarHeight,
  }
})
export default App