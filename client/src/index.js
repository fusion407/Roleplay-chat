import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/UserContext'
import { CableProvider } from './contexts/cable';

ReactDOM.render(
  <BrowserRouter>
    <CableProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CableProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
