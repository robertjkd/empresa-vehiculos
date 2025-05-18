import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Toaster } from "react-hot-toast"; // Opcional: Para notificaciones
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/common/PrivateRoute";
import UserList from "./components/admin/UserList";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import PageNotFound from "./pages/PageNotFound"; // Componente para rutas no existentes
import EditProfile from "./components/auth/EditProfile";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar visible en todas las páginas */}
      <Navbar />

      {/* Contenido principal */}
      <main className="main-content">
        {/* <Toaster position="top-right" /> Notificaciones (opcional) */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rutas protegidas */}
          <Route
            path="/admin/users"
            element={
              <PrivateRoute roles={["administrador"]}>
                <UserList />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />

          {/* Ruta 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      {/* Footer visible en todas las páginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
