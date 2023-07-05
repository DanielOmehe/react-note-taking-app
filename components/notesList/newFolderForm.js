import React from "react";
import { NoteIcons } from "../utils/style";
import { useNotesContext } from "../../context";

const NewFolderForm = () => {
	const { folder, setFolder, createNewFolder } = useNotesContext();
	return (
		<>
			<form className='new-folder-form' onSubmit={(e) => createNewFolder(e)}>
				<NoteIcons src="icons/folder.svg" alt="folder" />
				<input type="text" value={folder} autoFocus onChange={(e) => setFolder(e.target.value)} placeholder={'My New Folder'} />
			</form>
			<style jsx>{`
                .new-folder-form{
                    width: 100%;
                    padding: 0.6rem 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 1rem;
                }

                .new-folder-form input{
                    background: none;
                    border: 1px solid #fff;
                    color: #fff;
                    outline: none;
                    padding: .2rem .6rem;
                }
            `}</style>
		</>
	);
};

export default NewFolderForm;
