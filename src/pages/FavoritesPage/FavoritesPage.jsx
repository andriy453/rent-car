import { Container } from './FavoritesPage.styled';
import FavoritesList from '../../components/FavoritesList/FavoritesList';

const FavoritesPage = () => {
  return (
    <section>
    <Container>
      <FavoritesList />
    </Container>
</section>
  );
};

export default FavoritesPage;
