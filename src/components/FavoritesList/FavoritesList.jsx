import {selectFavorites} from '../../redux/cars/selectors'
import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import {FavoritList} from './FavoritesList.stuled'

function FavoritesList() {
    const favoritesArr = useSelector(selectFavorites);
    console.log(favoritesArr.length ==0  )
  return (
    <FavoritList>
      {favoritesArr.length === 0  ? <p>It appears that you haven't added any car to your favorites yet. To get started, you can add car that you like to your favorites for easier access in the future.</p> :favoritesArr.map((el,index) =>
        <CardItem key={index} car={ el} />) }
    </FavoritList>
  )
}

export default FavoritesList
