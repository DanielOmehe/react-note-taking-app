import React from 'react'
import NotesSidebar from './sidebar'
import NotesContainer from './notesList'
import NotesEditor from './note'
import { useNotesContext } from '../context'

const NotesApp =()=>{
  return (
    <div className='notes-app'>
      <NotesSidebar />
      <NotesContainer />
      <NotesEditor />
    </div>
  )
}

export default NotesApp
