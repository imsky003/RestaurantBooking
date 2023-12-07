import "./App.css";
import {  useState } from "react";
// REACT ROUTER //
import { BrowserRouter, Route, Routes } from "react-router-dom";
// COMPONENTS //
import Home from "./components/pages/Home";
import Reservations from "./components/pages/Reservations";
import EditReservations from "./components/pages/EditReservations";

import Menu from "./components/pages/Menu";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Register.js";

import GDPR from "./components/pages/GDPR";
import LayoutWithNav from "./components/LayoutWithNav";
import LayoutWithoutNav from "./components/LayoutWithoutNav";

import UserCancelReservation from "./components/pages/UserCancelReservation";
import BookingState from "./context/BookingState";




function App() {
  

    

  

  return (
   
      <BookingState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutWithNav />}>
              <Route index element={<Home />} />
              <Route path="/gdpr" element={<GDPR />} />
              <Route path="/edit/:id" element={<EditReservations />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route
                path="/booking_cancelation/:id"
                element={<UserCancelReservation />}
              />
              <Route path="/menu" element={<Menu />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            
              <Route path="*" element={<NotFound />} />
             
            </Route>
            <Route path="/" element={<LayoutWithoutNav />}>
             
            </Route>
          </Routes>
        </BrowserRouter>
        </BookingState>

  );
}

export default App;
