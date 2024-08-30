import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const BurguerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <main className="md:hidden pr-16 text-3xl">
        <button onClick={() => setOpen(true)}><MenuIcon/></button>
        {open && (
          <section className="fixed inset-0 w-screen h-screen bg-neutral-900 bg-opacity-95 z-10">
            <button onClick={() => setOpen(false)} className="ml-40 w-full py-5"><CloseIcon/></button>
            <ul className="flex flex-col items-end p-4 pt-14 gap-10 h-full pb-28">
              <Link to={"/"}>
                <li onClick={() => setOpen(false)} className="text-white font-light">Incio</li>
              </Link>

              <div className="border border-white w-full"></div>

              <Link to={"/catalogo"}>
                <li onClick={() => setOpen(false)} className="text-white font-light">Catálogo</li>
              </Link>

              <div className="border border-white w-full"></div>

              <Link to={"/contact"}>
                <li onClick={() => setOpen(false)} className="text-white font-light">Contacto</li>
              </Link>
            </ul>
          </section>
        )}
      </main>
    </React.Fragment>
  );
};

export default BurguerMenu;
