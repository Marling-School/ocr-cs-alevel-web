// Core modules
const fs = require('fs');

const DATA_FILENAME = 'notes-data.json';

const fetchNotes = () => {
  var notes = [];

  try {
    var notesString = fs.readFileSync(DATA_FILENAME);
    notes = JSON.parse(notesString);
  } catch (e) {
    // guess the file didn't exist
  }

  return notes;
}

const saveNotes = (notes) => {
  fs.writeFileSync(DATA_FILENAME, JSON.stringify(notes, null, 2));
}

const add = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  // Check no duplicates
  var duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

const getAll = () => {
  var notes = [];

  try {
    var notesString = fs.readFileSync(DATA_FILENAME);
    notes = JSON.parse(notesString);
  } catch (e) {
    // guess the file didn't exist
  }

  return notes;
}

const remove = (title) => {
  var notes = fetchNotes();
  var modifiedNotes = notes.filter(note => note.title != title);
  saveNotes(modifiedNotes);
  return notes.length != modifiedNotes.length;
}

const get = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title === title);
  if (filteredNotes.length > 0) {
    return filteredNotes[0];
  }
}

const logNote = (note) => {
  debugger;
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  add,
  getAll,
  get,
  remove,
  logNote
};
