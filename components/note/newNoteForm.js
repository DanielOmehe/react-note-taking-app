import {
	NewNoteFormWrapper,
	NewNoteName,
	NewNoteCategories,
	NewNoteCategory,
	NewNoteContent,
	NewNoteSave,
} from "./style";
import { useNotesContext } from "../../context";

const NewNoteForm = () => {
	const { folders, saveNote, title, category, content, setTitle, setContent, setCategory } = useNotesContext();
	return (
		<NewNoteFormWrapper onSubmit={(e) => saveNote(e, { title, category, content })}>
			<NewNoteName type="text" placeholder="Type name here..." name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
			<NewNoteCategories name='category' onChange={(e) => setCategory(e.target.value)} value={category}>
				{folders.map(({ id, name }) => (
					<NewNoteCategory key={id}>{name}</NewNoteCategory>
				))}
			</NewNoteCategories>
			<NewNoteContent name='content' value={content} onChange={(e) => setContent(e.target.value)} />
			<NewNoteSave>Save</NewNoteSave>
		</NewNoteFormWrapper>
	);
};

export default NewNoteForm;
