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
      <main className="mt-40 lg:mt-28 relative top-0">
        <img
          src="https://www.mazda.cl/media/s0phehjy/mazda-mx5-banner-hero.webp"
          alt="principal"
          className="w-screen h-44 md:h-[30vh] lg:h-[80vh]"
        />
        <header className="absolute top-9 text-stone-300 md:top-28 lg:top-56 text-sm md:text-base lg:text-2xl pl-10 ">
          <h2>En automotriz viaja al futuro con nuestro <span>nuevo catálogo!</span></h2>
          <h3>Conoce más aquí!</h3>
          <Link to={"/catalogo"}>Catálogo</Link>
        </header>

        <h4 className="pt-20 text-center text-2xl md:text-4xl mb-5">Autos Recomendados</h4>
        <div className="border border-black w-5/6 m-auto"></div>
        <article className="text-center p-10 md:p-10 w-full gap-5 flex flex-col md:flex-row justify-around">
          {cars?.map((car) => (
            <div
            key={car.id}
            className="flex flex-col p-4 justify-center items-center hover:-translate-y-2 transition-transform hover:cursor-pointer bg-slate-200 rounded-xl"
            >
              <img
                src="https://pngimg.es/d/camaro_PNG30.png"
                alt="referenceImage"
                width={300}
              />
              <h4>{car.make}</h4>
              <p>{car.model}</p>
              <p>Desde ${car.price}</p>
            </div>
          ))}
        </article>
          <div className="border border-black w-5/6 m-auto"></div>

        <article className="text-center py-10 flex flex-col gap-10 bg-stone-200">
          <div>
            <h5 className="text-3xl">Asesoramiento</h5>
            <p>Te ayudamos a escoger tu mejor compra!</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-3 md:items-start text-center justify-evenly p-5 text-sm md:text-base">
            <div className="w-5/6 hover:shadow-xl rounded-xl hover:cursor-pointer hover:bg-slate-100 bg-slate-100 py-4 transition-shadow">
              <h5 className="text-xl">Cotizar</h5>
              <p>Cotiza los precios según tu configuración</p>
            </div>

            <div className="w-5/6 hover:shadow-xl rounded-xl hover:cursor-pointer hover:bg-slate-100 bg-slate-100 py-4 transition-shadow">
              <h5 className="text-xl">Comparar</h5>
              <p>Compara tus modelos para una compra más efectiva</p>
            </div>

            <div className="w-5/6 hover:shadow-xl rounded-xl hover:cursor-pointer hover:bg-slate-100 bg-slate-100 py-4 transition-shadow">
              <h5 className="text-xl">Asesoría</h5>
              <p>Obten un asesoramiento personalizado con un ejecutivo</p>
            </div>
          </div>
        </article>

        <img src="https://www.hyundai.cl/content/uploads/ioniq-phev-exterior-galeria-04-2-16x9-1.jpg" alt="auto" width={1920} className="hover:contrast-50 transition" />

        <section className="absolute bottom-44 md:bottom-80 lg:bottom-96 lg:pb-72">
            <article>
              <h5>Agendar servicio técnico</h5>
            </article>
            <article></article>
        </section>  

      </main>
    </React.Fragment>
  );
};

export default Landing;
