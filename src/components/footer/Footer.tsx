import React from "react"

const Footer = () => {
  return (
    <React.Fragment>
        <footer className="bg-black w-full p-10 flex flex-col gap-5 md:gap-16 text-white">
          <div className="border border-white w-4/5 m-auto hidden md:block"></div>
            <div className="flex flex-col md:flex-row justify-evenly text-center md:text-start">

              <section className="p-10 md:p-0">
                <h2>Sobre Automotriz</h2>
                <ul>
                  <li>Historia</li>
                  <li>Automotriz en Latinoamérica</li>
                </ul>
              </section>

                  <div className="border border-white rounded-full"></div>

              <section className="p-10 md:p-0">
                <h2>Vehículos</h2>
                <ul>
                  <li>Automóviles</li>
                  <li>Camiones</li>
                  <li>Vans</li>
                </ul>
              </section>

                  <div className="border border-white rounded-full"></div>

              <section className="p-10 md:p-0">
                <h2>Post Venta</h2>
                <p className="hover:underline hover:cursor-pointer text-blue-600">Servicio Técnico</p>
              </section>

            </div>
            <div className="border border-white w-4/5 m-auto"></div>

            <div className="flex items-center justify-center gap-3 p-5">
              <img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-lighting-and-furniture-design-studio-aqua-creations-32.png" alt="ig" width={30} className="hover:cursor-pointer"/>
              <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724630400&semt=ais_hybrid" alt="x" width={30} className="hover:cursor-pointer" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfDQevChFS5jxVKW3HJcLa4wIRBkarvOAnw&s" alt="" width={30} className="hover:cursor-pointer" />
            </div>
            <div className="border border-white w-4/5 m-auto"></div>

            <div>
              <ul className="flex justify-around flex-col md:flex-row items-center text-center gap-5">
                <li className="hover:no-underline hover:cursor-text text-white text-lg">©2024 Automotriz. Todos los derechos reservados</li>
                <li>Trabaja con nosotros</li>
                <li>Términos y Condiciones</li>
                <li>Preguntas frecuentes</li>
              </ul>
            </div>
        </footer>
    </React.Fragment>
  )
}

export default Footer