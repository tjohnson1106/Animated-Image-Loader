import React from "react";
import { StyleSheet, Image, View } from "react-native";

import ImageLoader from "./src/ImageLoader";

const App = () => (
  <View style={styles.container}>
    <ImageLoader
      style={styles.image}
      source={require("./assets/green_painting.jpeg")}
    />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10
  }
});
