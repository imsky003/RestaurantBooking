import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Home() {
    let history = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        history("/login");
    }
    return (
        <>
            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                <Link className="btn btn-primary btn-sm mx-1" to="/login">
                    Login
                </Link>

            </form> :


                <button className="btn btn-primary btn-sm" onClick={logout}>Logout</button>}

        </>
    )
}

export default Home