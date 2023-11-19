import React, { useState, useContext, useEffect } from 'react'
// STYLED COMPONENTS //
import { StyledButton } from '../styled-components/Buttons/StyledButtons'
import { StyledGreenForm } from '../styled-components/Forms/StyledGreenForm'
import { StyledMediumHeading } from '../styled-components/Headings/StyledHeadings'
//import { StyledParagraph } from '../styled-components/Text/StyledParagraph'
import { StyledFlexDiv } from '../styled-components/Wrappers/StyledFlex'

import BookingContext from '../../context/BookingContext'
function Reservations() {
    const context = useContext(BookingContext);
    const { addbooking} = context

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [amount, setAmount] = useState(0)
    const [error, setError] = useState(false)

    const [note, setNote] = useState({guest:"" })
    const handleSubmit = (e) => {
        e.preventDefault();
        addbooking(note.guest);
        setNote({ guest:""  });
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
  return (
    <section className="create-booking-wrapper">
    <StyledGreenForm
      bgColor="var(--green)"
      
    >
      <StyledFlexDiv justify="center" margin='20px'>
        <StyledMediumHeading padding="0px 0px 10px">
          Make a Reservation
        </StyledMediumHeading>
      </StyledFlexDiv>
      <div className="form-field">
        
          
       
        
      </div>
      {/* <div className="form-field">
        <label>Date *</label>
        <input
          type="date"
          name="date"
          onChange={onChange}
          className={error && !date ? 'error-input' : ''}
          value={note.date}
        />

        <label>Time *</label>
        <select
         onChange={onChange}
          className={error && !time ? 'error-input' : ''}
          value={note.time}
          name="time"
        >
          <option defaultValue={''}>Choose a seating</option>
          <option value="18">18:00 PM</option>
          <option value="21">21:00 PM</option>
        </select>
      </div> */}

      <div className="form-field">
        <label>Name of Guests *</label>
        <div className="form-field">
          <input
            type="text"
           name="guest"
            onChange={onChange}
            className={error && !amount ? 'error-input' : ''}
            value={note.guest}
          />
          
          
        </div>
      </div>
      {/* <div className="form-field">
        <label>Amount</label>
        <div className="form-field">
          <input
            type="text"
           name="amount"
            onChange={onChange}
            className={error && !amount ? 'error-input' : ''}
            value={note.amount}
          />
          
          
        </div>
      </div>
      <div className="form-field">
        <label>Table*</label>
        <div className="form-field">
          <input
            type="text"
           name="table"
            onChange={onChange}
            className={error && !amount ? 'error-input' : ''}
            value={note.table}
          />
          
          
        </div>
      </div>
      <div className="form-field">
        <label>Message*</label>
        <div className="form-field">
          <input
            type="text"
           name="message"
            onChange={onChange}
            className={error && !amount ? 'error-input' : ''}
            value={note.message}
          />
          
          
        </div>
      </div> */}
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </StyledGreenForm>
  </section>
  )
}

export default Reservations