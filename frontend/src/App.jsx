import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const App = () => {
  const [notes, setNotes] = useState([])

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:1218/api/notes/${id}`)
      setNotes(notes.filter(note => note._id !== id))
    } catch (error) {
      console.error("Error deleting note", error)
    }
  }

  useEffect(()=> {
    axios.get('http://localhost:1218/api/notes')
      .then(res => setNotes(res.data))
      .catch(err => console.error(err))
  },[])
  return (
    <div className='bg-accent min-h-screen'>
      <header>
        <h1>Chun Notes </h1>
        <Link to='/create'>create note</Link>
      </header>
      {notes.length == 0 ? <h1>No notes</h1> :
        notes.map(note => <Card title={note.title} content={note.content} date={note.date} key={note._id} delete={deleteNote} id={note._id}/>)
    }
    
    <h1 className="text-3xl font-bold text-pink-500 underline">
      Hello world!
    </h1>
    </div>
    
  )
}

export default App