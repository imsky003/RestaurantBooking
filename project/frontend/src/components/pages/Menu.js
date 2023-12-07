import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';


import BookingContext from '../../context/BookingContext'
function Menu() {
    const context = useContext(BookingContext);
    const {  notes,getBooking,deletebooking } = context;
    useEffect(() => {
        
        getBooking();
    
       
    
    
        // eslint-disable-next-line
      }, []);
var record = notes;
console.log(record);
 
  return (
    <>
   
   <div className="container">

   
     <div className="row mt-4" style={{marginTop: '100px'}}>
                    <div className="col-12" style={{marginTop: '100px',padding:'0px 10px'}}>
                        <table className="table table-striped table-hover text-center table-sm table-bordered bg-black">
                            <thead>
                                <tr>
                                    <th style={{color:'white'}}>Sr.no</th>
                                    <th style={{color:'white'}}>Guest</th>
                                    <th style={{color:'white'}}>Edit</th>
                                    <th style={{color:'white'}}>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notes.map((note, i) => (
                                    <tr key={i}>
                                        <td style={{color:'white'}}>{i}</td>
                                        <td style={{color:'white'}}>{note.guest}</td>
                                        <td ><Link to={`/edit/${note._id}`}><i className="fa fa-edit"></i></Link></td>
                                        <td style={{color:'white'}}><i className="fa fa-trash" onClick={() => deletebooking(note._id)}></i></td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                
    </>
  )
}

export default Menu