
import Contact from './components/contact';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';

import NavBar from './components/NavBar';
import Project from './components/Project';



const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
     
    
        
       
        <Header></Header>
        <Banner></Banner>
        <NavBar></NavBar>
        <About />
        <Project></Project>
       <Contact></Contact>
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
