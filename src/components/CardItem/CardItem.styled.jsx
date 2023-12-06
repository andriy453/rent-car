import styled from 'styled-components';

export const CarItem = styled.li`
  width: 274px;
  `;


  export const PhotoConteiner = styled.div`
    
  `
  
export const CarPhoto = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background:
    linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;

  margin-bottom: 14px;
`;

export const CarTitle = styled.p`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;
export const CarModel = styled.span`
  color: var(--blue);
`;

export const CarPrice = styled.p`
  margin-right: auto;
`;
export const CarConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom:8px;
`
export const LearnMoreBtn = styled.button`
    border: none;
    border-radius: 12px;
    background: #3470FF;
    padding: 12px 99px;


    color: var(--background);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.4;
    
    transition:background 300ms;
    &:hover{
        background-color:var(--blue-secondary);
    }
`

export const CarInfo = styled.p`
    color: var(--secondary-transperent);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
`

