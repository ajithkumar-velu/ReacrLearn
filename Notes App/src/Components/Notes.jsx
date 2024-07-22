import { images } from '../assets/assets'
import './Notes.css'
import { useState, useEffect } from 'react'
const Notes = () => {

    const [Notes, setNotes] = useState(()=>
    {
        const storedNodes = localStorage.getItem('Notes');
        return storedNodes ? JSON.parse(storedNodes): []
    }
    );

    useEffect(()=> {
        localStorage.setItem('Notes', JSON.stringify(Notes))
    },[Notes])


    
    const handleDeleteNote = (id) =>{
        setNotes(Notes.filter((note) => note.id !== id))
    }
    function h(){
        setNotes(n=>[...n, {id: Date.now(), text: ''}])
    }

    function handleCreateNotes() {

        setNotes([...Notes, { id: Date.now(), text: '', }])

        // let ta = document.createElement('textarea');
        // let i = document.createElement("i");
        // ta.setAttribute('name', 'note')
        // ta.className = "note"
        // ta.innerHTML =""
        // i.className = "fa-regular fa-trash-can"
        // notesContainer.appendChild(ta)
        // notesContainer.appendChild(i)


    }

    return (
        <div className='main-container'>
            <div className="header">
                <img src={images.aa} alt="image not found" />
                <h1>Notes</h1>
            </div>

            <div className="btn-container">
                <button className='btn' onClick={h} ><i className="fa-regular fa-pen-to-square"></i>Create Notes</button>
            </div>

            <div id="notes-container">
                {/* {
                    Notes.map((note) => (
                        <div key={note.id} className="note-container">
                            <textarea
                                className='note'
                                value={note.text}
                                onChange={(e) => {
                                    const updateNotes = Notes.map((n) =>
                                        n.id === note.id ? { ...n, text: e.target.value } : n
                                    )
                                    setNotes(updateNotes)
                                }}
                            ></textarea>
                            <i className="fa-regular fa-trash-can" onClick={()=>{handleDeleteNote(note.id)}} ></i>
                        </div>
                    ))
                } */}
                {
                    Notes.map((note)=>(
                        <div className="note-container" key={note.id} >
                            <i className="fa-regular fa-trash-can" onClick={()=>handleDeleteNote(note.id)} ></i>
                            <textarea 
                                value={note.text} 
                                className='note'
                                onChange={(e)=>{
                                    Notes.map((n)=>{
                                        setNotes(()=>n.id === note.id? e.target.value: null)
                                    })
                                }}  // note.id === Notes.id ? e.target.value
                            ></textarea>
                        </div>
                    ))
                }
                
            </div>

        </div>
    )
}

export default Notes

