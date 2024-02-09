import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const AuthController = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("password")) !== null) {
  //     navigate('/Dahsboard')
  //   }
  // }, [])

  const handleClickLogin = () => {
    navigate('/Dahsboard')
    localStorage.setItem("password", JSON.stringify(password))
  }

  return {
    username, 
    password, 
    handleClickLogin, 
    setPassword,
    setUsername
  }
}

export default AuthController