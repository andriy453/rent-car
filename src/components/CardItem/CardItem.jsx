import { useState, useEffect } from "react";
import { useSelector ,useDispatch} from 'react-redux';
import {
  CarItem,
  CarIcon,
  CarTitle,
  CarModel,
  CarPrice,
  CarConteiner,
  LearnMoreBtn,
  CarInfo,
  PhotoConteiner,
  SvgHeart,
  SvgHeartActiv,
  SvgVector,
  ListInfo,
  ItemInfo,
} from './CardItem.styled';
import sprite from '../../icons/sprite.svg'

import { addFavorites, deleteFavorites } from '../../redux/cars/carsSlice';
import Modal from "../Modal/Modal";

// {"id": 9582,
// "year": 2008,
// "make": "Buick",
// "model": "Enclave",
// "type": "SUV",
// "CarPhoto": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
// "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
// "fuelConsumption": "10.5",
// "engineSize": "3.6L V6",
// "accessories": [
// "Leather seats",
// "Panoramic sunroof",
// "Premium audio system"
// ],
// "functionalities": [
// "Power liftgate",
// "Remote start",
// "Blind-spot monitoring"
// ],
// "rentalPrice": "$40",
// "rentalCompany": "Luxury Car Rentals",
// "address": "123 Example Street, Kiev, Ukraine",
// "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
// "mileage": 5858
// }
import {selectFavorites} from '../../redux/cars/selectors'






function CardItem({ car }) {
  const dispatch = useDispatch();
   const favoritesArr = useSelector(selectFavorites);
  const { make, model, year, rentalPrice, img,id,address,rentalCompany,type,mileage,accessories} = car
   const addres =  address.split(',').map(item=>item.trim())
  const [favorite, setFavorite] = useState(false)

  useEffect(()=>{
    const isFavorite = favoritesArr.find(car => car.id===id);
    if(isFavorite){
        setFavorite(true)
    }
  }, [favoritesArr, id])
  
  const HandleFavoriteClick = () => {
    setFavorite(!favorite)
    if(favorite){
        dispatch(deleteFavorites(car))
    }else{
        dispatch(addFavorites(car))
    }

  }
const [ shownModal , setShownModal] = useState(false);

const onModal = () => {
  setShownModal(!shownModal )
};
  return (
    
    <CarItem>
          <PhotoConteiner>
        <CarIcon
        src={img}
        loading="lazy"
        alt="car Photo"
              />
           {!favorite ? <SvgHeart onClick={HandleFavoriteClick}><use href={sprite + '#icon-heart'}></use></SvgHeart> : <SvgHeartActiv onClick={HandleFavoriteClick}><use href={sprite + '#icon-heart-blue'}></use></SvgHeartActiv>}
    </PhotoConteiner>
      <div>
        <CarConteiner>
                  <CarTitle>{make} {model.length < 8 ? <CarModel>{model}</CarModel> : ''}, {year}</CarTitle>
                  <div><CarPrice>{rentalPrice}</CarPrice></div>
        </CarConteiner>
        {/* <CarInfo>{addres[1]}  <SvgVector> <use href={sprite + '#icon-Vector'}></use></SvgVector> {addres[2]} | { rentalCompany&&rentalCompany} | {type} | {model || make}|{mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}| {accessories[2].slice(0,20)} </CarInfo> */}
        <ListInfo><ItemInfo>{addres[1]} </ItemInfo> <ItemInfo><SvgVector> <use href={sprite + '#icon-Vector'}></use></SvgVector> </ItemInfo> <ItemInfo>{addres[2]} </ItemInfo> <ItemInfo><SvgVector> <use href={sprite + '#icon-Vector'}></use></SvgVector> </ItemInfo> <ItemInfo>{ rentalCompany}  </ItemInfo> <SvgVector> <use href={sprite + '#icon-Vector'}></use></SvgVector><ItemInfo>Premium   </ItemInfo> <ItemInfo> {type} </ItemInfo> <SvgVector> <use href={sprite + '#icon-Vector'}></use></SvgVector>  <ItemInfo> {model }  </ItemInfo><SvgVector> <use href={sprite + '#icon-Vector'}></use></SvgVector><ItemInfo> {id}   </ItemInfo> <SvgVector> <use href={sprite + '#icon-Vector'}></use></SvgVector>  <ItemInfo> {accessories[0].slice(0,20)}</ItemInfo>  </ListInfo>
        <LearnMoreBtn type="button" onClick={onModal}>Learn more</LearnMoreBtn>
            {shownModal && <Modal onClose={onModal} arr={car} />}
      </div>
    </CarItem>
  );
}

export default CardItem;
