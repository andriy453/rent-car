import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContacBbutton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: var(--blue);
  color: var(--background);
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1.1em;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background-color: var(--blue-secondary);
  }
`;
export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background-color: var(--blue);
  color: var(--background);
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1.1em;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background-color: var(--blue-secondary);
  }
`;

export const HomeConteiner = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 0 20px;
  padding-bottom: 50px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    max-width: 768px;
    padding: 0 32px;
    padding-bottom: 50px;
    align-items: center;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
    padding-bottom: 50px;
    height: 750px;
  }
`;

export const ConteinerContent = styled.div`
  span {
    color: var(--blue);
  }
  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 32px;
    @media (min-width: 768px) {
      font-size: 52px;
    }
  }
  p {
    color: var(--modal);
    line-height: 1.6;
    margin-bottom: 32px;
    margin-bottom: 32px;
  }
  @media (min-width: 1280px) {
    max-width: 450px;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ConteinerImg = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;
export const ConteinerBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0px 20px;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    justify-content: flex-start;
  }
`;
export const ImgPhone = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  filter: grayscale(100%);
`;
export const ImgCar = styled.img`
  position: absolute;
  top: 200px;
  right: 100px;
  z-index: 3;
`;
