import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ApplySection from './components/ApplySection';
import GlobalStyle from './GlobalStyle';

import PopularSpaces from './components/PopularSpaces';

// import CardSection from './components/CardSection';
import Footer from './components/Footer';




import './index.css'; 
import CrewSection from './components/CrewSection';

import TrendingItems from './components/TrendingItems';



const App = () => {
  return (
    <div>
     
      
      <Navbar />
     
      <MainContent />
     {/* <CardSection/> */}
<PopularSpaces/>
<TrendingItems/>

  
  
      <CrewSection/>
      <ApplySection/>
      <Footer/>
     
      
    </div>
  );
};

export default App;
