import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  padding: 30px 20px;
  color: var(--secondary);
  transition:color 300ms;
  &:hover{
    color:var(--blue-secondary)
  }
`;
export const StyledLinkicon = styled(Link)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }

`

export const ConteinerNavigate = styled.div`
    display:flex;
    justify-content:center;
    position: relative;
    z-index: 1;
      @media (min-width: 768px) {
        justify-content:space-between;
  }
  width: 100%;
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`

