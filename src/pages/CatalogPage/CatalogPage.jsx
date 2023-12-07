
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Container,LoadMoreBtn } from './CatalogPage.styled';
import { fetchCar } from '../../redux/cars/operations'
import CardList from '../../components/CardList/CardList';
  import { selectCar } from '../../redux/cars/selectors'

const CatalogPage = () => {
  const [limit, setLimit] = useState(11);
  const car = useSelector(selectCar)

  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchCar(12));
    }, [dispatch]);

  const hendleClick = () => {

    dispatch(fetchCar(limit + 13));
    setLimit( limit + 12);
  }
  // console.log(car)
  return (
    <Container>
      <CardList />
      {car.length >  limit ? <LoadMoreBtn type="button" onClick={hendleClick}>Load more</LoadMoreBtn>  : <div></div> }

    </Container>
  );
};

export default CatalogPage;
