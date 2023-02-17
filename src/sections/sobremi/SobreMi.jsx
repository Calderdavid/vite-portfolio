import React from 'react'
import { Image } from 'primereact/image';
import profile from '../../assets/img3.jpg'
import { Button } from 'primereact/button';
import CV from '../../assets/CV_David_Calderon.pdf'
import { Divider } from 'primereact/divider';

export const SobreMi = () => {
  return (
    <>
        <Divider className="text-center">
            <span className="p-tag">SOBRE MÍ</span>
        </Divider>
        <div className="flex flex-column lg:flex-row sm:flex-column  md:flex-column  mt-4 align-items-center">

            <div className="img lg:ml-8">
                <Image 
                    src={profile}  
                    height="600vh"
                    width="400vw"

                />
            </div>
            
            
            <div className="description flex flex-column ">
            {/* style={{color: "#FFFFFF", textAlign: "justify", fontSize: "1.8rem", fontWeight: "300"}} */}
                <p  className="text-center text-xs lg:ml-8 lg:mr-8 lg:text-3xl md:text-xl font-light lg:text-justify">
                    Soy estudiante cursando mi último año de la carrera Ingeniería Civil Informática
                    en la Universidad Andrés Bello,
                    mi ilusión es crecer como profesional en la industria del desarrollo de software.

                    <br/>

                    <a href={CV} download="Curriculum-David.pdf">
                        <Button 
                            label="CV" 
                            className="cursor-pointer"
                        />
                    </a>

                </p>
            </div>
        </div>
    </>
  )
}

