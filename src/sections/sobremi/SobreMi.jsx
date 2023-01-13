import React from 'react'
import { Image } from 'primereact/image';
import profile from '../../assets/img3.jpg'

export const SobreMi = () => {
  return (
    <>
        <div className="flex mt-4 align-items-center">

            <div className="img ml-6">
                <Image 
                    className="border-round-sm"
                    src={profile}  
                    height={600}
                />
            </div>
            
            
            <div className="description ml-8 mr-8">
                <h3 style={{color: "black", fontSize: "3rem", textAlign: "center"}}>Mi nombre es David Calderón</h3>

                <p  style={{color: "black", textAlign: "center", fontSize: "1.8rem", fontWeight: "300"}}>
                    Soy Estudiante de la carrera Ingeniería Civil Informática
                    en la Universidad Andrés Bello

                    Mi ilusión es crecer como profesional en la industria del desarrollo de software

                </p>
            </div>



        </div>
    </>
  )
}

