import { Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <Navigation>
      <StyledLink to="/catalog">First</StyledLink>
      <StyledLink to="/favorites">Second</StyledLink>
    </Navigation>
  );
};
