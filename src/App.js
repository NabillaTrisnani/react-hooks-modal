import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './style.css';

import Modal from './components/Modal';
import ScrollableModal from './components/ScrollableModal';
import ImageModal from './components/ImageModal';
import StaticModal from './components/StaticModal';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Default</Link>
        <Link to="/scrollable">Scrollable</Link>
        <Link to="/image">With Image</Link>
        <Link to="/static">Static</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Modal />} />
        <Route path="scrollable" element={<ScrollableModal />} />
        <Route path="image" element={<ImageModal />} />
        <Route path="static" element={<StaticModal />} />
      </Routes>
    </div>
  );
}
