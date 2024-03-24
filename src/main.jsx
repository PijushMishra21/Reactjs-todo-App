import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import "font-awesome/css/font-awesome.min.css"


// createRoot.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(
    <App />

);
