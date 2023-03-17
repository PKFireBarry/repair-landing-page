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
import Faq from './components/Faq';



function App() {
  return (
    <div className="App scroll-smooth bg-slate-200">
      

      <NavBar/>
      <Hero/>
      <About/>
      <Pricing/>
      <Review/>
      <ContactUs/>            
      <Services/>
      <Ethics/>
      <Faq/>





      <Footer/>
   </div>
  );
}

export default App;
