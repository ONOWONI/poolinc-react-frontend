import React from 'react';
import './App.css';
import Header from './components/header';
import Greeting from './components/greeting';
import Services from './components/whatwedo';
import Shop from './components/shop';
import Professionals from './components/professionals';
import Reviews from './components/reviews';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Greeting  />
      <Services />
      <Professionals />
      <Shop />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
