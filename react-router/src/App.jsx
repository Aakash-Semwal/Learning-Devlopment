import React from 'react';
import './App.css'
import {Link, NavLink, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home Page</div>}/>
        <Route path="/support" element={<div>Support Page</div>}/>
        <Route path="/about" element={<div>About Page</div>}/>
        <Route path="/labs" element={<div>Labs Page</div>}/>
        <Route path="*" element={<div>Not Found</div>}/>
      </Routes>

    </>
  )
}

export default App
