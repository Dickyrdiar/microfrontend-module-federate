import Button from "./Components/Button"
import { Typography, Input } from "@material-tailwind/react"
import AuthController from "./controller/AuthController"

const App = () => {

  const {
    username, 
    password, 
    setPassword, 
    setUsername, 
    handleClickLogin} 
  = AuthController()

  return (
    <div className="w-full">
      <div className="flex items-center justify-center h-screen">
        <Typography variant="h5">
          this is mfe1
        </Typography>

       <div className="flex justify-around">
        <div>
          <Typography>
            username
          </Typography>

          <Input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div>
          <Typography>
            Password
          </Typography>

          <Input
           type="password" 
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       </div>

        {""}
        <Button
          onClick={handleClickLogin}
        />
      </div>
    </div>
  )
}

export default App