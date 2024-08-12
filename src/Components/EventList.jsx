import { useEffect } from "react";
import { useEventContext } from "../contexts/EventContext";
import { getLocalizedDataFromDate } from "../utils";
import imageEvent from "../assets/image_sample.png";
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
  const [anio, mes, dia] = getLocalizedDataFromDate(event.date);
  return (
    <div
      key={index}
      className="bg-[#303441] cursor-pointer w-3/4 h-44 rounded-md shadow-2xl flex items-start text-white
      hover:scale-105 hover:brightness-90 active:brightness-105 active:scale-95 transition-transform ease-out duration-500"
    >
      <div className="relative -top-2 -left-2 w-1/3 min-w-[33%] max-w-[33%] card h-44 overflow-hidden rounded-lg shadow-2xl">
        <img
          src={imageEvent}
          alt="evento"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="h-44 w-[53%] pl-4 flex flex-col  justify-start pt-4">
        <div className="">
          <h2 className="text-lg font-semibold overflow-hidden truncate w-full">
            {event.name}
          </h2>
          <span className="flex items-center gap-2 font-medium">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4">
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
          

          <p className="mt-4 text-sm h-14 text-ellipsis overflow-hidden truncate w-full whitespace-pre-wrap ">
            {event.description}
          </p>
        </div>
      </div>
      <div className="w-[13%] overflow-hidden h-44 flex flex-col justify-center items-center text-center">
        <p className="text-2xl font-extrabold">{mes}</p>
        <p className="text-4xl  text-[#CBCA6D] font-medium">{dia}</p>
        <p className="text-2xl font-medium ">10:00</p>
      </div>
    </div>
  );
};

export default EventCard;
