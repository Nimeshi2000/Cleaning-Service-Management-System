import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ServicesMenu from '../components/ServicesMenu';
import BookingForm from '../components/BookingForm';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ServicesMenu />
      <BookingForm />
      <Gallery />
    </div>
  );
};

export default Home;
