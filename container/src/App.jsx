import React from "react"

const MFE1_Screen = React.lazy(() => import('MFE1/ComponentScreen'))

const App = () => {

  return (
    <div className="relative">
      <div>this is render container</div>
      {""}
      <MFE1_Screen/>
    </div>
  )
}

export default App