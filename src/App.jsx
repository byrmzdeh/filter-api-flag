import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from './Country';
import CountryDetails from './CountryDetails';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Country />}></Route>
        <Route path="/detail/name/:name" element={<CountryDetails />}></Route>


      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App

