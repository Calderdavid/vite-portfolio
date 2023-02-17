import React, {useState, useEffect} from 'react'
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Comics from '../../assets/comics.jpg'
import Todo from '../../assets/todo.jpg'
import Iglesia from '../../assets/iglesia.jpg'
import Calendar from '../../assets/calendar.jpg'
import Bot from '../../assets/discord.png'

export const Portfolio = () => {

    const [showFullText, setShowFullText] = useState(false);

    const handleShowFullText = () => {
        setShowFullText(!showFullText);

    }
    


    
    const header = (
        <img alt="Card" style={{ width: '25em' }} src={Comics} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            <Button label="Ver repositorio" icon="pi pi-eye" />
        </span>
    );


    return (
        <>
            <Divider className="text-center">
                <span className="p-tag">PROYECTOS</span>
            </Divider>
            
            <div className="flex flex-row flex-wrap justify-content-evenly gap-3">
                <Card className="align-items-baseline" title="Heroes App" subTitle="Frontend" style={{ width: '25em', color: "#FFFFFF" }} 
                    footer={
                        <a href="https://github.com/Calderdavid/HeroesApp">
                            <Button className="cursor-pointer" label="Ver repositorio" icon="pi pi-eye" />
                        </a>
                    } 
                    header={header}>
                    <p className="m-0 " style={{lineHeight: '1.5', textAlign: 'justify', color: "#FFFFFF" }}>
                        La presente aplicación es una Single Page Application que tiene como objetivo 
                        mostrar una lista de héroes. La misma se desarrolla utilizando conceptos de react-router 
                        y cuenta con una funcionalidad de búsqueda, la cual utiliza los parámetros de consulta 
                        para filtrar el arreglo de superhéroes. De esta forma, se permite al usuario navegar a 
                        la siguiente pantalla y regresar al mismo lugar donde se encontraba anteriormente.
                    </p>
                </Card>

                <Card title="GiftExpert App" subTitle="Frontend" style={{ width: '25em', color: "#FFFFFF" }} 
                    footer={
                        <a href="https://github.com/Calderdavid/react-GifExpertApp">
                            <Button className="cursor-pointer" label="Ver repositorio" icon="pi pi-eye" />
                        </a>
                    } 
                    header={
                        <img alt="Card" style={{ width: '25em' }} src="https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-08-gipsi-gif-logo.gif" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    }>
                    <p className="m-0 " style={{lineHeight: '1.5', textAlign: 'justify', color: "#FFFFFF" }}>
                        La aplicación GifExpertApp es una herramienta de pequeño tamaño en la que se aplica 
                        la comunicación entre componentes mediante peticiones a una API. 
                        Se ha implementado un custom hook que permite monitorear el estado 
                        de carga de la información, así como detectar eventos de error y recepción de datos. 
                        Todo esto se ha centralizado de manera que se pueda utilizar de forma eficiente 
                        en futuras ocasiones en las que sea necesario acceder a una API.
                    </p>
                </Card>

                <Card title="To-Do Challenge" subTitle="Frontend" style={{ width: '25em', color: "#FFFFFF" }} 
                    footer={
                        <a href="https://github.com/Calderdavid/TodoChallenge">
                            <Button className="cursor-pointer" label="Ver repositorio" icon="pi pi-eye" />
                        </a>
                    } 
                    header={
                        <img alt="Card" style={{ width: '25em' }} src={Todo} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    }>
                    <p className="m-0 " style={{lineHeight: '1.5', textAlign: 'justify', color: "#FFFFFF" }}>
                        La aplicación ToDo List es una herramienta que permite llevar un control eficiente de las tareas pendientes. 
                        Esta aplicación permite ingresar tareas y clasificarlas 
                        según su estado de completitud, ya sea completadas o pendientes. 
                        Todo esto se realiza del lado del cliente, permitiendo una gestión sencilla y ordenada de las tareas.
                    </p>
                </Card>

                <Card title="Iglesia Digitalizada" subTitle="Frontend & Backend" style={{ width: '25em', color: "#FFFFFF" }} 
                    footer={
                        <span>  
                            <a href="https://github.com/Calderdavid/iglesia"><Button className="cursor-pointer" label="Ver repositorio" icon="pi pi-eye" /></a>
                            <Button label={showFullText ? "Ver menos" : "Ver más"} icon="pi pi-angle-down" className="p-button-secondary ml-2 cursor-pointer" onClick={handleShowFullText}/>
                        </span>
                    } 
                    header={
                        <img alt="Card" style={{ width: '25em' }} src={Iglesia} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    }>
                    

                    {
                        showFullText 
                        ? 
                        <p className="m-0 " style={{lineHeight: '1.5', textAlign: 'justify', color: "#FFFFFF" }}>
                            El proyecto Iglesia Digitalizada es una iniciativa en la cual participé junto a tres estudiantes más. 
                            La finalidad de este proyecto fue apoyar a la parroquia Santo Toribio en la gestión y administración de 
                            registros de documentos eclesiásticos. En este proyecto se desarrolló un sitio web de tipo intranet, 
                            diseñado de manera simple e intuitiva, donde los usuarios registrados con permisos pueden acceder de 
                            forma digital a los documentos eclesiásticos de la iglesia. También se incluyó la capacidad de gestionar, 
                            manipular y generar los certificados en formato PDF para su descarga futura, así como visualizar en la 
                            página la información de usuarios y documentos en el momento que el usuario desee.
                            
                            <br /> 
                            <br /> 
                            
                            En este proyecto se utilizó la metodología de Scrum++, lo cual permitió una planeación detallada del proyecto 
                            y la realización de buenas prácticas en un trabajo colaborativo. Esto nos permitió hacer entregas parciales 
                            del sistema, lo que dio al cliente la ventaja de ver cómo iba avanzando el proyecto y dio más flexibilidad 
                            para la innovación, así como ir aplicando los requisitos que al cliente le parecieron oportunos. 
                            Esto nos permitió entregar un producto final acorde a lo que necesitaba.

                            <br />
                            <br /> 

                            El principal beneficio que nuestro sistema proporciona a la organización 
                            se basa en la ventaja que ofrece la era digital. 
                            La digitalización de los certificados de la parroquia en un servicio web mejora significativamente 
                            la eficacia en la manipulación, impresión y gestión de la información contenida en un gran número de documentos. 
                            Anteriormente, debido al formato físico de los datos de los feligreses, se presentaba una gran dificultad 
                            en la emisión y manipulación de los certificados, lo que podía causar duplicación de datos, 
                            confusión en la escritura, digitación incorrecta de la información y posibilidad de pérdida 
                            de libros o tomos anuales. Con la transición digital, los cuatro usuarios principales 
                            se benefician de una mejora en la eficacia en la exploración, gestión y manipulación 
                            de los documentos de aproximadamente 25,577 feligreses.       

                        </p>
                        :
                        <p className="m-0 " style={{lineHeight: '1.5', textAlign: 'justify', color: "#FFFFFF" }}>
                            El proyecto Iglesia Digitalizada es una iniciativa en la cual participé junto a tres estudiantes más. 
                            La finalidad de este proyecto fue apoyar a la parroquia Santo Toribio en la gestión y administración de 
                            registros de documentos eclesiásticos. En este proyecto se desarrolló un sitio web de tipo intranet, 
                            diseñado de manera simple e intuitiva, donde los usuarios registrados con permisos pueden acceder de 
                            forma digital a los documentos eclesiásticos de la iglesia. También se incluyó la capacidad de gestionar, 
                            manipular y generar los certificados en formato PDF para su descarga futura, así como visualizar en la 
                            página la información de usuarios y documentos en el momento que el usuario desee.
                        </p>
                    }
                </Card>

                <Card title="Calendar App" subTitle="Frontend & Backend" style={{ width: '25em', color: "#FFFFFF" }} 
                    footer={
                        <a href="https://github.com/Calderdavid/CalendarApp">
                            <Button className="cursor-pointer" label="Ver repositorio" icon="pi pi-eye" />
                        </a>
                    } 
                    header={
                        <img alt="Card" style={{ width: '25em' }} src={Calendar} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    }>
                    <p className="m-0 " style={{lineHeight: '1.5', textAlign: 'justify', color: "#FFFFFF" }}>
                        Desarrollé un calendario colaborativo utilizando el stack MERN (MongoDB, Express, React y Node.js), 
                        el cual ofrece autenticación y cuenta con un backend y frontend. La aplicación permite a los 
                        usuarios manejar eventos y agendarlos con fechas, conectándose directamente a una base de datos 
                        en MongoDB mediante un CRUD local.




                    </p>
                </Card>

                <Card title="Bot de Discord" subTitle="Backend" style={{ width: '25em', color: "#FFFFFF" }} 
                    footer={
                        <a href="https://github.com/Calderdavid/botdiscord">
                            <Button className="cursor-pointer" label="Ver repositorio" icon="pi pi-eye" />
                        </a>                        
                    } 
                    header={
                        <img alt="Card" style={{ width: '25em' }} src={Bot} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                    }>
                    <p className="m-0 " style={{lineHeight: '1.5', textAlign: 'justify', color: "#FFFFFF" }}>
                        La presente aplicación es una Single Page Application que tiene como objetivo 
                        mostrar una lista de héroes. La misma se desarrolla utilizando conceptos de react-router 
                        y cuenta con una funcionalidad de búsqueda, la cual utiliza los parámetros de consulta 
                        para filtrar el arreglo de superhéroes. De esta forma, se permite al usuario navegar a 
                        la siguiente pantalla y regresar al mismo lugar donde se encontraba anteriormente.
                    </p>
                </Card>

            </div>
        
        
        </>
    )
}
