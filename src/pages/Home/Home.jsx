import {
  ConteinerContent,
  HomeConteiner,
  ConteinerImg,
  Text,
  ConteinerBtn,
  StyledLink,
  ContacBbutton,
  ImgPhone,
  ImgCar,
} from './Home.stuled';
import CarImg from '../../icons/carImg.webp';
import backgroundImg from '../../icons/phoneImg.webp';
function Home() {
  return (
    <section>
      <HomeConteiner>
        <ConteinerContent>
          <Text>Plan your trip now</Text>
          <h1>
            Save <span>big </span>with our car rental
          </h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <ConteinerBtn>
            <ContacBbutton href="tel:+380730000000">Contact Us</ContacBbutton>
            <StyledLink to="/catalog"> Go to catalog</StyledLink>
          </ConteinerBtn>
        </ConteinerContent>
        <ConteinerImg>
          <ImgPhone src={backgroundImg} alt="backgroundImg" />
          <ImgCar src={CarImg} alt="CarImg" width={700} height={500} />
        </ConteinerImg>
      </HomeConteiner>
    </section>
  );
}

export default Home;
