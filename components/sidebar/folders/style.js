import { styled } from "styled-components";

export const FolderWrapper = styled.div`
  width: 100%;
  height: auto;

  h3 {
    color: #fff;
    font-size: 12px;
  }
`;

export const FolderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;
  margin-bottom: 0.5rem;
`;

export const FolderContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const Folder = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    background: ${(props) =>
      props.show ? "rgba(255, 255, 255, 0.02)" : "none"};
    border-radius: 0.1875rem;

    p{
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
    }
`;
