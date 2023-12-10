import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  h1,
  h2 {
    color: #343a40;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
`;

export const Services = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Service = styled.div`
  flex: 0 0 calc(33.3333% - 20px);
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  h2 {
    color: #343a40;
    margin-bottom: 10px;
    font-size: 1.8em;
  }
  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 20px);
  }
`;

export const ContacBbutton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #343a40;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1.1em;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background-color: #495057;
  }
`;
