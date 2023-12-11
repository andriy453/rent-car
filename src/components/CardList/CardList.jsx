import { useSelector, useDispatch } from 'react-redux';

import CardItem from '../CardItem/CardItem';
import { selectCar, selectCarsFilter,selectLimit } from '../../redux/cars/selectors';
import { CarList } from './CardList.styled';
import { LoadMoreBtn } from '../../pages/CatalogPage/CatalogPage.styled';

import { fetchCar } from '../../redux/cars/operations';
import {setLimit} from '../../redux/cars/carsSlice'

function CardList() {
  const car = useSelector(selectCar);
  const limit =  useSelector(selectLimit);
  const carsFilter = useSelector(selectCarsFilter);
  const dispatch = useDispatch();
  const hendleClick = () => {
    dispatch(fetchCar(limit + 13));
    dispatch(setLimit())  
  };
  return (
    <>
      {carsFilter ? (
        <CarList>
          {carsFilter &&
            carsFilter.map((el, index) => <CardItem key={index} car={el} />)}
          {carsFilter.length === 0 ? <div>car not faund</div> : undefined}
        </CarList>
      ) : (
        <>
          <CarList>
            {car && car.map((el, index) => <CardItem key={index} car={el} />)}
          </CarList>
          {car.length > limit ? (
            <LoadMoreBtn type="button" onClick={hendleClick}>
              Load more
            </LoadMoreBtn>
          ) : (
            <div></div>
          )}
        </>
      )}
    </>
  );
}

export default CardList;
