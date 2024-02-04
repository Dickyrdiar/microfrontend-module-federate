import { Card, Typography } from "@material-tailwind/react"
import React, { useState } from "react"

const MFE1_Screen = React.lazy(() => import('MFE1/ComponentScreen'))

const App = () => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    // <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
    //   <div className="mb-2 p-4">
    //     <Typography variant="h5" color="blue-gray">
         
    //     </Typography>
    //   </div>
    // </Card>

    <div className="relative">
      <div 
        className="flex items-center justify-center h-screen"
      >
        {/* this is render container */}
      </div>
      {""}
      <MFE1_Screen/>
    </div>
  )
}

export default App