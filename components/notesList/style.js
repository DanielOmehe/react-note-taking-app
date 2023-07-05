import { styled } from "styled-components";

export const Notes = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: #1c1c1c;

  h2 {
    font-size: 1.2rem;
    color: #fff;
    margin: 1rem 0 1.5rem;
  }
`;

export const NotesBody = styled.div`
  width: 100%;
  height: 95%;
  padding: 0;
`;

export const Note = styled.div`
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.1875rem;
  background: rgba(255, 255, 255, 0.03);
  margin: 1rem 0;
  cursor: pointer;

  p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    border: 1px solid #fff;
  }

  small{
    border: 1px solid #fff;
    color: rgba(255, 255, 255, 0.6);
  }

  h2 {
    border: 1px solid #fff;
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
    color: #fff;
  }

  .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;