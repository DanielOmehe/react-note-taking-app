import { styled } from "styled-components";

export const RecentNotesWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 0.5rem 1.2rem;
    margin-bottom: 1rem;

    h3{
        font-size: 12px;
        color: #eee;
    }
`

export const RecentNotesContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: .5rem;
`

export const RecentNote = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0.6rem 0;
    cursor: pointer;
    background: ${props => props.active ? '#315eb5' : 'none'};

    p{
        font-size: 14px;
        color: #fff;
    }
`