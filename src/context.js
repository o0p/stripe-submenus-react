import React, { useState, useContext } from 'react';
import App from './App';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvide = ({ children }) => {
  return <App.AppContext>{children}</App.AppContext>;
};
