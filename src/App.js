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
    <div className="App bg-slate-200 snap-y snap-mandatory overflow-x-hidden scroll-smooth">
      

      <NavBar/>
      <Hero className='snap-center '/>
      <About className='snap-center '/>
      <Pricing className='snap-center '/>
      <Review className='snap-center '/>
      <ContactUs className='snap-center '/>            
      <Services className='snap-center '/>
      <Ethics className='snap-center '/>
      <Faq className='snap-center '/>
      <Footer/>
   </div>
  );
}

export default App;
