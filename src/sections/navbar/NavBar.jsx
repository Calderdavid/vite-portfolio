import React from 'react'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primeflex/primeflex.css';




export const NavBar = () => {
  return (
    <>
        <nav 
          className="container flex justify-content-between bg-no-repeat"
        >
          <h5 className="mx-auto mt-2" style={{color: "#FFFFFF"}}>David Calderón</h5>

          <ul className="flex mx-auto mt-2">
            <li><Button label="Inicio" className="p-button-text mx-5 text-xl" style={{color: "#FFFFFF"}}/></li>
            <li><Button label="Sobre mí" className="p-button-text mx-5 text-xl" style={{color: "#FFFFFF"}}/></li>
            <li><Button label="Portfolio" className="p-button-text mx-5 text-xl" style={{color: "#FFFFFF"}}/></li>
            <li><Button label="Blog" className="p-button-text text-xl" style={{color: "#FFFFFF"}}/></li>
          </ul>

        </nav>     
    </>
  )
}

