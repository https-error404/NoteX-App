import { Copy, PlusCircle } from "lucide-react";
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToNotes, updateToNotes } from '../redux/noteSlice';
import { useSearchParams } from 'react-router-dom';
import toast from "react-hot-toast";


const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const noteId = searchParams.get("noteId");
    const dispatch = useDispatch();
    const allNotes = useSelector((state) => state.note.notes); // finding all note id
    
    const createNote = useCallback(() => {
        // Validation check: Ensure title and content are not empty
        // console.log("createNote function called");

        if (!title.trim()) {
            toast.error("Title cannot be empty!", { position: "top-right" });
            return;
        }
        
        if (!value.trim()) {
            toast.error("Content cannot be empty!", { position: "top-left" });
            return;
        }
    
        const note = {
            title: title.trim(),
            content: value.trim(),
            _id: noteId || Date.now().toString(36) + Math.random().toString(36).substring(2),
            createdAt: new Date().toISOString(),
        };
    
        if (noteId) {
            dispatch(updateToNotes(note));
            toast.success("Note Updated Successfully!", {id: "noteSuccess" , position: "bottom-left" });
        } else {
            dispatch(addToNotes(note));
            toast.success("Note Created Successfully!", { id: "noteSuccess" , position: "bottom-left" });
        }
    
        // Clear fields after creation or update
        setValue('');
        setTitle('');
        setSearchParams({});
    });

    function resetNote() {
        setValue('');
        setTitle('');
        setSearchParams({});
        navigate("/");
    };

    useEffect(() => {
        if (noteId) {
            const note = allNotes.find((p) => p._id === noteId);
            if (note) {
                setTitle(note.title);
                setValue(note.content);
            }

        }
    }, [noteId, allNotes])


    return (
        <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
            <div className='flex flex-col gap-y-5 items-start'>
                <div className='w-full flex flex-row gap-x-4 justify-between items-center'>
                    <input
                        type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        //Dynami width de raha huun whether noteId is present
                        className={`${noteId ? "w-[80%]" : "w-[85%]"
                            } text-black border border-input rounded-md p-2`}
                    />

                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700'
                        onClick={createNote}
                    >
                        {noteId ? "Update Note" : "Create Note"}
                    </button>

                    {noteId && <button
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700'
                        onClick={resetNote}
                    >
                        <PlusCircle size={20} />
                    </button>}
                </div>

                <div
                    className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl`}
                >
                    <div
                        className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]`}
                    >
                        <div className="w-full flex gap-x-[6px] items-center select-none group">
                            <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />

                            <div
                                className={`w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`}
                            />

                            <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
                        </div>
                        {/* Circle and copy btn */}
                        <div
                            className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
                        >
                            {/*Copy  button */}
                            <button
                                className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
                                onClick={() => {
                                    navigator.clipboard.writeText(value);
                                    toast.success("Copied to Clipboard", {
                                        position: "top-right",
                                    });
                                }}
                            >
                                <Copy className="group-hover:text-sucess-500" size={20} />
                            </button>
                        </div>
                    </div>

                    {/* TextArea */}
                    <textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Write Your Content Here...."
                        className="w-full p-3  focus-visible:ring-0"
                        style={{
                            caretColor: "#000",
                        }}
                        rows={20}
                    />
                </div>

            </div>
            
        </div>
        
    );
};

export default Home
