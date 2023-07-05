import React from "react";
import { NotesBody, Notes } from "./style";
import { useNotesContext } from "../../context";
import NoNotesAdded from "./noNote";
import NotesCategory from "./notesCategory";
import AllNotes from './notes';

const NotesContainer =()=>{
	const { folders } = useNotesContext();
	return (
		<NotesCategory>
			{folders.map(({ name, notes }) => (
				<Notes key={name}>
					<h2>{name}</h2>
					<NotesBody>
						{ notes.length > 0 ? <AllNotes notes={notes} /> :<NoNotesAdded />}
					</NotesBody>
				</Notes>
			))}
		</NotesCategory>
	);
};

export default NotesContainer;
