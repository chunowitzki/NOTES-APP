import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateCard = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:1218/api/notes', {
                title, content,

            })

        } catch (error) {
            console.error('Error creating note', error)
        }
        navigate('/')
    }
  return (
    <div>
        <header>
            <h6>Back to Notes</h6>
        </header>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e=> setTitle(e.target.value)} placeholder='Title' required />

            <textarea value={content} onChange={e => setContent(e.target.value)}/>

            <button type='submit'>Create Note</button>

        </form>
    </div>
  )
}

export default CreateCard