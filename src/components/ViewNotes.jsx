import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { Copy } from "lucide-react";

const ViewNotes = () => {

    const { id } = useParams();
    const allNotes = useSelector((state) => state.note.notes);
    // Filters notes based on search term (by title)
    const note = allNotes.filter((p) => p._id === id)[0];


    return (
        <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">

            <div className='flex flex-col gap-y-5 items-start'>
                <input
                    type="text"
                    value={note.title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled
                    className='w-full text-black border border-input rounded-md p-2'
                />

                <div className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl`}>
                    <div className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]`}>
                        {/* Three Circle */}
                        <div className="w-full flex gap-x-[6px] items-center select-none group">
                            <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />
                            <div className={`w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`}/>
                            <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
                        </div>

                        {/*Copy  button hain*/}
                        <div
                            className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}>
                            <button
                                className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
                                onClick={() => {
                                    navigator.clipboard.writeText(note.content);
                                    toast.success("Copied to Clipboard");
                                }}>
                                <Copy className="group-hover:text-sucess-500" size={20} />
                            </button>
                        </div>
                    </div>

                    {/* TextArea */}
                    <textarea
                        value={note.content}
                        style={{
                            caretColor: "#000",
                        }}
                        rows={20}
                        disabled
                        className="w-full p-3  focus-visible:ring-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewNotes
