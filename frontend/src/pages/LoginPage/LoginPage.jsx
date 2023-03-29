import React, { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import { Link } from "react-router-dom"

// Import SVG
import Profile from '../../../public/undraw_profile.svg'

// import "./LoginPageStyle.css"


//Imports Bootstrap
import Container from 'react-bootstrap/Container';
import  Button  from "react-bootstrap/Button";
import Input from 'react-bootstrap/InputGroup';

const LoginPage = () => {
  const {authenticated,user,login,loginError} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    login(email,password)

  };

  return (
    // <div className="login">
    //   {/* <p>Authenticated?:{JSON.stringify(authenticated)}</p>
    //   <p>Email:{JSON.stringify(user)}</p> */}
    //   <div className="form">
    //   <div className="title">Login</div>
    //     <form onSubmit={handleLogin}>
    //       <div className="field">
    //         <label htmlFor="email">E-mail:</label>
    //         <input
    //           type="email"
    //           name="email"
    //           id="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div className="field">
    //         <label htmlFor="password">Senha:</label>
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <p className="loginError">{loginError}</p>
    //       <div className="actions">
    //         <button>Entrar</button>
    //       </div>
    //     <p>Não possui uma conta?<Link className='signIn' to='/cadastro'>Sign Up</Link></p>
    //     </form>
    //   </div>
    // </div>

    <Container className="d-grid h-100">
    <div className="d-flex  flex-column  align-items-center mt-5 ">
        
        <img src={Profile} alt="Imagem perfil"  className="d-flex align-items-center h-25 w-25"/>
        <h1>Login</h1>
      <form className="col-4 border border-primary rounded text-center p-3 w-90 col-md-4 col-sm-8" >
              <div className="mt-3 mb-3">
                
                  <label className="form-label h4">Email</label>

                  <input type="email" className="form-control border border-primary" placeholder="Digite seu email." required />
              </div>
              <div className="mt-3 mb-3">
                  <label className="form-label h4">Senha</label>
                  <input type="password" className="form-control border border-primary"  placeholder="Digite sua senha." required />
              </div>
              
              <div className=" text-center">
                  <Button type="submit" className="btn btn-lg btn-primary ">Sign in</Button>
          </div>

      <div className="text-start align-self-end mt-4">
    <p >Não possui uma conta?<Link className='signIn' to='/cadastro'>Sign Up</Link></p>
    </div>
      </form>
      </div>
      </Container>



  );
};

export default LoginPage;
