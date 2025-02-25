import React, { useEffect, useState } from "react";

const Trash = () => {
    const [deletedNotes, setDeletedNotes] = useState([]);

    useEffect(() => {
        // Load deleted notes from localStorage
        const storedDeletedNotes = JSON.parse(localStorage.getItem("deletedNotes")) || [];
        setDeletedNotes(storedDeletedNotes);
    }, []);

    return (
        <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
            <h2 className="text-4xl font-bold mb-6">Recently Deleted Notes</h2>
            
            {deletedNotes.length === 0 ? (
                <p className="text-xl text-center">No deleted notes available.</p>
            ) : (
                deletedNotes.map((note, index) => (
                    <div key={index} className="border border-red-300 p-4 rounded-md shadow-md mb-4">
                        <h3 className="text-2xl font-semibold text-red-900">{note.title}</h3>
                        <p className="text-red-400">{note.content}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Trash;
