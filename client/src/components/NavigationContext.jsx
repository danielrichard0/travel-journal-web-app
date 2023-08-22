import React, { createContext, useContext } from "react";

const NavigationContext = createContext();

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider = ({
  children,
  navigateFunction,
  cookieFunction,
  cookie,
}) => (
  <NavigationContext.Provider
    value={{
      navigate: navigateFunction,
      cookieFunction: cookieFunction,
      cookie: cookie,
    }}
  >
    {children}
  </NavigationContext.Provider>
);
