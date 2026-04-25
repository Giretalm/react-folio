import { useState } from "react";
import { View } from "react-native";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

import styles from "./styles";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <View style={styles.container}>
      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}

      <Footer />
    </View>
  );
}