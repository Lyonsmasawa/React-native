import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/favicon.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} resizeMode='contain' style={styles.logo} />
      <Button title='+' onPress={() => {
       return alert("we just made our first app")
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  logo: {
    width: 150,
    height: 50,
    padding: 5,
    
  }
});
