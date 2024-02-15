import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useLocation } from 'react-router-dom'

const AuthController = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useNavigate()

  const handleClickLogin = () => {
    localStorage.setItem("password", JSON.stringify(password))
    history("/dahsboard")
  }

  return {
    username, 
    password, 
    handleClickLogin, 
    setPassword,
    setUsername,
    location
  }
}

export default AuthController