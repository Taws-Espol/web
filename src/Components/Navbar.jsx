import "./style.css";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Inicio", link: "/", selected: "inicio" },
    { name: "Nosotros", link: "/about", selected: "about" },
    { name: "Eventos", link: "/eventos", selected: "eventos" },
    {
      name: "Proyectos",
      link: "https://github.com/Taws-Espol",
      selected: "proyectos",
    },
    { name: "Miembros", link: "/miembros", selected: "miembros" },
    { name: "Blog", link: "https://medium.com/taws", selected: "blog" },
  ];

  return (
    <div className="Navbar">
      <div className="flex justify-center p-8 items-center">
        <div className="max-md:flex max-md:justify-evenly w-4/5 p-2 bg-tawsLight rounded-full">
          <span
            className="text-white sm:hidden w-full text-center"
            onClick={() => setOpen(!open)}
          >
            TAWS
          </span>
          <ul
            className={`md:flex md:justify-evenly absolute md:static w-full md:w-auto md:pl-0 transition-all duration-300 ease-in bg-tawsLight text-center ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className={`${
                  props.item === link.selected ? "border-b-2" : ""
                }  md:my-0 my-7`}
              >
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-gray-400 duration-500'"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {open ? (
          <IconX
            onClick={() => setOpen(!open)}
            color="white"
            size={48}
            className="sm:hidden"
          />
        ) : (
          <IconMenu2
            onClick={() => setOpen(!open)}
            color="white"
            size={48}
            className="sm:hidden"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
