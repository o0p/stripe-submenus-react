import React, { useState, useContext } from 'react';
import App from './App';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvide = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return <App.AppContext>{children}</App.AppContext>;
};
