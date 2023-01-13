import React from 'react'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

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
        <p id="name" style={{fontSize: "5rem"}}>David Calderón</p>
        
        <p>Desarrollador de aplicaciones web</p>


        <ul className="flex justify-content-center mt-4">
            <li>
              <a>
                  <i 
                    className="pi pi-linkedin cursor-pointer"
                    style={{fontSize: '1.8em'}}
                  ></i>
              </a>
            </li>
            <li>
              <a>
                  <i 
                    className="pi pi-github ml-4 cursor-pointer"
                    style={{fontSize: '1.8em'}}
                  ></i>
              </a>
            </li>
            <li>
              <a>
                  <i 
                    className="pi pi-instagram ml-4 cursor-pointer"
                    style={{fontSize: '1.8em'}}
                  ></i>
              </a>
            </li>
            <li>
              <a>
                  <i 
                    className="pi pi-twitter ml-4 cursor-pointer"
                    style={{fontSize: '1.8em'}}
                  ></i>
              </a>
            </li>
            <li>
              <a>
                  <i 
                    className="pi pi-youtube ml-4 cursor-pointer"
                    style={{fontSize: '1.8em'}}
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
        ></i>
      </div>
    </>
  )
}
