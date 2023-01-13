import React from 'react'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primeflex/primeflex.css';
import './navbar.css'




export const NavBar = () => {
  return (
    <>
        <nav 
          className="container flex justify-content-between bg-no-repeat"
        >
          <h4 className="mx-auto mt-2 font-light cursor-pointer" style={{color:"#FFFFFF"}}>Keegan DEV</h4>

          <ul className="flex mx-auto mt-2">
            <li><Button label="Inicio" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900" style={{color: "#FFFFFF"}}/></li>
            <li><Button label="Sobre mí" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900" style={{color: "#FFFFFF"}}/></li>
            <li><Button label="Portfolio" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900" style={{color: "#FFFFFF"}}/></li>
            <li><Button label="Blog" className="p-button-text text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900" style={{color: "#FFFFFF"}}/></li>
          </ul>

        </nav>     
    </>
  )
}

