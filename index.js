import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Portfolio</Text>
      <Text style={styles.subtitle}>
        Frontend Developer | Designer | Student
      </Text>
    </View>
  );
}