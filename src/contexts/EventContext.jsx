
import { useContext, useState, createContext } from "react";
import { eventosJSON } from "../data/events";

const EventContext = createContext();
export const useEventContext = () => useContext(EventContext);
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(eventosJSON.eventos);

  return (
    <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
  );
};