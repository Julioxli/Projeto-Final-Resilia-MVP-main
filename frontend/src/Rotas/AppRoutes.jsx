import React,{useContext} from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import { AuthContext, AuthProvider } from "../contexts/auth";

const AppRoutes = () => {
  
  const Private = ({children}) => {
    const { authenticated,loading } = useContext(AuthContext)
    if(loading){
      return <div className="loading"> Carregando...</div>
    }
    if(!authenticated){
      return <Navigate to='/login'/>
    }
    return children
  }
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/cadastro" element={<SignUpPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={
            <Private>
              <MainPage />
            </Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
