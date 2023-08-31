import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hen from './Products/Hen';
import Barnys from './Products/Barnys';
import Salads from './Products/Salads';
import Navigation from './Navigation';







const Mainrouter = () => {
  return (
        <div>
       
    <Routes>
      
        <Route path="/" element={<Navigation/>} />
        <Route path="/Barnys" element={<Barnys />} /> 
        <Route path="/Salads" element={<Salads />} />
        <Route path="/Hen" element={<Hen/>} />
    </Routes>
    </div>
  );
};

export default Mainrouter;


