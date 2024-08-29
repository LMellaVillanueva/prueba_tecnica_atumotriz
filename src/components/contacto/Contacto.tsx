import React from "react";

const Contacto = () => {
  return (
    <React.Fragment>
      <img src="https://www.latercera.com/resizer/aery9hi04sdjcxehjQ5yXq1N8pc=/arc-anglerfish-arc2-prod-copesa/public/J4AHAHSFNRGX7MCO6653MOPEFA.jpg" alt="bg" className="absolute inset-0 h-[155vh] md:w-[100vw] md:h-[100vh] lg:h-[150vh] contrast-50 -z-10 object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 lg:via-black/50 to-transparent -z-10 h-[155vh] md:w-[100vw] lg:h-[150vh] md:h-[100vh]"></div>

      <main className="mt-24 md:mt-32 lg:mt-28 py-24 px-3 text-center text-white">
        <h1 className="text-center mt-5 font-semibold">Vía de Contacto</h1>
        <p className="md:pb-16">Ya sea Servicio Técnico, Mantenimiento o Asesoría, contáctanos!</p>


        <section className="flex flex-col md:flex-row justify-evenly p-5 gap-10">
          <header className="md:w-1/3 flex flex-col justify-center pt-14 md:pt-0">
            <h2>¿En qué podemos ayudarte?</h2>
            <p>Si deseas más información puedes mandarnos un mensaje privado y solucionar las dudas o problemas que tengas.</p>
          </header>

          <div className="border border-white md:w-fit rounded-full"></div>

          <form className="flex flex-col items-center justify-around h-96 p-3 text-black">
            <input type="text" placeholder="Nombre y Apellido" className="w-full p-1 border-b border-black rounded-md focus:border-b-4 transition-all"/>

            <div className="flex gap-5 justify-center">
              <input type="text" placeholder="E-mail" className="w-1/2 p-1 border-b border-black rounded-md focus:border-b-4 transition-all"/>
              <input type="text" placeholder="Rut" className="w-1/2 p-1 border-b border-black rounded-md focus:border-b-4 transition-all"/>
            </div>

            <div className="flex gap-5 justify-center">
              <input type="text" placeholder="Teléfono" className="w-1/2 p-1 border-b border-black rounded-md focus:border-b-4 transition-all"/>
              <input type="text" placeholder="Ciudad" className="w-1/2 p-1 border-b border-black rounded-md focus:border-b-4 transition-all"/>
            </div>

            <select name="motivo" id="motivo" className="rounded-md">
              <option value="">Motivo</option>
              <option value="">Asesoría</option>
              <option value="">Servicio Técnico</option>
              <option value="">Mantenimiento</option>
            </select>

            <input type="text" placeholder="Mensaje" className="w-full p-1 border-b border-black rounded-md focus:border-b-4 transition-all"/>

            <button type="submit" className="border border-white p-2 rounded-lg bg-white text-black hover:bg-black hover:text-white transition hover:-translate-y-1">Enviar mensaje</button>
          </form>

        </section>
          
      </main>
    </React.Fragment>
  );
};

export default Contacto;
