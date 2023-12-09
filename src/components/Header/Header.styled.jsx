import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #000000;
`;

export const IconWrapper = styled.svg`
  width: '12px';
  height: '12px';
  fill: '#ffffff';
  display: inline-block;
  margin-right: 5px;
`;
