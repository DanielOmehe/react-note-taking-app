import { styled } from "styled-components";

export const MoreItemsWrapper = styled.div`
    width: 100%;
    height: auto;

    h3{
        padding: .5rem 1.2rem;
        color: #eee;
        font-size: 12px;
    }
`

export const MoreItemsContainer =  styled.div`
    width: 100%;
    height: auto;
`

export const MoreItem = styled.div`
    width: 100%;
    padding: 0.6rem 1.2rem;
    display: flex;
    align-items: center;   
    justify-content: flex-start;
    gap: .8rem;

    p{
        font-size: 14px;
        font-weight: 500;
        color: #fff;
    }
`