import React from "react";

const Contacto = () => {
  return (
    <React.Fragment>
      <main className="mt-32 md:mt-40 lg:mt-28 py-5 px-3 bg-stone-800">
        <h1 className="text-center mt-5">Contacto</h1>

        <section className="flex flex-col md:flex-row justify-evenly p-5 gap-10">
          <header className="md:w-1/3 flex flex-col justify-center">
            <h2>¿En qué podemos ayudarte?</h2>
            <p>Si deseas más información puedes mandarnos un mensaje privado y solucionar las dudas que tengas.</p>
          </header>

          <div className="border border-white md:w-fit rounded-full"></div>

          <form className="flex flex-col items-center justify-around h-96 p-3">
            <input type="text" placeholder="Nombre y Apellido" className="w-full bg-black border-b-2 rounded-md p-1"/>

            <div className="flex gap-5 justify-center">
              <input type="text" placeholder="E-mail" className="w-1/2 bg-black border-b-2 rounded-md p-1"/>
              <input type="text" placeholder="Rut" className="w-1/2 bg-black border-b-2 rounded-md p-1"/>
            </div>

            <div className="flex gap-5 justify-center">
              <input type="text" placeholder="Teléfono" className="w-1/2 bg-black border-b-2 rounded-md p-1"/>
              <input type="text" placeholder="Ciudad" className="w-1/2 bg-black border-b-2 rounded-md p-1"/>
            </div>

            <input type="text" placeholder="Mensaje" className="w-full bg-black border-b-2 rounded-md p-1"/>

            <button type="submit">Enviar mensaje</button>
          </form>

        </section>
          
      </main>
    </React.Fragment>
  );
};

export default Contacto;
