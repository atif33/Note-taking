import { formatDistanceToNow, parseISO } from "date-fns";
import { AiFillEdit } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNotes } from "../../features/notes/noteSlice";
import { NoNotes } from "../../pages";
import './NoteList.scss'


const NotesList = ({ notes }) => {

    const dispatch = useDispatch();

    if (!notes || notes.length === 0) {
        return <NoNotes />
    }
    return (
        <div className="notes">
            <h5 className="fs-18 fw-8 text-uppercase notes-title">Notes</h5>
            <div className="notes-list grid">
                {notes.map(note => {
                    return (
                        <div className="notes-item" key={note.noteId}>
                            <div className="notes-item-title">
                                {note.noteTitle}
                            </div>
                            <div className="note-item-body"> {note.noteContent}</div>
                            <div className="note-item-date text-capitalize">{formatDistanceToNow(parseISO(note.date))}</div>
                            <div className="notes-item-btns flex align-center justify-betwen">
                                <div>
                                    <button type="button" className="notes-item-btn" onClick={() => dispatch(deleteNotes(note.noteId))
                                    }><GiCancel /></button>
                                    <Link to={`/edit/${note.noteId}`} className="notes-item-btn">
                                        <AiFillEdit></AiFillEdit>
                                    </Link>
                                </div>
                                <Link to={`/note/${note.noteId}`} className="read-more-btn">Lire La Suite</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default NotesList;