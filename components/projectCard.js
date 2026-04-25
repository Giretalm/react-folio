export default function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech}</p>

      <div className="links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}

        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}