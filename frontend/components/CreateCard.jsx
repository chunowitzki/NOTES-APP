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
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <header className='flex justify-end'>
                        <h2 className="card-title mb-4">Create New Note</h2>
                        <button 
                            type="button" 
                            className="btn btn-outline btn-circle btn-accent btn-xs ml-auto"
                            onClick={() => navigate('/')}
                        >
                            X
                        </button>
                    </header>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Title"
                            className="input input-bordered w-full"
                            required
                        />

                        <textarea
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder="Your note..."
                            className="textarea textarea-bordered w-full min-h-[100px]"
                            required
                        />

                        <button type="submit" className="btn btn-primary w-full">
                            Create Note
                        </button>
                    </form>
                </div>
            </div>
        </div>
    
  )
}

export default CreateCard