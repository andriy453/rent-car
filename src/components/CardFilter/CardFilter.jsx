import { useState,useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { SearchBtn,ListFilter } from './CardFilter.style'
import { fetchCarAll} from '../../redux/cars/operations'
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsAll } from '../../redux/cars/selectors'
import { filterCars } from '../../redux/cars/carsSlice'
import {filterReset } from '../../redux/cars/carsSlice'

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

    const hendleSearch = () => {
            console.log(model, price)
        // dispatch(filterCars(Allcar.filter((el) => +el.rentalPrice.slice(1) <= price)))
        if(model && price) dispatch(filterCars(Allcar.filter((el) => el.make === model ).filter((el) => +el.rentalPrice.slice(1) <= price)))
         else if  (model) dispatch(filterCars(Allcar.filter((el) => el.make === model)))
         else if(price )dispatch(filterCars(Allcar.filter((el) => +el.rentalPrice.slice(1) <= price)))
    }
    useEffect(() => {
        dispatch(fetchCarAll())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  const hendleReset = () => {
    dispatch(filterReset())
    setModel('')
    setPrice('')
  }
  return (
    <>
        <ListFilter>
        <li><span>Car brand</span><Dropdown arr={options} value='Enter the text' set={setModel} selectedOption={model } /></li>
        <li><span>Price/ 1 hour</span><Dropdown arr={priceArr} value='To $' set={setPrice} height={true} selectedOption={price } /></li>
        <SearchBtn type='button' onClick={hendleSearch}>Search</SearchBtn>
        <SearchBtn type='button' onClick={hendleReset}>Reset the filter</SearchBtn>
    </ListFilter>

    </>
  )
}

export default CardFilter
