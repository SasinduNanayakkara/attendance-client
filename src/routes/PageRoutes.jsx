import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Landing from '../pages/Landing';

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default PageRoutes;
