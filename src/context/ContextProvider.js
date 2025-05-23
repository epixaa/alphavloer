import useToggle from "@/hooks/useToggle";
import React from "react";
import context from "./context";

const ContextProvider = ({ children }) => {
  const [menuStatus, toggleMenu] = useToggle();
  const [sideNav, setSideNav] = useToggle();

  const value = {
    menuStatus,
    toggleMenu,
    sideNav,
    setSideNav,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
