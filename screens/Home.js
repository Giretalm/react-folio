import { View, Text } from "react-native";
import styles from "../styles";
import { ImageBackground } from "react-native-web";

export default function Home() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      }}
    style={styles.background}
    >
    <View style={styles.overlay}>
      <Text style={styles.title}>Welcome to My Portfolio</Text>
      <Text style={styles.subtitle}>Frontend Developer | Designer | Problem Solver</Text>
      </View>
      </ImageBackground>
  );
}