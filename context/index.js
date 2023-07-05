import { createContext, useContext } from "react";
import { useState } from "react";

const getId = () => {
	let string = "abcdef123456789";
	let idString = "";
	for (let i = 0; i < 8; i++) {
		idString += string[Math.floor(Math.random() * string.length)];
	}
	return idString;
};

export const initialState = [
	{ id: getId(), name: "Personal", icon: "icons/folder.svg", notes: [], isactive: false },
	{ id: getId(), name: "Work", icon: "icons/folder.svg", notes: [], isactive: false },
	{ id: getId(), name: "Travel", icon: "icons/folder.svg", notes: [], isactive: false },
	{ id: getId(), name: "Event", icon: "icons/folder.svg", notes: [], isactive: false },
	{ id: getId(), name: "Finances", icon: "icons/folder.svg", notes: [], isactive: false },
];

const NoteTakingAppContext = createContext();

export const useNotesContext = () => useContext(NoteTakingAppContext);

const NotesAppContext = ({ children }) => {
	const [folders, setFolders] = useState(initialState);
	const [folder, setFolder] = useState("");
	const [show, setShow] = useState(false);
	const [currentFolder, setCurrentFolder] = useState(0);

	const createNewFolder = (e) => {
        e.preventDefault();
		if (folder.trim().length > 0) {
			const newFolder = [
				...folders,
				{
					id: getId(),
					name: folder,
					icon: "icons/folder.svg",
					notes: []
				},
			];
			setFolders(newFolder);
			setFolder("");
            setShow(false);
		}
	};

    const getCurrentFolder =(id)=>{
        const FolderIndex = folders.findIndex((folder) => folder.id === id);
        setCurrentFolder(FolderIndex);
        console.log(currentFolder);
        setFolders(folders.map((folder) => folder.id === id ? { ...folder, isactive: !folder.isactive } : folder))
    }

	return (
		<NoteTakingAppContext.Provider
			value={{
				folders,
				folder,
				show,
                currentFolder,
				setShow,
				setFolder,
				createNewFolder,
                getCurrentFolder
			}}
		>
			{children}
		</NoteTakingAppContext.Provider>
	);
};

export default NotesAppContext;
