import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = (prop) => {
  const usuario = localStorage.getItem("tipoDeCliente"); // La función getUser() devuelve el usuario si está logueado o null si no lo está.
  

  if (prop.rolAutorizado) {
    if (usuario && usuario === prop.rolAutorizado) {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    if (!usuario) {
      return <Outlet />;
    }
  }
  return <Navigate to="/" />;
};

export default ProtectedRoutes;
