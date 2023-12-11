import {
  Navigation,
  StyledLink,
  ConteinerNavigate,
  StyledLinkicon,
} from './Header.styled';

export const Header = () => {
  return (
    <ConteinerNavigate>
      <StyledLinkicon to="/">
        <img
          src="https://img.freepik.com/premium-vector/car-rental-logo-template-design_316488-1614.jpg"
          alt=""
          width={100}
          height={100}
        />
      </StyledLinkicon>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
    </ConteinerNavigate>
  );
};
