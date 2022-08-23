import React, { useState, useEffect, useContext } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Harry");
  const { isError, isLoading, movie } = useFetch(query);

  return (
    <AppContext.Provider value={{ movie, isLoading, query, setQuery, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
