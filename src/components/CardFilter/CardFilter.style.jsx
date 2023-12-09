import styled from 'styled-components';

export const SearchBtn = styled.button`
    color:var(--background);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.4; 

    padding: 14px 44px;
    
    border: none;
    border-radius: 12px;
    background: var(--blue);
    
    transition: background 300ms;

    &:hover{
        background-color:var(--blue-secondary)
    }
`
export const ListFilter = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 18px;
    flex-wrap:wrap;

li{
    display: flex;
    flex-direction: column;
}
span{
    color: var(--gray-secondary);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;

    margin-bottom:8px;
}


`

