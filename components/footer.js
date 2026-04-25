import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text>© 2026 My Portfolio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#ddd",
  },
});