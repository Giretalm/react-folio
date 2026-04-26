import { View, Text, ScrollView } from "react-native";
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