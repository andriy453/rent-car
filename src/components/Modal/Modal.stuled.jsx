import styled from 'styled-components'; 


export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-transperent);
    z-index: 2;

`


export const ModalContent = styled.div`
    height:800px;
    background-color:var( --background);
    width: 310px;
    padding: 40px 20px;
    transition: all .3s;
    position: absolute;
    top: 400px;
    left: 50%;
    overflow: auto;
    transform: translate(-50%,-50%);
    border-radius: 24px;
`
  
export const CarImg = styled.img`
    width: 270px;
    height: 260px;
    border-radius: 14px;

    margin-bottom:14px;
`

export const ModalDescription = styled.p`
    color: var(--secondary);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4; 

    max-width: 461px;

    margin-bottom:24px;

`

export const ModalAccessories = styled.p`
    color: var(--secondary);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4; 

`
export const ModalListInfo = styled.ul`
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    gap: 4px 6px;

    max-width: 340px;
    
    margin-bottom:14px;
    margin-top:8px;

`
export const ModalListAccessories = styled.ul`
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    gap: 4px 6px;

    max-width: 340px;
    
    margin-bottom:24px;
`
export const ModalRentalList = styled.ul`
    display: flex;
    flex-wrap:wrap;
    gap: 8px;
    max-width: 340px;
    
    margin-bottom:24px;
`

export const RentalItem = styled.li`
color: var(--modal);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
letter-spacing: -0.24px;
padding: 7px 14px;

border-radius: 35px;
background-color: #F9F9F9;
span{
color: var(--blue);
font-weight: 600;
}
`

export const SvgBtnClose = styled.svg`
    stroke: var(--secondary);
    width: 24px;
    height: 24px;
`
export const CloseBtn = styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    top: 16px;
    right: 16px;
`

export const RentalBtn = styled.a`
    border: none;
    border-radius: 12px;
    background: var(--blue);
    padding: 12px 50px;

    color: var(--background);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.4;

    transition: background 300ms;

    &:hover{
        background-color:var(--blue-secondary);
    }
`