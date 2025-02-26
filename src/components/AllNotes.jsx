import { Calendar, Copy, Eye, PencilLine, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react"; // Import useState
import { removeFromNotes } from "../redux/noteSlice";
import { FormatDate } from "../FormatDate/DateFormat";

const AllNote = () => {
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

  // const handleDelete = (id) => {
  //   dispatch(removeFromNotes(id));
  // };

  const handleDelete = (id) => {
    
    const noteToDelete = notes.find((note) => note._id === id);// Find the note that is being deleted
    if (!noteToDelete) return;
    let deletedNotes = JSON.parse(localStorage.getItem("deletedNotes")) || []; // Get existing deleted notes from localStorage

    deletedNotes.push(noteToDelete);// Add the deleted note

    // Keep only the last 5 deleted notes
    if (deletedNotes.length > 5) {
      deletedNotes = deletedNotes.slice(-5);
    }
   
    localStorage.setItem("deletedNotes", JSON.stringify(deletedNotes));// Save back to localStorage

    dispatch(removeFromNotes(id));// Remove the note from Redux store
  };


  // Filter notes based on search term (by title)
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-3">
        {/* Search */}
        <div className="w-full flex gap-3 px-4 py-2  rounded-[0.3rem] border border-[rgba(128,121,121,0.3)]  mt-6">
          <input
            type="search"
            placeholder="Search notes here..."
            className="focus:outline-none w-full bg-transparent"
            value={searchTerm} // Bind the input to searchTerm state
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
          />
        </div>

        {/* All Notes */}
        <div className="flex flex-col border border-[rgba(128,121,121,0.3)] py-4 rounded-[0.4rem]">
          <h2 className="px-4 text-4xl font-bold border-b border-[rgba(128,121,121,0.3)] pb-4">
            Saved Notes
          </h2>
          <div className="w-full px-4 pt-4 flex flex-col gap-y-5 min-h-[300px]">
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
                <div
                  key={note?._id}
                  className="border border-[rgba(128,121,121,0.3)] w-full gap-y-6 justify-between flex flex-col sm:flex-row p-4 rounded-[0.3rem]"
                >
                  {/* heading and Description */}
                  <div className="w-[50%] flex flex-col space-y-3">
                    <p className="text-4xl font-semibold ">{note?.title}</p>
                    <p className="text-sm font-normal line-clamp-3 max-w-[80%] text-[#707070]">
                      {note?.content}
                    </p>
                  </div>

                  {/* icons */}
                  <div className="flex flex-col gap-y-4 sm:items-end">
                    <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                      <button
                        className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-blue-500"
                      // onClick={() => toast.error("Not working")}
                      >
                        <a href={`/?noteId=${note?._id}`}>
                          <PencilLine
                            className="text-black group-hover:text-blue-500"
                            size={20}
                          />
                        </a>
                      </button>
                      <button
                        className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-pink-500"
                        onClick={() => handleDelete(note?._id)}
                      >
                        <Trash2
                          className="text-black group-hover:text-red-500"
                          size={20}
                        />
                      </button>

                      <button className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-orange-500">
                        <a href={`/notes/${note?._id}`} target="_blank">
                          <Eye
                            className="text-black group-hover:text-orange-500"
                            size={20}
                          />
                        </a>
                      </button>
                      <button
                        className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-green-500"
                        onClick={() => {
                          navigator.clipboard.writeText(note?.content);
                          toast.success("Copied to Clipboard", {});
                        }}
                      >
                        <Copy
                          className="text-black group-hover:text-green-500"
                          size={20}
                        />
                      </button>
                    </div>

                    <div className="gap-x-2 flex ">
                      <Calendar className="text-black" size={20} />
                      {FormatDate(note?.createdAt)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-2xl text-center w-full ">
                No Data Found!!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNote;