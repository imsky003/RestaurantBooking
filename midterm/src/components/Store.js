import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';

import noteContext from '../context/notes/noteContext'

function Store() {
    const context = useContext(noteContext);
    let history = useNavigate();
    const { addnote, getNotes, notes, deleteNote } = context
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();

        } else {
            history("/login");
        }


        // eslint-disable-next-line
    }, []);
    const [note, setNote] = useState({ heading: "", content: "", author: "", date: "" })
    const handleSubmit = (e) => {
        e.preventDefault();
        addnote(note.heading, note.content, note.author, note.date);
        setNote({ heading: "", content: "", author: "", date: "" });
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form method="POST" >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Heading</label>
                                <input type="text" className="form-control" id="heading" name="heading" onChange={onChange} value={note.heading} aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
                                <input type="text" className="form-control" id="content" onChange={onChange} value={note.content} name="content" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Author</label>
                                <input type="text" className="form-control" id="author" onChange={onChange} value={note.author} name="author" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">PublishDate</label>
                                <input type="date" className="form-control" id="date" onChange={onChange} value={note.date} name="date" />
                            </div>
                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
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
                                {notes.map((note, i) => (
                                    <tr key={i}>
                                        <td >{i}</td>
                                        <td >{note.heading}</td>
                                        <td >{note.content}</td>
                                        <td >{note.author}</td>
                                        <td >{note.date}</td>
                                        <td ><Link to={`/edit/${note._id}`}><i className="fa fa-edit"></i></Link></td>
                                        <td ><i className="fa fa-trash" onClick={() => deleteNote(note._id)}></i></td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Store