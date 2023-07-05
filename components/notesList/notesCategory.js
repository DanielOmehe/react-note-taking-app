import React, { Children } from "react";
import { useNotesContext } from "../../context";

const NotesCategory = ({ children }) => {

    const { currentFolder } = useNotesContext();
	return (
		<>
			{Children.map(children, (child, indx) =>
				indx === currentFolder ? child : null
			)}
		</>
	);
};

export default NotesCategory;
