import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home, Assessment, Track, Chat, Profile, Landing, Book, Check, Login, Register, Blockweb } from './pages';
import Drugs from './pages/Drugs';
import Alcohol from './pages/Alcohol';
import Devices from './pages/Devices';
import Other from './pages/Other';
import Support from './pages/Support';

function App() {
  return (
    <div>
       <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/track" element={<Track />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Landing />} />
          <Route path="/Appointment/new" element={<Book />} />
          <Route path="/Appointment/past" element={<Check />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/blockweb" element={<Blockweb/>} />
          <Route path="/drugs" element={<Drugs />} />
        <Route path="/alcohol" element={<Alcohol />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/other" element={<Other />} />
        <Route path="/support" element={<Support />} />
       </Routes>
    </div>
  )
}

export default App