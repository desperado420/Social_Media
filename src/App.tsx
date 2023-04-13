import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from "./pages/main/main"
import { Login } from "./pages/login"
import { CreatePost } from "./pages/create-post/create-post"
import { Navbar } from "./components/Navbar"
import './App.css';
// Lets start integrating firebase in our project
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/create' element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
