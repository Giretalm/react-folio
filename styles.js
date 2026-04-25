import { withTheme } from "@rneui/themed";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },

  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: "#cbd5e1",
    marginBottom: 5,
  },

  text: {
    color: "#cbd5e1",
    marginBottom: 15,
    marginTop: 5,
  },

  skillText: {
    color: "#cbd5e1",
  },

  input: {
    backgroundColor: "#1e293b",
    padding: 10,
    marginBottom: 10,
    color: "white",
    borderRadius: 8,
  },

  button: {
    backgroundColor: "#2fa4d7",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#1e293b",
  },

  navButton: {
    backgroundColor: "#93d9f6b2",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  navText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },

    card: {
    backgroundColor: "#1e293b",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
    
  link: {
  color: "#93d9f6b2",
  marginTop: 10,
  fontWeight: "bold",
  textDecorationLine: "underline",
},
});