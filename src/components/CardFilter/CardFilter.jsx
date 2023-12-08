import { useState,useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { SearchBtn } from './CardFilter.style'
import { fetchCarAll} from '../../redux/cars/operations'
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsAll } from '../../redux/cars/selectors'
import {filterCars} from '../../redux/cars/carsSlice'

function CardFilter() {
const [model, setModel] = useState('')
const [price, setPrice] = useState('')
    const dispatch = useDispatch();
    const Allcar = useSelector(selectCarsAll);
  const options = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
    "Land"];
  
  let priceArr =[]
  for (let i = 10; i <= 200; i += 10) { 
    priceArr.push(i)
  }
    console.log(model, price)
    const hendleSearch = () => {
        
        // dispatch(filterCars(Allcar.filter((el) => +el.rentalPrice.slice(1) <= price)))
        if(model && price) dispatch(filterCars(Allcar.filter((el) => el.make === model ).filter((el) => +el.rentalPrice.slice(1) <= price)))
         else if  (model) dispatch(filterCars(Allcar.filter((el) => el.make === model)))
         else if(price )dispatch(filterCars(Allcar.filter((el) => +el.rentalPrice.slice(1) <= price)))
    }
    useEffect(() => {
        dispatch(fetchCarAll())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <>
      <Dropdown arr={options} value='Enter the text' set={setModel} />
        <Dropdown arr={priceArr} value='To $' set={setPrice} height={true} />
        <SearchBtn type='button' onClick={hendleSearch}>Search</SearchBtn>
    </>
  )
}

export default CardFilter
