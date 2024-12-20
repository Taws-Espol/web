import React from "react";
import { SocialIcon } from "react-social-icons";
import datacamplogo from "../assets/DC_Donates_logo_inverted.png";

const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap justify-center pb-6 mt-10 gap-4">
      <div className="max-w-md text-center">
        <img src={datacamplogo} />
        <p className="text-white">
          Con el apoyo de{" "}
          <a
            href="https://www.datacamp.com/donates"
            className="text-orange hover:cursor-pointer"
            target="_blank"
            rel="noreferrer noopener"
          >
            DataCamp
          </a>
        </p>
      </div>
      <div>
        <h1 className="text-white text-center font-bold text-4xl pb-4 md:text-left">
          Contáctanos
        </h1>
        <h2 className="text-white">
          Bloque 15 - FIEC, Guayaquil 090150, Ecuador
          <br />
          taws@espol.edu.ec
        </h2>
      </div>
      <div>
        <h1 className="text-white text-center font-bold text-4xl pb-4 md:text-left">
          Redes Sociales
        </h1>
        <ul className="flex justify-around lg:justify-normal">
          <li className="mr-4">
            <SocialIcon
              url="https://twitter.com/TawsEspol"
              target="_blank"
              rel="noopener noreferrer"
              fgColor="#fff"
            />
          </li>
          <li className="mr-4">
            <SocialIcon
              url="https://www.facebook.com/tawsespol"
              target="_blank"
              rel="noopener noreferrer"
              fgColor="#fff"
            />
          </li>
          <li className="mr-4">
            <SocialIcon
              url="https://github.com/Taws-Espol"
              target="_blank"
              rel="noopener noreferrer"
              fgColor="#fff"
            />
          </li>
        </ul>
      </div>
      <p className="text-white text-center p-5 text-lg w-full">
        Copyright © {new Date().getFullYear()} TAWS. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
