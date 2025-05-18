import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        VEHÍCULOS ELÉCTRICOS
      </Link>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registro</Link>
        <Link to="/profile">Perfil</Link>
      </div>
    </nav>
  );
};

export default Navbar;
