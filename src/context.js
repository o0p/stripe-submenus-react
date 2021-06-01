import React, { useState, useContext } from 'react';
import App from './App';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvide = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsSubmenuOpen(true);
  };
  const closeModel = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <App.AppContext
      values={{
        isSubmenuOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeSidebar,
        closeModel,
      }}>
      {children}
    </App.AppContext>
  );
};
