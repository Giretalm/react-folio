import { View, Text } from "react-native";
import styles from "../styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Portfolio</Text>
      <Text style={styles.subtitle}>Frontend Developer | Designer | Problem Solver</Text>
    </View>
  );
}