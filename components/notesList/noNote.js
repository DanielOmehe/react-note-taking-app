import { NoteIconsLarge } from "../utils/style";

const NoNotesAdded = () => {
	return (
		<>
			<div className="no-notes-added">
				<NoteIconsLarge src="icons/folder.svg" />
				<p>This folder is empty</p>
			</div>
			<style jsx>{`
				.no-notes-added {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}

				p {
					font-weight: 600;
					color: #fff;
					margin-top: 1rem;
				}
			`}</style>
		</>
	);
};

export default NoNotesAdded;
