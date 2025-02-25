import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [trash, setTrash] = useState([]); // Store deleted notes

    // Function to delete note and move to trash
    const deleteNote = (noteId) => {
        const noteToDelete = notes.find(note => note.id === noteId);
        if (noteToDelete) {
            setTrash((prevTrash) => {
                const updatedTrash = [noteToDelete, ...prevTrash];
                return updatedTrash.slice(0, 5); // Keep only last 5 deleted notes
            });
        }
        setNotes(notes.filter(note => note.id !== noteId));
    };

    return (
        <AppContext.Provider value={{ notes, setNotes, trash, setTrash, deleteNote }}>
            {children}
        </AppContext.Provider>
    );
};
