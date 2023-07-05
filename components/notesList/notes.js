import React from 'react';
import { Note } from './style'

const AllNotes =({ notes })=>{
    console.log(notes);
  return (
    <>
      { notes.map(({ name, date, time }) => (
        <Note>
            <h2>{name}</h2>
            <div className='body'>
                <small>{date}</small>
                <p>{time}</p>
            </div>
        </Note>
      ))}
    </>
  )
}

export default AllNotes
