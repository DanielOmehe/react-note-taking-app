import React from 'react'
import NotesSidebar from './sidebar'
import NotesContainer from './notesList'
import NotesEditor from './note'
import NewNoteFormModal from './note/newNoteForm';
import { useNotesContext } from '../context'

const NotesApp =()=>{
    const { showForm } = useNotesContext();
  return (
    <div className='notes-app'>
      <NotesSidebar />
      <NotesContainer />
      <NotesEditor />
      <>{ showForm ? <NewNoteFormModal /> : null }</>
    </div>
  )
}

export default NotesApp
