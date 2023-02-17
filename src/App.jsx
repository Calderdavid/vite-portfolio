import { NavBar } from './sections/navbar/NavBar'
import './index.css'
import header from './assets/img9.jpg';
import { Header } from './sections/header/Header';
import { SobreMi } from './sections/sobremi/SobreMi';
import { Portfolio } from './sections/portfolio/Portfolio';
import { Contacto } from './sections/contacto/Contacto';
import { useMediaQuery } from 'react-responsive';
import { SideBar } from './sections/navbar/SideBar';



function App() {

  const isBigScreen = useMediaQuery({query: '(max-width: 1824px)'})
  const isMediumScreen = useMediaQuery({query: '(max-width: 1188px)'})
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 680px)'})

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
        {
          isMediumScreen ? 
          <>
            <SideBar />
            {/* <NavBar /> */}
            <Header />

          </> 
          :
          <>
              <NavBar />
              <Header />
            
            </>
        }
        {

        }

      </div>

        {               
          <>
            <SobreMi />

            <Portfolio />

            <Contacto /> 
          </>
        }
    </>
  )
}

export default App
