import React from 'react'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Contact from '../Pages/Contact'
import Doctors from '../Pages/Doctors/Doctors'
import DoctorDetails from '../Pages/Doctors/DoctorDetails'

import {Routes, Route} from  'react-router-dom'


const Routers = () => {
  return <Routes>
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home />} />
<Route path="/contact" element={<Contact />} />
<Route path="/login" element={<Login />} />
<Route path="/doctor" element={<Doctors />} />
<Route path="/doctor/:id" element={<DoctorDetails />} />
<Route path="/register" element={<SignUp />} />
<Route path="/services" element={<Services />} />

  </Routes>
}

export default Routers
