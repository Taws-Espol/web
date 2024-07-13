import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import Navbar from "../../Components/Navbar";
import Dots from "../../Components/DotPattern";
import Footer from "../../Components/Footer";
import { miembros } from "../../data/miembros";

function Header() {
  return (
    <div className="mt-8 mb-4">
      <h1 className="text-white font-semibold text-5xl">Miembros</h1>
    </div>
  );
}

function Cards() {
  const ITEMS_PER_PAGE = 6;
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [active, setActive] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(miembros.length / ITEMS_PER_PAGE));
    setCurrentPageItems(getCurrentPageItems());
  }, []);

  useEffect(() => {
    setCurrentPageItems(getCurrentPageItems());
  }, [active]);

  const getCurrentPageItems = () => {
    const startIndex = (active - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    if (endIndex > miembros.length) {
      return miembros.slice(startIndex, miembros.length);
    }
    return miembros.slice(startIndex, endIndex);
  };

  const handleInputChange = (event) => {
    setTextoBusqueda(event.target.value);
  };

  useEffect(() => {
    if (textoBusqueda === '') {
      setCurrentPageItems(getCurrentPageItems());
      setTotalPages(Math.ceil(miembros.length / ITEMS_PER_PAGE));
      return;
    }
    const filteredItems = miembros.filter((item) => item.toLowerCase().includes(textoBusqueda.toLowerCase()));
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
      <div className="flex justify-end items-center mb-5">
        <input
          type="text"
          className="px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          value={textoBusqueda}
          onChange={handleInputChange}
          placeholder="Buscar..."
        />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {currentPageItems.map((item, index) => (
          <Card className="w-64 bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-between" key={index}>
            <CardHeader floated={false} className="h-48">
              {/* TODO: MAKE THIS DYNAMIC */}
              <img
                src="https://via.placeholder.com/200"
                alt="profile-picture"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="text-center flex flex-col justify-between h-full">
              <div>
                <Typography variant="h5" color="blue-gray" className="pt-4 mb-2">
                  {item}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  Ing. en computación
                </Typography>
                <Typography color="gray" className="text-justify mt-2 p-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </Typography>
              </div>
              <div className="mt-2">
                <Typography color="gray" className="pb-3">
                  correo@espol.edu.ec
                </Typography>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-center py-4">
        <button
          className={`px-3 py-1 rounded-md text-white mr-2 ${active === 1 ? 'bg-gray-300' : 'bg-tawsBlue'}`}
          onClick={prev}
          disabled={active === 1}
        >
          Previous
        </button>
        <p className="text-white">
          Page {active} of {totalPages}
        </p>
        <button
          className={`px-3 py-1 rounded-md text-white ml-2 ${active === totalPages ? 'bg-gray-300' : 'bg-tawsBlue'}`}
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
      {/* <Dots /> */}
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="miembros" />
        <Header />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Members;
