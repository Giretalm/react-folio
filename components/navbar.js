import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

export default function Navbar({ setPage }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
      
      <TouchableOpacity style={styles.navButton} onPress={() => setPage("home")}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => setPage("about")}>
        <Text style={styles.navText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => setPage("projects")}>
        <Text style={styles.navText}>Projects</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => setPage("contact")}>
        <Text style={styles.navText}>Contact</Text>
      </TouchableOpacity>

    </View>
  );
}