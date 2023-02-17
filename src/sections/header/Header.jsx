import React, { useEffect } from 'react'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

export const Header = () => {

  const scroll = () => {
    window.scrollTo({
      top: 765,
      behavior: 'smooth'
    });
  };



  return (
    <>
      <div 
        className="flex flex-column  align-items-center justify-content-center mt-8"       
        style={{
            backdropFilter: "blur(4px)"
        }}
      >
        {/* style={{fontSize: "5rem"}} */}
        <p id="name" className="text-4xl lg:text-8xl"><b>David Calderón</b></p>
        
        <p className="text-2xl lg:text-6xl">| Desarrollador Web |</p>


        <ul className="flex justify-content-center mt-4">
            <li>
              <a href="https://www.linkedin.com/in/calderdavid11/">
                  <i 
                    className="pi pi-linkedin cursor-pointer text-3xl lg:text-7xl"
                  ></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Calderdavid">
                  <i 
                    className="pi pi-github ml-4 cursor-pointer text-3xl lg:text-7xl"
                  ></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/calderdavid11/">
                  <i 
                    className="pi pi-instagram ml-4 cursor-pointer text-3xl lg:text-7xl"
                  ></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/CalderDavid11">
                  <i 
                    className="pi pi-twitter ml-4 cursor-pointer text-3xl lg:text-7xl"
                  ></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCq2wDxwDvo1wnleEmkcC_eQ">
                  <i 
                    className="pi pi-youtube ml-4 cursor-pointer text-3xl lg:text-7xl"
                  ></i>
              </a>
            </li>
        </ul>
      </div>
      
      <div 
        className="down-arrow flex justify-content-center align-items-end mt-4" 
      >
        <i 
          className="scalein animation-duration-2000 animation-iteration-infinite pi pi-angle-double-down cursor-pointer"
          style={{fontSize: '1.8em'}}
          onClick={scroll}
        >
        </i>
      </div>
    </>
  )
}
