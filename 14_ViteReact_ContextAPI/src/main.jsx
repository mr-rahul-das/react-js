import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import App01 from './App01.jsx';
import App02 from './App02.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App02/>


  </StrictMode>,
)
