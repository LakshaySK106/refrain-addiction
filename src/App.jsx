import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Assessment,
  Track,
  Chat,
  Profile,
  Landing,
  Book,
  Check,
  Login,
  Register,
} from './pages';
import Consultant from './pages/Consultant';
import Loginc from './pages/Loginc';
import Registerc from './pages/Registerc';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/track" element={<Track />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/consultant" element={<Consultant />} />
        <Route path="/" element={<Landing />} />
        <Route path="/Appointment/new" element={<Book />} />
        <Route path="/Appointment/past" element={<Check />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerc" element={<Registerc />} />
        <Route path="/loginc" element={<Loginc />} />
      </Routes>
    </div>
  );
}

export default App;
