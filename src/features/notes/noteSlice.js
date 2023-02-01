import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import { v4 as uuid } from 'uuid';
import { getFromLocalStorage, storeOnLocalStorage } from '../../utils/helpers';


const initialState = {
    notes: getFromLocalStorage("notes"),
    error: null,
    count: 0
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNewNotes(state, action) {
            const { noteTitle, noteContent } = action.payload;
            let noteId = uuid();
            let newPost = { noteTitle, noteContent, noteId };
            newPost.date = new Date().toISOString();
            state.notes.push(newPost);
            storeOnLocalStorage('notes', state.notes);
        },

        deleteNotes(state, action) {
            const noteIdTmp = action.payload;
            const tmpNotes = state.notes.filter((note) => note.noteId !== noteIdTmp);
            state.notes = tmpNotes;
            storeOnLocalStorage("notes", tmpNotes);
        },

        editNoteSelected(state, action) {
            const { noteId, noteTitle, noteContent } = action.payload;
            const newNote = state.notes.map((note) => {
                if (note.noteId === noteId) {
                    note.noteContent = noteContent;
                    note.noteTitle = noteTitle;
                    note.date = new Date().toISOString();
                }
                return note;
            })
            state.notes = newNote;
            storeOnLocalStorage("notes", newNote);

        }
    }
});

export const { addNewNotes, deleteNotes, editNoteSelected } = noteSlice.actions;
export const getAllNotes = (state) => state.notes.notes;
export default noteSlice.reducer;