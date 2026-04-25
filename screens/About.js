import { View, Text } from "react-native";
import styles from "../styles";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>

      <Text style={styles.text}>
        I am a designer learning React Native.
        I enjoy using Figma to express creativity and create 
        user friendly applications and websites.
      </Text>

      <Text style={styles.title}>Skills</Text>
      <Text style={styles.skillText}>React Native</Text>
      <Text style={styles.skillText}>JavaScript</Text>
      <Text style={styles.skillText}>HTML</Text>
      <Text style={styles.skillText}>CSS</Text>
      <Text style={styles.skillText}>PHP</Text>
      <Text style={styles.skillText}>mySQL</Text>

    </View>
  );
}