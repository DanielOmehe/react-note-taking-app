import { styled } from "styled-components";

export const NoteSidebarWrapper = styled.div`
  padding: 1.5rem 0;
`;

export const NoteSidebarHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const AddNewNotesContainer = styled.div`
  width: 100%;
  padding: 0 1.2rem;
  margin: 1.5rem 0;
`;

export const AddNewNotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.6rem;
  width: 100%;
  border-radius: 0.1875rem;
  background: rgba(255, 255, 255, 0.05);

  h3 {
    color: #fff;
    font-size: 12px;
  }
`;
