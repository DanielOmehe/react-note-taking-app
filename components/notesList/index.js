import React from "react";
import { NotesBody } from "./style";
import { useNotesContext } from "../../context";
import NoNotesAdded from "./noNote";
import NotesCategory from "./notesCategory";
import Notes from './notes';

const NotesContainer = ({ category }) => {
	const { folders, currentFolder, notes } = useNotesContext();
	return (
		<NotesCategory>
			{folders.map(({ name, notes }) => (
				<Notes>
					<h2>{name}</h2>
					<NotesBody>
						<NoNotesAdded />
					</NotesBody>
				</Notes>
			))}
		</NotesCategory>
	);
};

export default NotesContainer;
