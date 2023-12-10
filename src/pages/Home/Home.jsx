import { Section, Services, Service, ContacBbutton } from './Home.stuled';

function Home() {
  return (
    <Section>
      <h2>Welcome to Rent-A-Car</h2>
      <p>
        Explore the world with our reliable and comfortable rental cars. We
        provide a range of vehicles to suit your travel needs, whether it's a
        weekend getaway or a business trip.
      </p>

      <Services>
        <Service>
          <h2>Fleet Variety</h2>
          <p>
            Choose from our diverse fleet, including sedans, SUVs, and luxury
            cars. We have the right car for every occasion.
          </p>
        </Service>
        <Service>
          <h2>Flexible Rentals</h2>
          <p>
            Enjoy flexible rental plans tailored to your schedule. Rent by the
            day, week, or month – we've got you covered.
          </p>
        </Service>
        <Service>
          <h2>Easy Booking</h2>
          <p>
            Our user-friendly online booking system makes renting a car a
            breeze. Book your car in just a few clicks.
          </p>
        </Service>
      </Services>

      <ContacBbutton href="#contact" className="contact-button">
        Contact Us
      </ContacBbutton>
    </Section>
  );
}

export default Home;
