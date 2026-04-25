import { View, Text, ScrollView } from "react-native";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles";

export default function Projects() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Projects</Text>

      <ProjectCard
        title="Exercise App"
        description="Workout tracking app with timers and reps."
        link="https://giretalm.github.io/react-exercise-app/"
      />

      <ProjectCard
        title="Movie CMS"
        description="PHP and MySQL project for managing and viewing reviews."
        link="https://students.gaim.ucf.edu/~gi497540/dig3134c/assignments/assignment04/login.php"
      />

      <ProjectCard
        title="Portfolio App"
        description="This React Native portfolio project."
        link="https://github.com"
      />
    </ScrollView>
  );
}