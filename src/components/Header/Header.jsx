import { Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <Navigation>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/catalog">catalog</StyledLink>
      <StyledLink to="/favorites">favorites</StyledLink>
    </Navigation>
  );
};
