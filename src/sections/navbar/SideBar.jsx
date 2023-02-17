import React, {useState} from 'react'
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";


export const SideBar = (props) => {

    const [visible, setVisible] = useState("false");

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


    return (
        <>
            <Button label="Toggle sidebar" onClick={() => setVisible(!visible)} />
            <Panel visible={visible} toggleable={true}>
                <li><Button onClick={scrollAboutme} label="Inicio" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900"/></li>
                <li><Button onClick={scrollAboutme} label="Sobre mí" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900"/></li>
                <li><Button onClick={scrollProjects} label="Portfolio" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900"/></li>
                <li><Button onClick={scrollContact} label="Contacto" className="p-button-text mx-5 text-xl cursor-pointer transition-ease-in-out transition-duration-500 hover:bg-yellow-500 text-white hover:text-gray-900"/></li>
            </Panel>
        </>

    )
}