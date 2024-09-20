import { PencilSquareIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/16/solid";
import { useDebugValue, useState } from "react";


export default function Notes() {
  const [isEdit, setIsEdit] = useState(false);
  const [notesText, setNotesText] = useState( { 1: "this is notes for tab 1",
    2: "this is notes for tab 2",
    3: "this is notes for tab 3",
    4: "this is notes for tab 4"
  })
  const [activeTab, setActiveTab] = useState()

  const handleNotes = () => {
    return (
      isEdit? <textarea
        placeholder={notesText[activeTab]}
        onChange={(e) => setNotesText({
            ...notesText,
            [activeTab]: e.target.value
        })}
        className="w-full h-full rounded-lg text-justify"
      >
      </textarea> : <p>{notesText[activeTab]}</p>
    );

  };

  return (
    <div className="container mx-auto text-center font-italiana p-4 w-full md:w-1/2 lg:w-1/3">
      <h1 className="text-3xl">notes</h1>

      {/* Tabs container */}
      <div className="container mx-auto w-80 h-80 border-2 rounded-lg border-black flex flex-col items-center">
        <div className="w-full flex justify-between px-1 py-0.5">
          {Object.keys(notesText).map((tab) => (
            <button className="border-t-0 border-2 border-gray rounded-b-md w-1/4 text-xs" onClick={() =>  setActiveTab(tab)}>
            tab {tab}
          </button>
          ))}
        </div>

        {/* Input field below the buttons */}
        <div className="w-full h-full mt-4 px-1">
            {handleNotes()}
            </div>

        <div>
          {isEdit? <ClipboardDocumentCheckIcon className="size-6 text-gray justify-self-end"  onClick={()=> setIsEdit(!isEdit)}/> : <PencilSquareIcon className="size-6 text-gray justify-self-end"  onClick={()=> setIsEdit(!isEdit)}/>}
        </div>
      </div>
    </div>
  );
}
