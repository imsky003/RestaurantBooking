import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import NoteState from "./context/notes/noteState";
import Store from './components/Store';
import Edit from './components/Edit'
export const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/store" element={<Store />}></Route>
              <Route exact path="/edit/:id" element={<Edit />}></Route>

            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  )
}
export default App