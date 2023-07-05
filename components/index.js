import React from 'react'
import NotesSidebar from './sidebar'
import NotesContainer from './notesList'
import NotesEditor from './note'
import NewNoteForm from './note/newNoteForm';
import { useNotesContext } from '../context'
import NewNoteBackDrop from './note/newNoteModal';

const NotesApp =()=>{
    const { showForm } = useNotesContext();
  return (
    <div className='notes-app'>
      <NotesSidebar />
      <NotesContainer />
      <NotesEditor />
      <>{ showForm ? <NewNoteForm /> : null }</>
      <>{ showForm ? <NewNoteBackDrop /> : null }</>
    </div>
  )
}

export default NotesApp
