import React from 'react';
import Navbar from '../components/homecomponents/Navbar';
import Liveresult from '../components/homecomponents/Liveresult';
import Tableresult from '../components/homecomponents/Tableresult';
function Home(props) {
  window.localStorage.setItem('name', 'sourbh');
  return (
    <div>
      <Liveresult />
      <Tableresult />
    </div>
  );
}

export default Home;
