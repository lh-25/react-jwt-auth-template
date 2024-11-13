// src/App.jsx

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
        {user ? (
          <Route path='/' element={<Dashboard user={user} />} />
        ) : (
          <Route path='/' element={<Landing />} />
        )}
        

      </Routes>
    </>
  )
}


