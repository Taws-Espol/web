import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Members from './Pages/Members/Members';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/frontend-taws">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/miembros" element={<Members />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
