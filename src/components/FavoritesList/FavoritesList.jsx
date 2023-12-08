import {selectFavorites} from '../../redux/cars/selectors'
import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';

function FavoritesList() {
    const favoritesArr = useSelector(selectFavorites);
    console.log()
  return (
    <ul>
      {favoritesArr && favoritesArr.map((el,index) =>
        <CardItem key={index} car={ el} />
      )}
    </ul>
  )
}

export default FavoritesList
