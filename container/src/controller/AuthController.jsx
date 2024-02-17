import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useLocation } from 'react-router-dom'

const AuthController = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useNavigate()
  const [disabled, setDisabled] = useState(false)

  const handleClickLogin = () => {
    if (username !== "") {
      localStorage.setItem("password", JSON.stringify(password))
      history("/dahsboard")
    } else {
      setDisabled(true)
    }
  }

  return {
    username, 
    password, 
    handleClickLogin, 
    setPassword,
    setUsername,
    location,
    disabled
  }
}

export default AuthController