import React, { useState } from "react";
import BookingContext from "./BookingContext";

const BookingState = (props) => {
    const host = "http://localhost:3005";
    const notesinitial = [];
    const [notes, setNotes] = useState(notesinitial);
    // 
    // get all booking

    const getBooking = async () => {
        // API Call
        const response = await fetch(`${host}/reserve/`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                
            }
        });
        const note =  await response.json();
        setNotes(note);
        console.log(note);
    };
    // Add note
    
    const addbooking = async (guest) => {
        // API Call
        const response = await fetch(`${host}/bookings/`, {
            // eslint-disable-next-line
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({ guest }),
        });
        const note = response.json();
        setNotes(notes.concat(note));
        console.log(note);
    };

    // delete note
    const deletebooking = async (id) => {
        // API Call
        const response = await fetch(`${host}/reserve/${id}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
               
            },
        });
        const json = response.json();
        console.log(json);
        //
        console.log("deleted id" + id);
        const newNote = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNote);
    };
    // edit note
    const editbooking = async (id,name,time, location,size,phone,email,table) => {
        // Api call
        // console.log(title);
        const response = await fetch(`${host}/reserve/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                
            },

            // body: JSON.stringify({ email,table,phone }),
            body: JSON.stringify({ name,time, location,size,phone,email,table }),
        });
        const json = response.json();
        console.log(json);

       
    };
    return (
        <BookingContext.Provider
            value={{ notes, addbooking, editbooking, deletebooking, getBooking }}
        >
            {props.children}
        </BookingContext.Provider>
    );
};

export default BookingState;
