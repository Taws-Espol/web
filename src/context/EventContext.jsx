import React from "react";
import { useContext, createContext } from "react";
import { events } from "../data/events.json";

const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  return (
    <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
  );
};
