import React from 'react';
import { Note } from './style'

const AllNotes =({ notes })=>{
  return (
    <>
      { notes.map(({ title, date, time }) => (
        <Note>
            <h2>{title}</h2>
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
