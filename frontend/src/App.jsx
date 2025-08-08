import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { FilePlus } from 'lucide-react'

const App = () => {
  const [notes, setNotes] = useState([])

  const deleteNote = async (id) => {
    try {
      await axios.delete(`https://notes-app-88by.onrender.com/api/notes/${id}`)
      setNotes(notes.filter(note => note._id !== id))
    } catch (error) {
      console.error("Error deleting note", error)
    }
  }

  useEffect(()=> {
    axios.get('https://notes-app-88by.onrender.com/api/notes')
      .then(res => setNotes(res.data))
      .catch(err => console.error(err))
  },[])
  return (
    <div className='bg-base-300 min-h-screen mx-auto'>
      <header className='flex flex-col items-center gap-2 py-6'>
        <h1 className='text-5xl font-bold'>Chun Notes </h1>
        <div className='flex'>
      
        {<Link to='/create' className='btn btn-xs btn-secondary '><FilePlus size={16}/> create note</Link>}

        </div>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 justify-items-center">
          {notes.length == 0 ? <h1>No notes</h1> :
            notes.map(note => <Card title={note.title} content={note.content} date={note.date} key={note._id} delete={deleteNote} id={note._id}/>)
          }

      </div>
    
    </div>
    
  )
}

export default App