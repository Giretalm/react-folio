import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <div>
        <Link to="/#home">Home</Link>
        <Link to="/#about">About</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/#contact">Contact</Link>
      </div>
    </nav>
  );
}