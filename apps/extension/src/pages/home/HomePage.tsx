import Head from './Head';
import Body from './Body';

const HomePage = () => {
  return (
    <div className='relative flex flex-col w-full h-full self-center' id='popup-layout'>
      <Head />
      <Body />
    </div>
  );
};

export default HomePage;
