import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { members } from "../../data/members.js";
import CardInformation from "./CardInformation";

members.sort((memberA, memberB) => memberA.name.localeCompare(memberB.name));

function Cards() {
  const ITEMS_PER_PAGE = 6;
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [active, setActive] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(members.length / ITEMS_PER_PAGE));
    setCurrentPageItems(getCurrentPageItems());
  }, []);

  useEffect(() => {
    setCurrentPageItems(getCurrentPageItems());
  }, [active]);

  const getCurrentPageItems = () => {
    const startIndex = (active - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    if (endIndex > members.length) {
      return members.slice(startIndex, members.length);
    }

    return members.slice(startIndex, endIndex);
  };

  const handleInputChange = (event) => {
    setTextoBusqueda(event.target.value);
  };

  useEffect(() => {
    if (textoBusqueda === "") {
      setCurrentPageItems(getCurrentPageItems());
      setTotalPages(Math.ceil(members.length / ITEMS_PER_PAGE));

      return;
    }

    const filteredItems = members.filter((item) =>
      item.name.toLowerCase().includes(textoBusqueda.toLowerCase()),
    );

    setTotalPages(Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
    setCurrentPageItems(filteredItems.slice(0, ITEMS_PER_PAGE));
    setActive(1);
  }, [textoBusqueda]);

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-white font-semibold text-5xl">Miembros</h1>
        <div className="relative mt-4 sm:mt-0">
          <input
            type="text"
            className="px-4 py-2 pl-10 text-gray-700 border rounded-lg focus:outline-none"
            value={textoBusqueda}
            onChange={handleInputChange}
            placeholder="Buscar..."
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <hr className="border-gray-400 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-items-center">
        {currentPageItems.map((item, index) => (
          <CardInformation
            key={index}
            name={item.name}
            major={item.major}
            faculty={item.facultad}
            imageUrl={item.photo}
            socialLinks={item.redes}
          />
        ))}
      </div>
      <div className="flex items-center justify-center py-4">
        <button
          className={`px-3 py-1 rounded-md font-medium text-white mr-2 ${active === 1 ? "bg-tawsLight" : "bg-tawsBlue"}`}
          onClick={prev}
          disabled={active === 1}
        >
          Previous
        </button>
        <p className="text-white">
          Page {active} of {totalPages}
        </p>
        <button
          className={`px-3 py-1 rounded-md font-medium text-white ml-2 ${active === totalPages ? "bg-tawsLight" : "bg-tawsBlue"}`}
          onClick={next}
          disabled={active === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

const Members = () => {
  return (
    <div className="Members bg-taws">
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="miembros" />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Members;
