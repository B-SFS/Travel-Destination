import React from "react";
import Home from "./components/home/Home"
import Data from "./data/data.json"
function App(){
  return(
    <Home Data = {Data}/>
  )
}
export default App;