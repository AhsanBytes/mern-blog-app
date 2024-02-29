import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Sign-up' element={<SignUp />}></Route>
      <Route path='Sign-in' element={<Signin />}></Route>
      <Route path='Dashboard' element={<Dashboard />}></Route>
      <Route path='Projects' element={<Projects />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;