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

