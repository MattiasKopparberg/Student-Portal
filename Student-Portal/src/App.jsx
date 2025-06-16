import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"; 
import Courses from "./Pages/Courses"; 
import News from "./Pages/News";       
import Register from "./Pages/Register"; 
import CourseDetails from "./Pages/CourseDetails";

import "./App.css";

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/News" element={<News />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/courses/:code" element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;
