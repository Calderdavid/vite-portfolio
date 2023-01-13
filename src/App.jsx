import { useState } from 'react'
import { NavBar } from './sections/navbar/NavBar'
import './index.css'
import header from './assets/img9.jpg';
import { Header } from './sections/header/Header';
import { SobreMi } from './sections/sobremi/SobreMi';



function App() {
  const [state, setState] = useState(false)

  return (
    <>
      <div 
        className="container"
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: "100vw 100vh",
          height: "100vh",
          position: "relative",
        }}
      >
        <NavBar />
        <Header />
      </div>

      <SobreMi />

      
    </>
  )
}

export default App
