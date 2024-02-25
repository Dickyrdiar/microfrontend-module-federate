import React from "react";
import App from './App'
import ReactDOM from 'react-dom/client';
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
     <App />
  </ThemeProvider>
);