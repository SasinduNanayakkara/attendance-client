import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Landing from '../pages/Landing';
import Invitation from '../pages/Invitation'

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </Router>
  )
}

export default PageRoutes;
