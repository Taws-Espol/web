
import { useContext, useState, createContext, useEffect } from "react";
import {events as fileEvents} from "../data/events.json";

const EventContext = createContext();
export const useEventContext = () => useContext(EventContext);
export const EventProvider = ({ children }) => {

  const [events, setEvents] = useState(fileEvents);

  return (
    <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
  );
};