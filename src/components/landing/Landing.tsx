import { Car } from "@/Types/car";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await axios.get(
        "https://freetestapi.com/api/v1/cars?limit=3"
      );
      if (data) {
        setCars(data);
      }
    };
    fetchCars();
  }, []);

  console.log(cars);

  return (
    <React.Fragment>
      <main className="mt-24 md:mt-32 lg:mt-28 relative top-0">
        <img
          src="https://www.mazda.cl/media/s0phehjy/mazda-mx5-banner-hero.webp"
          alt="principal"
          className="w-screen h-44 md:h-[30vh] lg:h-[80vh] rounded-br-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 lg:via-black/50 to-transparent h-44 md:h-[30vh] lg:h-[80vh]"></div>

        <header className="absolute flex flex-col gap-3 md:gap-6 lg:gap-9 top-5 md:top-20 lg:top-40 text-sm md:text-base lg:text-2xl m-6 p-2 md:pl-8 text-white rounded-xl">

          <h2 className="font-light">En Automotriz viaja al futuro con nuestro <span className="font-bold">nuevo catálogo!</span></h2>

          <span>
          <h3>Conoce más aquí ↓</h3>
          <Link to={"/catalogo"} className="text-base md:text-xl lg:text-2xl md:pl-5 lg:pl-10">Catálogo</Link>
          </span>
          
        </header>


        <h4 className="pt-20 text-center text-2xl md:text-4xl mb-5 font-bold">Autos Recomendados</h4>
        <div className="border border-black w-5/6 m-auto"></div>
        <article className="text-center p-10 md:p-10 w-full gap-5 flex flex-col md:flex-row justify-around">
          {cars?.map((car) => (
            <div
            key={car.id}
            className="flex flex-col p-4 justify-center items-center hover:-translate-y-2 transition-transform hover:cursor-pointer bg-stone-300/70 rounded-xl"
            >
              <img
                src="https://pngimg.es/d/camaro_PNG30.png"
                alt="referenceImage"
                width={300}
                />
              <span className="font-semibold"><h4>{car.make} <b></b> {car.year}</h4></span>
              <p>{car.model}</p>
              <p>Desde <span className="font-bold">${car.price}</span></p>
            </div>
          ))}
        </article>
          <div className="border border-black w-5/6 m-auto"></div>

        <article className="text-center py-10 flex flex-col gap-10 bg-gradient-to-b from-white to-stone-500 rounded-t-3xl">
          <div>
            <h5 className="text-3xl font-medium">Asesoramiento</h5>
            <p className="text-lg">Te ayudamos a escoger tu mejor compra!</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-3 md:items-start text-center justify-evenly p-5 text-sm md:text-base">
            <div className="w-5/6 hover:shadow-lg hover:shadow-black rounded-xl hover:cursor-pointer hover:bg-slate-100 bg-slate-100 py-4 transition hover:scale-105">
              <h5 className="text-xl font-medium">Cotizar</h5>
              <p>Cotiza los precios según tu configuración</p>
            </div>

            <div className="w-5/6 hover:shadow-lg hover:shadow-black rounded-xl hover:cursor-pointer hover:bg-slate-100 bg-slate-100 py-4 transition hover:scale-105">
              <h5 className="text-xl font-medium">Comparar</h5>
              <p>Compara tus modelos para una compra más efectiva</p>
            </div>

            <div className="w-5/6 hover:shadow-lg hover:shadow-black rounded-xl hover:cursor-pointer hover:bg-slate-100 bg-slate-100 py-4 transition hover:scale-105">
              <h5 className="text-xl font-medium">Asesoría</h5>
              <p>Obten un asesoramiento personalizado con un ejecutivo</p>
            </div>
          </div>
        </article>

        <img src="https://www.hyundai.cl/content/uploads/ioniq-phev-exterior-galeria-04-2-16x9-1.jpg" alt="auto" width={1920} className="brightness-50 h-80 md:h-auto" />

        <section className="absolute flex flex-col items-center justify-center md:flex-row bottom-1 md:bottom-20 lg:bottom-96 h-1/6 pt-7 lg:pt-40">
          
            <article className="p-5 md:p-8 m-5 md:m-10 lg:p-10 text-sm md:text-base lg:text-3xl md:w-1/2 lg:w-2/6 text-white border border-white rounded-xl hover:cursor-pointer hover:bg-white hover:text-neutral-900 transition">
              <h5 className="font-bold">Agendar Servicio Técnico</h5>
              <p className="font-thin lg:text-2xl">Todo lo que tu vehículo necesita, mantención, repuestos, reparaciones y más...</p>
              <p>Ver más -&gt;</p>
            </article>

            <article className="p-5 md:p-8 m-5 md:m-10 lg:p-10 text-sm md:text-base lg:text-3xl md:w-1/2 lg:w-2/6 text-white border border-white rounded-xl hover:cursor-pointer hover:bg-white hover:text-neutral-900 transition">
              <h5 className="font-bold">Agendar con un Asesor de Venta</h5>
              <p className="font-thin lg:text-2xl">Conversa con uno de nuestros asesores para optimizar tu compra</p>
              <p>Ver más -&gt;</p>
            </article>
        </section>  

      </main>
    </React.Fragment>
  );
};

export default Landing;
