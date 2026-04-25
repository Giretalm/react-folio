import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import styles from "../styles";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const send = () => {
    if (!name || !email) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    Alert.alert("Success", "Message sent!");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        placeholderTextColor="#aaa"
        style={styles.input}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={send}>
        <Text style={{ color: "white" }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}