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
      <main className="mt-32 lg:mt-28 relative top-0">
        <img
          src="https://www.geely.cl/geely/site/artic/20231103/imag/foto_0000001520231103100746/BANNER-HOME-NC-min.jpg"
          alt="principal"
          className="w-screen h-56 md:h-[40vh] lg:h-[80vh]"
        />
        <header className="absolute top-9 text-stone-300 md:top-28 lg:top-56 text-sm md:text-base lg:text-2xl pl-10">
          <h2>En automotriz viaja al futuro con nuestro nuevo catálogo!</h2>
          <h3>Conoce más aquí!</h3>
          <Link to={"/catalogo"}>Catálogo</Link>
        </header>

        <h4 className="pt-20 text-center">Autos Recomendados</h4>
        <article className="text-center p-20 md:p-32 flex flex-col md:flex-row justify-around">
          {cars?.map((car) => (
            <div
              key={car.id}
              className="flex flex-col p-2 justify-center items-center hover:-translate-y-2 transition-transform hover:cursor-pointer"
            >
              <img
                src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6bd1b01e63164eafb7281aed7db8c6be.jpg"
                alt="referenceImage"
                width={300}
              />
              <h4>{car.make}</h4>
              <p>{car.model}</p>
              <p>${car.price}</p>
            </div>
          ))}
        </article>

        <article className="text-center py-10 flex flex-col gap-10">
          <div>
            <h5>Asesoramiento</h5>
            <p>Te ayudamos a escoger tu mejor compra!</p>
          </div>

          <div className="flex items-start text-center justify-evenly p-5 text-sm md:text-base">
            <div className="w-5/6">
              <h5>Cotizar</h5>
              <p>Cotiza los precios según tu configuración</p>
            </div>

            <div className="w-5/6">
              <h5>Comparar</h5>
              <p>Compara tus modelos para una compra más efectiva</p>
            </div>

            <div className="w-5/6">
              <h5>Asesoría</h5>
              <p>Obten un asesoramiento personalizado con un ejecutivo</p>
            </div>
          </div>
        </article>

        {/* footer */}
      </main>
    </React.Fragment>
  );
};

export default Landing;
