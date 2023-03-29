import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'


const NavBar = ({onLogout}) => {
  const {user} = useContext(AuthContext)

  return (
    <div className="nav">
        <h1 className="logo">SisRepo</h1>
        <p>{user.email}</p>
        <button onClick={onLogout}>Sair</button>
    </div>
  )
}

export default NavBar