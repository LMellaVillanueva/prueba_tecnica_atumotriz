import React from "react";
import { Link } from "react-router-dom";
import BurguerMenu from "../burguerMenu/BurguerMenu";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="absolute top-0 md:w-full h-24 md:h-32 lg:h-1/6 flex bg-black md:justify-start md:gap-20 p-5 items-center z-10 text-white">
        <h1 className="mr-20 md:mr-20">Automotriz</h1>

        <BurguerMenu />

        <ul className="hidden md:flex w-1/2 justify-around items-center">
          <Link to={"/"}>
            <li className="text-white font-thin">Incio</li>
          </Link>
          <Link to={"/catalogo"}>
            <li className="text-white font-thin">Catálogo</li>
          </Link>
          <Link to={"/contact"}>
            <li className="text-white font-thin">Contacto</li>
          </Link>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
