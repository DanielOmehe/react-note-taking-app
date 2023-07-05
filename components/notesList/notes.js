import React from 'react';
import { Note } from './style'

const Notes =({ notes })=>{
  return (
    <div className='notes-list'>
      { notes.map(({ name, date, summary }) => (
        <Note>
            <h2>{name}</h2>
            <div className='body'>
                <small>{date}</small>
                <p>{summary}</p>
            </div>
        </Note>
      ))}
    </div>
  )
}

export default Notes
