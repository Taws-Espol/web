import React from "react";
import { events } from "../data/events.js";
import { EventCard } from "./EventList.jsx";

export function UpcomingEvents() {
  return (
    <section>
      <h1 className="text-tawsBlue font-semibold text-4xl mt-24 mb-4">
        <span className="text-white">$~</span> Próximos Eventos
      </h1>
      <section className="flex flex-col justify-center items-center py-6">
        {events.map((evento, index) =>
          evento.soon ? (
            <EventCard
              key={`event-card-${index}`}
              event={evento}
              index={index}
            />
          ) : (
            ""
          ),
        )}
      </section>
    </section>
  );
}
