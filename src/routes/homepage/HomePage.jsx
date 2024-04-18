import SearchBar from '../../components/searchbar/SearchBar';
import './homePage.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            egestas magna at porttitor vehicula. Nam nec ante sed erat
            condimentum fermentum.
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>20+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className='box'>
              <h1>1200+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imageContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  );
};
export default HomePage;
