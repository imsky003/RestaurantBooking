import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import noteContext from "../context/notes/noteContext";
function Edit() {
    const { id } = useParams();
    let history = useNavigate();
    const context = useContext(noteContext);
    const { editnote } = context;
    const [note, setNote] = useState({
        id: "",
        heading: "",
        content: "",
        author: "",
        date: "",
    });
    useEffect(() => {
        if (localStorage.getItem('token')) {
            const getNotes = async () => {
                const response = await fetch(`http://localhost:5000/api/notes/per/${id}`, {
                    method: "GET",

                    headers: {
                        "Content-Type": "application/json",
                        "auth-token":
                            localStorage.getItem("token"),
                    }
                });
                const json = await response.json();
                // console.log(json.date);
                // console.log(moment(json.date).utc().format('YYYY-MM-DD'));
                const newDate = moment(json.date).utc().format('YYYY-MM-DD');
                setNote({ id: json._id, heading: json.heading, content: json.content, author: json.author, date: newDate });
            };
            getNotes();
        } else {
            history("/login");
        }


        // eslint-disable-next-line
    }, []);




    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    const handleclick = (e) => {
        e.preventDefault();
        editnote(note.id, note.heading, note.content, note.author, note.date);
        history("/store");
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form method="POST" >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Heading</label>
                                <input type="text" className="form-control" id="heading" name="heading" value={note.heading} aria-describedby="emailHelp" onChange={onChange} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
                                <input type="text" className="form-control" id="content" value={note.content} onChange={onChange} name="content" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Author</label>
                                <input type="text" className="form-control" id="author" value={note.author} name="author" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">PublishDate</label>
                                <input type="date" className="form-control" id="date" value={note.date} name="date" onChange={onChange} />
                            </div>
                            <button className="btn btn-primary" onClick={handleclick} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit