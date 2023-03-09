import { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useMe } from './hook';
import { Home, Popular, Search, UpComing, Login, SignUp, User } from './pages';

function App() {
  const {me} = useMe()

  useEffect(() => {
    console.log(me)
  }, [me])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"/>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/users" element={<User />} />
      <Route path="/upcoming" element={< UpComing />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
