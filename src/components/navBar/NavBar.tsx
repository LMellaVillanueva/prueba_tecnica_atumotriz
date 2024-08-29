import React from "react";
import { Link } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="absolute top-0 md:w-full h-40 md:h-1/6 flex bg-neutral-950 md:justify-start md:gap-20 p-5 items-center z-10 text-white">
        <h1 className="mr-20 md:mr-20">Automotriz</h1>

        <BurguerMenu />

        <ul className="hidden md:flex w-1/2 justify-around items-center">
          <Link to={"/"}>
            <li>Incio</li>
          </Link>
          <Link to={"/catalogo"}>
            <li>Catálogo</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contacto</li>
          </Link>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
