import "./App.css";
import AppRoutes from "./Rotas/AppRoutes";
import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./contexts/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <AppRoutes />
  );
}

export default App;
