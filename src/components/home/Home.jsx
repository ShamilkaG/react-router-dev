import Banner from "./Banner.jsx";
import Card from "./Card.jsx";

const Home = () => {
  return (
      <>
          <Banner/>
          <div className='grid grid-cols-3 m-4'>
              <Card/>
              <Card/>
              <Card/>
          </div>


      </>

  );
};

export default Home;
