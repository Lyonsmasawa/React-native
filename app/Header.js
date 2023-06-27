import React from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.logo} source={require("../assets/afvs.png")} />
            <Text style={{width: '50%'}}>Divergram</Text>
        </View>
        <AntDesign name="message1" size={26} color="black"/> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  logo: {
    width: 80,
    height: 50,
    resizeMode: "contain",
  },
});

export default Header;
