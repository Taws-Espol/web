import React from "react";
import { useEventContext } from "../context/EventContext";
import { getLocalizedDataFromDate } from "../utils";

export const EventList = () => {
  const { events } = useEventContext();

  return (
    <div className="flex flex-col justify-center items-center space-y-16">
      {events &&
        events.map((evento, index) => (
          <EventCard key={`event-card-${index}`} event={evento} index={index} />
        ))}
    </div>
  );
};

export const EventCard = ({ event, index }) => {
  const [year, mes, dia] = getLocalizedDataFromDate(event.date);

  return (
    <div
      key={index}
      className="bg-tawsLight px-2 cursor-pointer w-3/4 rounded-md shadow-2xl flex flex-col lg:grid lg:grid-cols-[2fr,4fr,1fr] text-white
      hover:scale-105 hover:brightness-90 active:brightness-105 active:scale-95 transition-transform ease-out duration-500"
    >
      <div className="my-auto mx-auto">
        <img src={event.img} alt="evento" className="object-cover" />
      </div>
      <div className="p-4 flex flex-col my-4">
        <h2 className="text-lg font-semibold">{event.name}</h2>
        <span className="flex items-center gap-2 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p className="text-sm">Auditorio FIEC</p>
        </span>
        <p className="mt-4 text-sm whitespace-pre-wrap">{event.description}</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center mb-4">
        <p className="text-xl font-extrabold">{year}</p>{" "}
        {/* Mostrar el año encima del mes */}
        <p className="text-2xl font-extrabold">{mes}</p>
        <p className="text-4xl text-cargo font-medium">{dia}</p>
        <p className="text-2xl font-medium">10:00</p>
      </div>
    </div>
  );
};
