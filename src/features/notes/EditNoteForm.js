import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import './Note.scss';
import { addNewNotes, editNoteSelected, getAllNotes } from "./noteSlice";


const EditNoteForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();



    const notes = useSelector(getAllNotes);
    let noteSelected = notes.filter((note) => note.noteId === id);
    const [formData, setFormData] = useState(noteSelected[0]);

    const [contentError, setContentError] = useState(false);
    const [titleError, settitleError] = useState(false);
    const [canSave, setCanSave] = useState(false);
    const onFormDataChange = (event) => {
        event.preventDefault();
        if (event.target.name === 'noteTitle') {
            if (event.target.value.length === 0) {
                settitleError(true);
            } else {
                settitleError(false)
                setCanSave(true);
            }
        }
        if (event.target.name === 'noteContent') {
            if (event.target.value.length === 0) {
                setContentError(true);
            } else {
                setContentError(false)
                setCanSave(true);
            }
        }

        setFormData(preventData => {
            return {
                ...preventData,
                [event.target.name]: event.target.value
            }
        })
    }

    const onSaveNote = (event) => {
        if (!titleError && !contentError) {
            dispatch(editNoteSelected(formData));
            toast("La Note est bien modifiée");
            setFormData({ noteTitle: "", noteContent: "" });
        }
    }

    return (
        <div>
            <section className='note-form-section'>
                <h2 className='my-4 fs-16'>Ajouter une nouvelle Note</h2>
                <form className='note-form'>
                    <div className='form-element'>
                        <label htmlFor='noteTitle' className='form-label'>Titre: </label>
                        <input type="text" id="noteTitle" name="noteTitle" onChange={onFormDataChange} className="form-control" value={formData.noteTitle}></input>
                        <span className='form-error-text'>{titleError ? "Titre ne pourrait pas vide" : ""}</span>
                    </div>
                    <div className='form-element'>
                        <label htmlFor='noteContent' className='form-label'>Contenu: </label>
                        <textarea id="noteContent" rows="10" name="noteContent" onChange={onFormDataChange} className="form-control" value={formData.noteContent}></textarea>
                        <span className='form-error-text'>{contentError ? "Le contenu ne pourrait pas être vide" : ""}</span>
                    </div>
                </form>
                <button type='submit' onClick={onSaveNote} className="btn btn-default">Sauvegarder</button>
                <ToastContainer />
            </section>
        </div>

    );
}

export default EditNoteForm;