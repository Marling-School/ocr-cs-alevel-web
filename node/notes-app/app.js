// 3rd party
const _ = require('lodash');
const yargs = require('yargs');

// My modules
const notes = require('./notes');

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const body = {
  describe: 'Body content for the title',
  demand: true,
  alias: 'b'
}

const addNote = (argv) => {
  const note = notes.add(argv.title, argv.body);
  if (note) {
    console.log('Note added succesfully');
    notes.logNote(note);
  } else {
    console.log('Note title already in use');
  }
}

const listNotes = (argv) => {
  const allNotes = notes.getAll();

  console.log(`Printing ${allNotes.length} notes`);
  allNotes.forEach(notes.logNote)
}

const removeNote = (argv) => {
  const noteRemoved = notes.remove(argv.title)
  const message = noteRemoved ? 'Note Removed' : 'Note not found';
  console.log(message)
}

const readNote = (argv) => {
  const note = notes.get(argv.title);
  notes.logNote(note);
}

const argv = yargs
  .command('add', 'Add a new note', {title, body}, addNote)
  .command('list', 'Read all notes', {}, listNotes)
  .command('read', 'Read a note', {title}, readNote)
  .command('remove', 'Remove a note', {title}, removeNote)
  .help()
  .argv;
