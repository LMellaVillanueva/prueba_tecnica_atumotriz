import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurguerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <main className="md:hidden pr-16 text-3xl">
        <button onClick={() => setOpen(true)}>≡</button>
        {open && (
          <section className="absolute inset-0 w-screen h-screen bg-neutral-900 bg-opacity-95 z-10">
            <button onClick={() => setOpen(false)} className="m-auto w-full py-5">X</button>
            <ul className="flex flex-col items-center justify-center gap-10 h-full pb-28">
              <Link to={"/"}>
                <li onClick={() => setOpen(false)}>Incio</li>
              </Link>
              <Link to={"/catalogo"}>
                <li onClick={() => setOpen(false)}>Catálogo</li>
              </Link>
              <Link to={"/contact"}>
                <li onClick={() => setOpen(false)}>Contacto</li>
              </Link>
            </ul>
          </section>
        )}
      </main>
    </React.Fragment>
  );
};

export default BurguerMenu;
