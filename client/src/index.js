import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/UserContext'
import { CableProvider } from './contexts/cable';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CableProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CableProvider>
  </BrowserRouter>
  );
