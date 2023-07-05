import { createContext, useContext } from "react";
import { useState } from "react";

const notes = [
	{
		name: "My Goals for the next year",
		date: new Date().toLocaleDateString(),
		time: new Date().toLocaleTimeString(),
		content: "",
	},
	{
		name: "Reflection on the Month of June",
		date: new Date().toLocaleDateString(),
		time: new Date().toLocaleTimeString(),
		content: "",
	},
	{
		name: "My Favorite Memories from Childhood",
		date: new Date().toLocaleDateString(),
		time: new Date().toLocaleTimeString(),
		content: "",
	},
	{
		name: "Reflections on My First Year of College",
		date: new Date().toLocaleDateString(),
		time: new Date().toLocaleTimeString(),
		content: "",
	},
	{
		name: "My Experience with Meditation",
		date: new Date().toLocaleDateString(),
		time: new Date().toLocaleTimeString(),
		content: "",
	},
	{
		name: "Thoughts on the Pandemic",
		date: new Date().toLocaleDateString(),
		time: new Date().toLocaleTimeString(),
		content: "",
	},
	{
		name: "My Favorite Recipes",
		date: new Date().toLocaleDateString(),
		time: new Date().toLocaleTimeString(),
		content: "",
	},
];

const getId = () => {
	let string = "abcdef123456789";
	let idString = "";
	for (let i = 0; i < 8; i++) {
		idString += string[Math.floor(Math.random() * string.length)];
	}
	return idString;
};

export const initialState = [
	{
		id: getId(),
		name: "Personal",
		icon: "icons/folder.svg",
		notes: [],
		isactive: false,
	},
	{
		id: getId(),
		name: "Work",
		icon: "icons/folder.svg",
		notes: [],
		isactive: false,
	},
	{
		id: getId(),
		name: "Travel",
		icon: "icons/folder.svg",
		notes: [],
		isactive: false,
	},
	{
		id: getId(),
		name: "Event",
		icon: "icons/folder.svg",
		notes: [],
		isactive: false,
	},
	{
		id: getId(),
		name: "Finances",
		icon: "icons/folder.svg",
		notes: [],
		isactive: false,
	},
];

const NoteTakingAppContext = createContext();

export const useNotesContext = () => useContext(NoteTakingAppContext);

const NotesAppContext = ({ children }) => {
	const [folders, setFolders] = useState(initialState);
	const [folder, setFolder] = useState("");
	const [show, setShow] = useState(false);
	const [currentFolder, setCurrentFolder] = useState(0);
	const [showForm, setShowForm] = useState(false);
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [content, setContent] = useState('');
    console.log(title);
    console.log(category);
    console.log(content);

	const createNewFolder = (e) => {
		e.preventDefault();
		if (folder.trim().length > 0) {
			const newFolder = [
				...folders,
				{
					id: getId(),
					name: folder,
					icon: "icons/folder.svg",
					notes: [],
				},
			];
			setFolders(newFolder);
			setFolder("");
			setShow(false);
		}
	};

	const saveNote = (e, note) => {
        e.preventDefault();
        if(note){
            setFolders(folders.map((folder) => folder.name === note.category ? { ...folder, notes: [ ...folder.notes, { id: getId(), date: new Date().toLocaleDateString(), time: new Date().toLocaleDateString(), ...note } ]} : folder));
            setTitle('');
            setCategory('');
            setContent('');
        }
	};

	const getCurrentFolder = (id) => {
		const FolderIndex = folders.findIndex((folder) => folder.id === id);
		setCurrentFolder(FolderIndex);
		setFolders(
			folders.map((folder) =>
				folder.id === id ? { ...folder, isactive: !folder.isactive } : folder
			)
		);
	};

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
				getCurrentFolder,
				showForm,
				setShowForm,
				saveNote,
                title,
                category,
                content,
                setTitle,
                setCategory,
                setContent
			}}
		>
			{children}
		</NoteTakingAppContext.Provider>
	);
};

export default NotesAppContext;
