import { Text, View, SafeAreaView, TextInput, Button, StyleSheet } from "react-native"
import Constants from "expo-constants"
import Header from "./app/Header"
import { StatusBar } from "expo-status-bar"
import StoryList from "./app/StoryList"
import ProfileInfo from "./app/ProfileInfo"
import PostPreview from "./app/PostPreview"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar visible />
      <Header />
      <StoryList />
      <ProfileInfo />
      <PostPreview />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingTop: Constants.statusBarHeight,
  }
})
export default App