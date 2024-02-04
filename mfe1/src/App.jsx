import Button from "./Components/Button"
import { Card, Typography } from "@material-tailwind/react"

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Typography variant="h5">
        this is mfe1
      </Typography>
      {""}
      <button onClick={() => console.log("click")}>click this</button>
      
    </div>
  )
}

export default App