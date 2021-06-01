import React, { useState, useContext } from 'react';
import App from './App';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvide = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModel = () => {
    setIsModalOpen(false);
  };

  return <App.AppContext>{children}</App.AppContext>;
};
