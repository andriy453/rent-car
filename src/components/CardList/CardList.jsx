

import CardItem from '../CardItem/CardItem';
import {useSelector } from 'react-redux';
import { selectCar } from '../../redux/cars/selectors'
import { CarList, } from './CardList.styled';
import Dropdown from '../Dropdown/Dropdown';
function CardList() {
  const car = useSelector(selectCar)


  return (
    <>
      <Dropdown/>
          <CarList>
          {car && car.map((el,index) => (
              <CardItem key={index} car={el} />
          ))}
    </CarList>
    </>
  );
}

export default CardList;
