import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { StyledGreenForm } from '../styled-components/Forms/StyledGreenForm'
import { StyledAdminButton } from '../styled-components/Buttons/StyledButtons'
import { StyledFlexDiv } from '../styled-components/Wrappers/StyledFlex'
import {
	StyledMediumHeading,
	StyledSmallHeading,
  } from '../styled-components/Headings/StyledHeadings'

function Register() {

	const [credentials, setCredentials] = useState({ email: "", password: "",name:"" });
    let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:10000/auth/signup", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"

            },

            body: JSON.stringify({ email: credentials.email, password: credentials.password,name: credentials.name }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            console.log(json);
           
            //   props.showAlert("Successfully Login", "success");
            history("/login");
        } else {
            //   props.showAlert("Invalid credentials", "danger")
            console.log("error");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

  return (
	<>
		<StyledFlexDiv padding="7rem 0.5rem 1rem">
        <StyledMediumHeading padding="1rem" margin="20px 0px">
          SignUp 
        </StyledMediumHeading>
        <StyledGreenForm onSubmit={(e) => handleSubmit(e)}>
          
          <label>Email</label>
          <input
            type="email"
            id="email" name="email" value={credentials.email} onChange={onChange}
          />
		  <label>Name</label>
          <input
            type="text"
            id="name" name="name" value={credentials.name} onChange={onChange}
          />
          <label>Password</label>
          <input
            type="password"
            id="password" name="password" value={credentials.password} onChange={onChange}
          />
          <StyledAdminButton type="submit">Log In</StyledAdminButton>
          
        </StyledGreenForm>
      </StyledFlexDiv>
    </>
	
  )
}

export default Register