import react from 'react';

import HeroSee from './HeroSee/HeroSee';
import Navbar from './NavBar';
import Cards from './Crads/Cards';

function App() {
  return (
    <div className='flex flex-col w-full'>
      <Navbar/>
      <HeroSee/>
      <Cards/>
    </div>
  );
}

export default App;
