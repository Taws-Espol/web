import React from "react";
import "../../Components/style.css";
import "../../Pages/Events/events.css";
import Navbar from "../../Components/Navbar";
import Dots from "../../Components/DotPattern";
import Footer from "../../Components/Footer";
import { EventList } from "../../Components/EventList";
import { EventProvider } from "../../contexts/EventContext";
function Header() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 p-2 flex justify-between items-center">
        <h1 className="text-white font-semibold text-5xl">Actividades</h1>
        
      </div>
    </div>
  );
}

const Events = () => {
  return (
    <div className="Members bg-taws">
      <Dots />
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="eventos" />
        <Header />
        <div className="container mx-auto mt-8 w-[85%]">
          <EventProvider>
            <EventList />
          </EventProvider>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Events;
