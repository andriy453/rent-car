
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

import { Container } from './CatalogPage.styled';
import { fetchCar } from '../../redux/cars/operations'
import CardList from '../../components/CardList/CardList';
import { selectStatus } from '../../redux/cars/selectors'
import CardFilter from "../../components/CardFilter/CardFilter";
const CatalogPage = () => {
  const [limit, setLimit] = useState(11);
  const status = useSelector(selectStatus)

  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchCar(12));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  if (status === 'loading') {
  return (
    <Container>
      <CardFilter />
      <CardList />
            <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        wrapperStyle={ {justifyContent: "center",}}
        visible={true}
      />
    </Container>
  );
}

  if (status === 'succeeded') {
  return (
    <Container>
      <CardFilter/>
      <CardList limit={limit} setLimit={setLimit} />

      
    </Container>
  );
  }
};

export default CatalogPage;
