import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ContactUs from './components/ContactUs';
import Review from './components/Review';
import Footer from './components/Footer';
import {motion} from 'framer-motion';
import Ethics from './components/Ethics';



function App() {
  return (
    <div className="App scroll-smooth bg-slate-200">
      
      <Header/>
      <NavBar className='sticky'/>
      <Hero/>
      <About/>
      <Pricing/>
      <Review/>
      <ContactUs/>            
      <Services/>
      <Ethics/>





      <Footer/>
    </div>
  );
}

export default App;
