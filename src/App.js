import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ContactUs from './components/ContactUs';
import Review from './components/Review';



function App() {
  return (
    <div className="App scroll-smooth">
      
      <Header/>
      <NavBar className='sticky'/>
      <Hero/>
      <About/>
      <Services/>
      <Pricing/>
      <Review/>
      {/*review*/}
      <ContactUs/>
    </div>
  );
}

export default App;
