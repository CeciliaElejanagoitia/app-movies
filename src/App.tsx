import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, Popular, Search, UpComing, Login, SignUp, Users } from './pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"/>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/users" element={<Users />} />
      <Route path="/upcoming" element={< UpComing />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
