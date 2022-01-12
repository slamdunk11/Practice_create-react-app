import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Users from './Users'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="users/" element={<Users />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
