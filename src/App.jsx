import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home, Assessment, Track, Chat, Profile, Landing, Book, Check } from './pages';
import { Register } from './components';

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
       </Routes>
    </div>
  )
}

export default App