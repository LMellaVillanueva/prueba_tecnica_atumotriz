import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Catalogo = () => {
  const allCars = useSelector((state: RootState) => state.carSlice.allCars);
  console.log(allCars);

  return (
    <React.Fragment>
      <main className="w-full mt-24 md:mt-32 lg:mt-28 text-center py-10 bg-gradient-to-br from-white via-slate-400 to-stone-900">
        <h1 className="font-semibold py-10">Modelos disponibles</h1>

        <div className="border-2 border-black w-4/5 m-auto"></div>

        <article className="flex w-fit flex-wrap items-center justify-center lg:p-10 lg:gap-8 pt-20">
          {allCars?.map((car) => (
            <section
            key={car.id}
            className="group relative flex flex-col items-center justify-center p-5 my-5 hover:-translate-y-3 transition-all hover:cursor-pointer hover:shadow-lg rounded-md hover:shadow-black m-2"
            >
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-ford-mustangford-mustangford-falconcompact-carcars-1701527482213ej0gh.png"
                width={320}
              />
            <div className="border border-black w-4/5 my-2"></div>
              <p className="font-semibold text-lg">
                {car.model} <b></b> {car.make}
              </p>
              <p className="text-lg">{car.transmission}</p>
              <p className="text-lg">Color: {car.color}</p>
              <p className="font-semibold text-lg">Desde: ${car.price}</p>

              <div className="w-full h-0.5 bg-black transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-xl my-2"></div>
            </section>
          ))}
        </article>
        <div className="border-2 border-white w-4/5 m-auto"></div>
      </main>
    </React.Fragment>
  );
};

export default Catalogo;
