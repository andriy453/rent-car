import './home.css'

function Home() {
  return (
    <section>
        <h2>Welcome to Rental Car Company</h2>
        <p>Discover the freedom of the open road with Rental Car Company. We offer a wide range of vehicles to suit your travel needs. Whether youre planning a road trip, a business visit, or just need a reliable car for daily commuting, we have you covered.</p>

        <div className="services">
            <div className="service">
                <h3>Extensive Fleet</h3>
                <p>Choose from our diverse fleet of vehicles, including compact cars, SUVs, and luxury sedans. We have the perfect car for every journey.</p>
            </div>
            <div className="service">
                <h3>Flexible Rental Plans</h3>
                <p>Enjoy flexible rental plans tailored to your schedule. Whether you need a car for a day, a week, or an extended period, we have options that suit your needs.</p>
            </div>
            <div className="service">
                <h3>Easy Booking Process</h3>
                <p>Our user-friendly online booking system makes it easy to reserve the vehicle of your choice. Experience a hassle-free booking process with Rental Car Company.</p>
            </div>
        </div>

        <a href="#contact" className="contact-button">Contact Us</a>
      </section>
              

  )
}

export default Home
