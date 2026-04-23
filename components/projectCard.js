export default function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech}</p>
      <a href={github} target="_blank">GitHub</a>
      <a href={demo} target="_blank">Live Demo</a>
    </div>
  );
}
