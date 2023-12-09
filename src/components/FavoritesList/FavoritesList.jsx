import {selectFavorites} from '../../redux/cars/selectors'
import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import {FavoritList} from './FavoritesList.stuled'

function FavoritesList() {
    const favoritesArr = useSelector(selectFavorites);
    console.log()
  return (
    <FavoritList>
      {favoritesArr && favoritesArr.map((el,index) =>
        <CardItem key={index} car={ el} />
      )}
    </FavoritList>
  )
}

export default FavoritesList
