import React from 'react'
import 'primeflex/primeflex.css';

export const Header = () => {
  return (
    <>
      <div 
        className="flex flex-column  align-items-center justify-content-center mt-8"       
        style={{
            postion: "absolute",
            backdropFilter: "blur(4px)"
        }}
      >
        <h2>Desarrollador de aplicaciones web</h2>

        <h3>Mi nombre es David Calderón</h3>

        <p>Soy estudiante de la carrera Ingeniería Civil Informática</p>
        <p>en la Universidad Andrés Bello</p>

        <p>Mi ilusión es crecer como profesional en la Industria</p>
        <p>del desarrollo de software</p>

      </div>
    </>
  )
}
