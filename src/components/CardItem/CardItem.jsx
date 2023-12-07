import {  useState,useEffect } from "react";
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
} from './CardItem.styled';
import sprite from '../../icons/sprite.svg'
import { useDispatch } from 'react-redux';
import { addFavorites,deleteFavorites } from '../../redux/cars/carsSlice';

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
import {  useSelector } from 'react-redux';


function CardItem({ car }) {
  const dispatch = useDispatch();
   const favoritesArr = useSelector(selectFavorites);
  const { make, model, year, rentalPrice, img,id} = car
  
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
  
  return (
    
    <CarItem>
          <PhotoConteiner>
        <CarIcon
        src={img}
        loading="lazy"
        alt=""
              />
           {!favorite ? <SvgHeart onClick={HandleFavoriteClick}><use href={sprite + '#icon-heart'}></use></SvgHeart> : <SvgHeartActiv onClick={HandleFavoriteClick}><use href={sprite + '#icon-heart-blue'}></use></SvgHeartActiv>}
    </PhotoConteiner>
      <div>
        <CarConteiner>
                  <CarTitle>{make} {model.length < 8 ? <CarModel>{model}</CarModel> : ''}, {year}</CarTitle>
                  <div><CarPrice>{rentalPrice}</CarPrice></div>
        </CarConteiner>
        <CarInfo>Power liftgate | Power liftgate | Power liftgate | Power liftgate | Power liftgate | Power liftgate |</CarInfo>
        <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
      </div>
    </CarItem>
  );
}

export default CardItem;
