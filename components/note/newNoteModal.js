import { NewNoteModalWrapper } from './style';
import { useNotesContext } from '../../context';

const NewNoteBackDrop =()=>{
    const { setShowForm } = useNotesContext();
    return (
        <NewNoteModalWrapper onClick={() => setShowForm(false)}></NewNoteModalWrapper>
    )
}

export default NewNoteBackDrop