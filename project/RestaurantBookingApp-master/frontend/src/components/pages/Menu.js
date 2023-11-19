import React, { useState, useContext, useEffect } from 'react'
import BookingContext from '../../context/BookingContext'
function Menu() {
  const context = useContext(BookingContext);
  const { notes } = context;
  
  return (
    <div>
<div className="row mt-4">
                    <div className="col-12">
                        <table className="table table-striped table-hover text-center table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>Sr.no</th>
                                    <th>Guest</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                           
                                {notes.map((note, i) => (
                                    <tr key={i}>
                                        <td >{i}</td>
                                       
                                        <td >{note.guest}</td>
                                        <td></td>
                                        <td></td>
                                        
                                    </tr>))}
                            
                        </table>
                    </div>
                </div>
    </div>
  )
}

export default Menu