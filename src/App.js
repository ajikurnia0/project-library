/* eslint-disable no-throw-literal */
import Navbar from "./components/Navbar";

import Home from './pages/Home';
import Register from './pages/Register'
import Login from './pages/Login'
import DetailProduct from "./pages/Details";

import { Routes, Route } from 'react-router-dom'

import axios from "axios"

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';



function App() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')

  let onLogin = async (inputEmail, inputPassword) => {
    try {
      // Step1. Validasi inputan jangan ada yg kosong

      // Step2. Check apakah username dan password nya ada?
      let response = await axios.get(`http://localhost:5000/users?email=${inputEmail}&password=${inputPassword}`)
      if (response.data.length === 0) throw { message: 'Account Not Found' }
      setEmail(`${response.data.firstName} ${response.data.lastName} `)
      localStorage.setItem("id", response.data[0].id)
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  }

  let keepLogin = async () => {
    try {

      let getId = parseInt(localStorage.getItem("id"))

      let response = await axios.get(`http://localhost:5000/users/${getId}`)
      // console.log(response)
      setEmail(`${response.data.firstName} ${response.data.lastName} `)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    keepLogin()
  }, [])


  return (
    <>
      <Navbar myEmail={{ email }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={email ? navigate('/') : <Login myFunc={{ onLogin }} />} />
        <Route path='/register' element={email ? navigate('/') : <Register />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        {/* <Route path='/login' element={<Login myFunc={{ onLogin }} />} />
        <Route path='/register' element={<Register />} /> */}
      </Routes>
    </>
  );
}

export default App;
