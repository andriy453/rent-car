import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 0 20px;
  padding-bottom: 50px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    padding-bottom: 50px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
    padding-bottom: 50px;
  }
`;
export const LoadMoreBtn = styled.button`
  color: var(--blue);
  background-color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  border: none;

  margin: 0 auto;

  transition: color 300ms;

  &:hover {
    color: var(--blue-secondary);
  }
`;
