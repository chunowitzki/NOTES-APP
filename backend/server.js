import express from 'express';
import dotenv from 'dotenv';
import Note from './models/Notes.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 1218;

app.use(cors());
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

app.get('/', (req, res) => {
    res.redirect("/api/notes");
});

app.get('/api/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.log('Error fetching notes:', error);
        res.status(500).json({ message: 'Error fetching notes' });
    }
});

app.post('/api/notes', async (req, res) => {
    try {
        const { title, content } = req.body 
        const note = new Note({title, content});
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        console.log('Error creating note:', error)
        res.status(500).json({ message: 'Error creating note' });
    }
})

app.delete('/api/notes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        console.log('Error deleting note:', error);
        res.status(500).json({ message: 'Error deleting note' });
    }
});

app.put('/api/notes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        console.log('Error updating note:', error);
        res.status(500).json({ message: 'Error updating note' });
    }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});