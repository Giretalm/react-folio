import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>

      <ProjectCard
        title="Exercise App"
        description="An exercise app that allows you to choose your own exercise from 
        repetition type to duration type. For the duration exercises you will be able to 
        add reps and reset when needed. For the duration exercises you're able to start,
        stop, and reset a timer."
        tech="React Native"
        github="https://giretalm.github.io/react-exercise-app/"
        demo="#"
      />

      <ProjectCard
        title="Movie Review Website"
        description="A movie review CMS that allows users with proper access level to 
        either add or manage reviews."
        tech="PHP and MySQL"
        link="https://students.gaim.ucf.edu/~gi497540/dig3134c/assignments/assignment04/login.php"
        demo="#"
      />
    
       <ProjectCard
        title="Portfolio Website"
        description="Personal portfolio built with React."
        tech="React"
        github="#"
        demo="#"
      />

       <ProjectCard
        title="Mock Game Store "
        description="Mock Barista game store. Description of game and ability to purchase game."
        tech="HTML/CSS"
        github="#"
        demo="#"
      />
    </div>
  );
}