// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { Notfound } from "./pages/Notfound"
import { Toaster } from "./Components/ui/toaster"


function App() {
 

  return (
    <>
    <Toaster />
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<Notfound />}/>
        
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
