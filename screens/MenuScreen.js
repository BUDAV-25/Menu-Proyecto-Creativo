import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
        <Link to="/">Home</Link> |
        <Link to="/sumadora">Sumadora</Link> |
        <Link to="/traductor">Traductor</Link> |
        <Link to="/tabla">Tabla</Link> |
        <Link to="/experiencia">Experiencia</Link>
    </nav>
  );
}