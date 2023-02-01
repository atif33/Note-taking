import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllNotes } from '../../features/notes/noteSlice';

//import './Notes.scss';
const SingleNotePage = () => {

    const notes = useSelector(getAllNotes);
    const { id } = useParams();
    const notesSelected = notes.filter((note) => note.noteId === id);
    console.log("test", notesSelected);

    return (
        <div>
            <h1>hemmp</h1>
        </div>
    )
}

export default SingleNotePage;