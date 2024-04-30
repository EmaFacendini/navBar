import react from 'react';

import Hero from './HeroSee/Hero';
import Navbar from './NavBar';
import Cards from './Crads/Cards';

function App() {
  return (
    <div className='flex flex-col w-full '>
      <Navbar/>
      <Hero/>
      <Cards/>
    </div>
  );
}

export default App;
