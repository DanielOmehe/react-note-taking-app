import { useNotesContext } from "../../../context";
import { Folder, FolderContainer, FolderWrapper, FolderHeader } from "./style";
import { NoteIcons } from "../../utils/style";
import NewFolderForm from "../../notesList/newFolderForm";

const Folders = () => {
	const { folders, show, setShow, getCurrentFolder, currentFolder } =
		useNotesContext();
	return (
		<FolderWrapper>
			<FolderHeader>
				<h3>Folders</h3>
				<NoteIcons
					src="icons/newFolder.svg"
					alt="new folder"
					onClick={() => setShow((prevShow) => !prevShow)}
				/>
			</FolderHeader>
			<FolderContainer>
				<>{show ? <NewFolderForm /> : null}</>
				{folders.map(({ id, name, icon, isactive }, indx) => (
					<Folder
						key={id}
						show={indx === currentFolder}
						onClick={() => getCurrentFolder(id)}
					>
						<>
							{indx === currentFolder ? (
								<NoteIcons src="icons/folderOpen.svg" alt={name} />
							) : (
								<NoteIcons src={icon} alt={name} />
							)}
						</>
						<p>{name}</p>
					</Folder>
				))}
			</FolderContainer>
		</FolderWrapper>
	);
};

export default Folders;
