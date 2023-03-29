import React,{useState,useContext} from "react"
import { AuthContext } from "../../contexts/auth"
import { Link } from "react-router-dom"
// import "./SignUpPage.css"

//Import SVG
import Cadastro from '../../../public/undraw_security.svg'

//Imports Bootstrap
import Container from 'react-bootstrap/Container';
import  Button  from "react-bootstrap/Button";
import Input from 'react-bootstrap/InputGroup';

const SignUpPage = () => {
    const {cadastro,signUpError} = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCadastro = async (e) => {
    e.preventDefault()
    cadastro(email,password)

  };
  return (
    // <div className="cadastro">
    //   <div className="form">
    //   <div className="title">Cadastro</div>
    //     <form onSubmit={handleCadastro}>
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
    //       <p className="signUpError">{signUpError}</p>
    //       <div className="actions">
    //         <button>Cadastrar</button>
    //       </div>
    //     <p>Já possui uma conta?<Link className="signUp" to='/login'>Sign In</Link></p>
    //     </form>
    //   </div>
    // </div>


    <Container className="d-grid h-100">
    <div className="d-flex  flex-column  align-items-center mt-5 ">
        
        <img src={Cadastro} alt="Imagem perfil"  className="d-flex align-items-center h-25 w-25"/>
        <h1>Cadastro</h1>
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
                  <Button type="submit" className="btn btn-lg btn-primary ">Sign up</Button>
          </div>

      <div className="text-start align-self-end mt-4">
      <p>Já possui uma conta?<Link className="signUp" to='/login'>Sign In</Link></p>
    </div>
      </form>
      </div>
      </Container>
  );
};

export default SignUpPage;
