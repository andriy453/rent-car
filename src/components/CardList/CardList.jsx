import { useSelector } from 'react-redux';

import CardItem from '../CardItem/CardItem';
import { selectCar } from '../../redux/cars/selectors'
import { CarList, } from './CardList.styled';

function CardList() {
  const car = useSelector(selectCar)
  return (
      <CarList>
          {car && car.map((el,index) => (
              <CardItem key={index} car={el} />
          ))}
      {car.length === 0 ? <div>car not faund</div> : undefined}
    </CarList>
  );
}

export default CardList;
