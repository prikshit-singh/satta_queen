import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Navbar from '../components/homecomponents/Navbar';
import links from '../links';
function Routes1(props) {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    userAuthenticate();
  });
  const userAuthenticate = async () => {
    var token = window.localStorage.getItem('token');

    await fetch(links.userdataLink, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setAuthenticate(true);
        } else {
          setAuthenticate(false);
          window.location.href(links.loginLink);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        {authenticate ? (
          <>
            <Route path='/dashboard' element={<Dashboard />} />
          </>
        ) : (
          <Route path='/login' element={<Login />} />
        )}

        <Route path='/*' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routes1;
