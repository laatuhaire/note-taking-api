require('dotenv').config(); 

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store
let notes = [];
let currentId = 1;

// CREATE a new note
app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
    }
    const newNote = { id: currentId++, title, content };
    notes.push(newNote);
    res.status(201).json(newNote);
});

// READ all notes
app.get('/notes', (req, res) => {
    res.json(notes);
});

// READ one note by id
app.get('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const note = notes.find(n => n.id === id);
    if (!note) {
    return res.status(404).json({ error: 'Note not found' });
    }
    res.json(note);
});

// DELETE a note by id
app.delete('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const noteIndex = notes.findIndex(n => n.id === id);
    
    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note not found' });
    }
    
    // Remove the note from the array
    const deletedNote = notes.splice(noteIndex, 1);
    res.json(deletedNote[0]);
});
// UPDATE a note by id
app.patch('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const note = notes.find((n) => n.id === id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }
    const { title, content } = req.body;
    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;
    res.status(200).json(note);
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});