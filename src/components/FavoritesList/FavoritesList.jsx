import { useSelector } from 'react-redux';

import {
  selectFavorites,
  carsFilterFavorite,
} from '../../redux/cars/selectors';
import CardItem from '../CardItem/CardItem';
import { FavoritList, Text } from './FavoritesList.stuled';
import CardFilter from '../CardFilter/CardFilter';

function FavoritesList() {
  const favoritesArr = useSelector(selectFavorites);
  const FilterFavorite = useSelector(carsFilterFavorite);

  return (
    <>
      {FilterFavorite ? (
        <>
          <CardFilter filterArr={favoritesArr} />
          <FavoritList>
            {FilterFavorite.length === 0 ? (
              <p>not faund favorites</p>
            ) : (
              FilterFavorite.map((el, index) => (
                <CardItem key={index} car={el} />
              ))
            )}
          </FavoritList>
        </>
      ) : (
        <>
          {favoritesArr.length === 0 ? (
            <Text>
              It appears that you haven't added any car to your favorites yet.
              To get started, you can add car that you like to your favorites
              for easier access in the future.
            </Text>
          ) : (
            <>
              <CardFilter filterArr={favoritesArr} />
              <FavoritList>
                {favoritesArr.map((el, index) => (
                  <CardItem key={index} car={el} />
                ))}
              </FavoritList>
            </>
          )}
        </>
      )}
    </>
  );
}

export default FavoritesList;
