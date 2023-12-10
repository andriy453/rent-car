import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

import { Container } from './CatalogPage.styled';
import { fetchCar } from '../../redux/cars/operations';
import CardList from '../../components/CardList/CardList';
import {
  selectStatus,
  selectCarsAll,
  selectCar,
} from '../../redux/cars/selectors';
import CardFilter from '../../components/CardFilter/CardFilter';
const CatalogPage = () => {
  const [limit, setLimit] = useState(11);
  const status = useSelector(selectStatus);
  const carArr = useSelector(selectCarsAll);
  const car = useSelector(selectCar);

  const dispatch = useDispatch();
  useEffect(() => {
    if (car.length === 0) {
      dispatch(fetchCar(12));
    }
  }, [car.length, dispatch]);

  if (status === 'loading') {
    return (
      <Container>
        <CardFilter filterArr={carArr} />
        <CardList />
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#000000"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          visible={true}
        />
      </Container>
    );
  }

  if (status === 'succeeded') {
    return (
      <Container>
        <CardFilter filterArr={carArr} />
        <CardList limit={limit} setLimit={setLimit} />
      </Container>
    );
  }
};

export default CatalogPage;
