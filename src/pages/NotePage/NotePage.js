import React from "react";
import { useSelector } from "react-redux";
import NotesList from "../../components/NoteList/NoteList";
import { getAllNotes } from "../../features/notes/noteSlice";



const NotePage = () => {
    const notes = useSelector(getAllNotes);

    return (
        <NotesList notes={notes} />
    );
}

export default NotePage;