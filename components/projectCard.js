import { View, Text, TouchableOpacity, Linking } from "react-native";
import styles from "../styles";

export default function ProjectCard({ title, description, link}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{description}</Text>

      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <Text style={styles.link}>View Project</Text>
      </TouchableOpacity>
    </View>
  );
}