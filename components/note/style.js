import { styled } from "styled-components";

export const NotesEditorWrapper = styled.div`
	width: 100%;
	padding: 3rem;

	h1 {
		color: #fff;
		font-size: 2rem;
	}
`;

export const NotesEditorHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1.8rem;
`;

export const NotesEditorSection = styled.div`
	width: 100%;
	margin-bottom: 0.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const NotesEditorSectionHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;

	p {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.875rem;
		padding: 0 2.5rem 0 0;
		font-weight: 600;
	}

	small {
		color: #fff;
	}

	.size {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
`;

export const NotesEditorBody = styled.div`
	width: 100%;

	p {
		line-height: 25px;
		color: #eee;
		font-size: 1rem;
		white-space: pre-wrap;
	}
`;

export const SelectNotePlaceholder = styled.div`
	width: 100%;
`;

export const NewNoteModalWrapper = styled.section`
	width: 100%;
	min-height: 100%;
	background: rgba(255, 255, 255, 0.55);
	display: grid;
	place-items: center;
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	filter: blur(20rem);
`;

export const NewNoteFormWrapper = styled.form`
	width: 50rem;
	height: 25rem;
	background: #1e1e1e;
	border-radius: 1rem;
	padding: 2rem;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
`;

export const NewNoteName = styled.input`
	width: 100%;
	height: 3rem;
	border-radius: 0.2rem;
	margin: 1rem 0 0 0;
	padding: 1rem;
	color: #fff;
	font-size: 0.8rem;
	background: transparent;
	outline: none;
	border: 2px solid rgba(255, 255, 255, 0.34);
`;

export const NewNoteCategories = styled.select`
	width: 100%;
	height: 2rem;
	border-radius: 0.2rem;
	margin: 1rem 0;
	font-size: 0.8rem;
	color: #fff;
	background: #1e1e1e;
	padding: 0 1rem;
	border: 2px solid rgba(255, 255, 255, 0.34);
`;

export const NewNoteCategory = styled.option``;

export const NewNoteContent = styled.textarea`
	width: 100%;
	height: 10rem;
	resize: none;
	color: #fff;
	font-size: 0.8rem;
	background: transparent;
	border: 2px solid rgba(255, 255, 255, 0.34);
	padding: 1rem;
	outline: none;
	border-radius: 0.4rem;
`;

export const NewNoteSave = styled.button`
	padding: 0.6rem 1rem;
	color: #000;
	background: #fff;
	border: none;
	outline: none;
	font-weight: 500;
	position: absolute;
	left: 88.5%;
	top: 85%;
	cursor: pointer;
	box-shadow: 0 0 3px rgba(255, 255, 255, 0.45);
	border-radius: 0.4rem;
`;
