import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, Popular, Search, UpComing } from './pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"/>
      <Route index element={<Home />} />
      <Route path="/upcoming" element={< UpComing />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
