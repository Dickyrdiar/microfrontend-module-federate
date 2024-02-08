import Button from "./Components/Button"
import { Typography, Input } from "@material-tailwind/react"

const App = () => {

  const handleClick = () => {
    console.log('click')
  }

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

          <Input type="text"/>
        </div>

        <div>
          <Typography>
            Password
          </Typography>

          <Input type="password" />
        </div>
       </div>

        {""}
        <Button
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default App