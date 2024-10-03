import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import User from './components/User/User';
import Status from './components/Status/Status';
import Priority from './components/Priority/Priority';
import { DataProvider } from './DataContext';
import React, { useState } from 'react';

function App() {
  const [selectedOrdering, setSelectedOrdering] = useState('title'); // Default ordering
  const [selectedGrouping, setSelectedGrouping] = useState('status'); // Default grouping

  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar 
          setSelectedOrdering={setSelectedOrdering} 
          setSelectedGrouping={setSelectedGrouping} 
        />
        <Routes>
          <Route 
            path='/' 
            element={<Status selectedOrdering={selectedOrdering} selectedGrouping={selectedGrouping} />} 
          />
          <Route 
            path='/users' 
            element={<User selectedOrdering={selectedOrdering} selectedGrouping={selectedGrouping}/>} 
          />
          <Route 
            path='/priority' 
            element={<Priority selectedOrdering={selectedOrdering} selectedGrouping={selectedGrouping} />} 
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
