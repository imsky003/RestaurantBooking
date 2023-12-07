
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { StyledGreenForm } from '../styled-components/Forms/StyledGreenForm'
import { StyledAdminButton } from '../styled-components/Buttons/StyledButtons'
import { StyledFlexDiv } from '../styled-components/Wrappers/StyledFlex'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import {
  StyledMediumHeading,
  StyledSmallHeading,
} from '../styled-components/Headings/StyledHeadings'

function Login() {

  const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:10000/auth/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"

            },

            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            console.log(json);
            localStorage.setItem("token", json.authtoken);
            localStorage.setItem("email", json.email);
            //   props.showAlert("Successfully Login", "success");
            history("/");
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
          Log in
        </StyledMediumHeading>
        <StyledGreenForm onSubmit={(e) => handleSubmit(e)}>
          
          <label>Email</label>
          <input
            type="email"
            id="email" name="email" value={credentials.email} onChange={onChange}
          />
          <label>Password</label>
          <input
            type="password"
            id="password" name="password" value={credentials.password} onChange={onChange}
          />
          <StyledAdminButton type="submit">Log In</StyledAdminButton>
          <h4>Don't have an account yet?<Link to="/signup"> Click here  </Link><span> to Sign Up </span></h4> 
        </StyledGreenForm>
      </StyledFlexDiv>
    </>
  )
}

export default Login