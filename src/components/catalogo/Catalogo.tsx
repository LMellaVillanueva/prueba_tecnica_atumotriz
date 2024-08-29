import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Catalogo = () => {
  const allCars = useSelector((state: RootState) => state.carSlice.allCars);

  return (
    <React.Fragment>
      <main className="w-full mt-44 lg:mt-28 text-center py-10">
        <h1>Modelos disponibles</h1>
        <article className="flex w-fit flex-wrap items-center justify-center lg:p-10 lg:gap-8">

        {allCars?.map((car) => (
          <section
          key={car.id}
          className="flex flex-col items-center justify-center p-10 mt-24 hover:-translate-y-2 transition-transform hover:cursor-pointer"
          >
            <img
              src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_6bd1b01e63164eafb7281aed7db8c6be.jpg"
              alt="referenceImage"
              width={300}
              />
            <h2>{car.make}</h2>
            <p>{car.model}</p>
            <p>${car.price}</p>
          </section>
        ))}
        </article>
      </main>
    </React.Fragment>
  );
};

export default Catalogo;
