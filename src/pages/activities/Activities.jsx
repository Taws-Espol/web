import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { EventList } from "../../components/EventList.jsx";
import { EventProvider } from "../../context/EventContext.jsx";

function Header() {
  return <h1 className="text-white font-semibold text-5xl">Actividades</h1>;
}

const Activities = () => {
  return (
    <div className="Members bg-taws">
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="eventos" />
        <Header />
        <div className="mx-auto mt-8">
          <EventProvider>
            <EventList />
          </EventProvider>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Activities;
