import React from 'react'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primeflex/primeflex.css';

export const NavBar = () => {

  const scrollAboutme = () => {
    window.scrollTo({
      top: 765,
      behavior: 'smooth'
    });
  };

  const scrollProjects = () => {
    window.scrollTo({
      top: 1445,
      behavior: 'smooth'
    });
  };

  const scrollContact = () => {
    window.scrollTo({
      top: 3000,
      behavior: 'smooth'
    });
  };

  const handleRefesh = () => {
    window.location.reload();
  }

  return (
    <>
        <div 
          className="container flex justify-content-between bg-no-repeat"
        >
          <h4 onClick={handleRefesh} className="mx-auto mt-2 font-light cursor-pointer" style={{fontFamily: 'Raleway'}}>Keegan<span> DEV</span></h4>

          <div className="flex mx-auto mt-2">
              {/* <li><Button onClick={scrollProjects} label="Inicio" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900"/></li> */}
              <li><Button onClick={scrollAboutme} label="Sobre mí" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900"/></li>
              <li><Button onClick={scrollProjects} label="Portfolio" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900"/></li>
              <li><Button onClick={scrollContact} label="Contacto" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900"/></li>
   
          </div>
        </div>        
    </>
  )
}

