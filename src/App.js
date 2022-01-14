import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Users from './Users'
import Dashboard from './components/dashboard/Dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="users/" element={<Users />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
