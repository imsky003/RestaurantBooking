import React, { useState, useContext, useEffect } from 'react'
import BookingContext from '../../context/BookingContext'
function Menu() {
  const context = useContext(BookingContext);
  const { getbooking} = context;
 
  return (
    <div>
<div className="row mt-4">
                    <div className="col-12">
                        <table className="table table-striped table-hover text-center table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>Sr.no</th>
                                    <th>Heading</th>
                                    <th>Content</th>
                                    <th>Author</th>
                                    <th>PublishDate</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getbooking.map((note, i) => (
                                    <tr key={i}>
                                        <td >{i}</td>
                                        <td >{note.date}</td>
                                        <td >{note.time}</td>
                                        <td >{note.guest}</td>
                                        <td >{note.amount}</td>
                                        <td >{note.table}</td>
                                        <td >{note.message}</td>
                                        
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
    </div>
  )
}

export default Menu