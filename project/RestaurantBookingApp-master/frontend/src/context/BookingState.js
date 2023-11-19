import React, { useState } from "react";
import BookingContext from "./BookingContext";

const BookingState = (props) => {
    const host = "http://localhost:10000";
    const notesinitial = [];
    const [notes, setNotes] = useState(notesinitial);
    // 
    // get all booking

    const getBooking = async () => {
        // API Call
        const response = await fetch(`${host}/bookings/`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
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
        const response = await fetch(`${host}/bookings/${id}`, {
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
    const editbooking = async (id,date, time, amount, tables, message, guest) => {
        // Api call
        // console.log(title);
        const response = await fetch(`${host}/bookings/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                
            },

            body: JSON.stringify({ date, time, amount, tables, message, guest }),
        });
        const json = response.json();
        console.log(json);

        // let newNotes = JSON.parse(JSON.stringify(notes));
        // logic to edit in client
        // for (let index = 0; index < newNotes.length; index++) {
        //     const element = newNotes[index];
        //     if (element._id === id) {
        //         newNotes[index].heading = heading;
        //         newNotes[index].content = content;
        //         newNotes[index].author = author;
        //         break;
        //     }
        // }
        // setNotes(newNotes);
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
