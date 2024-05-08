import Login from './pages/Login';
import Load from './components/load'
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Couse from './pages/Couse';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(false)
    }, 5000);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
    <div>
    {load ? <Load /> : ''}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/couse' element={<Couse />} />
      </Routes>
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
