import { NewNoteFormWrapper, NewNoteForm } from "./style";
import { useNotesContext } from '../../context'

const NewNoteFormModal = () => {

    const { setShowForm } = useNotesContext();
	return (
		<NewNoteFormWrapper onClick={() => setShowForm(false)}>
			<NewNoteForm></NewNoteForm>
		</NewNoteFormWrapper>
	);
};

export default NewNoteFormModal;
