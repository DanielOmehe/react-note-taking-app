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
  margin-bottom: .5rem;
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

  p{
    color: rgba(255, 255, 255, 0.60);
    font-size: 0.875rem;
    padding: 0 2.5rem 0 0;
    font-weight: 600;
  }

  small{
    color: #fff;
  }

  .size{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }
`;

export const NotesEditorBody = styled.div`
  width: 100%;

  p{
    line-height: 25px;
    color: #eee;
    font-size: 1rem;
    white-space: pre-wrap;
  }
`

export const SelectNotePlaceholder = styled.div`
  width: 100%;
`

export const NewNoteFormWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .35);
  display: grid;
  place-items: center;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`

export const NewNoteForm = styled.form`
  width: 50rem;
  height: 25rem;
  background: #1e1e1e;
  border-radius: 1rem;
`