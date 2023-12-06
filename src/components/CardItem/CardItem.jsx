import {
  CarItem,
  CarPhoto,
  CarTitle,
  CarModel,
  CarPrice,
  CarConteiner,
  LearnMoreBtn,
  CarInfo,
  PhotoConteiner,
} from './CardItem.styled';

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

function CardItem() {
  return (
    <CarItem>
          <PhotoConteiner>
        <CarPhoto
        src="https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg"
        alt=""
      />
    </PhotoConteiner>
      <div>
        <CarConteiner>
          <CarTitle>Buick <CarModel>Enclave</CarModel>, 2008</CarTitle>
          <div><CarPrice>40$</CarPrice></div>
        </CarConteiner>
        <CarInfo>Power liftgate | Power liftgate | Power liftgate | Power liftgate | Power liftgate | Power liftgate |</CarInfo>
        <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
      </div>
    </CarItem>
  );
}

export default CardItem;
