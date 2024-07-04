import About from './components/About';
import Banner from './components/Banner';
import Contactme from './components/Contactme';
import Header from './components/Header'
import NavBar from './components/NavBar';

import Project from './components/Project/Project';

import Skill from './components/Skill/Skill';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
     
    
        
       
        <Header></Header>
        <Banner></Banner>
        <NavBar></NavBar>
        <About />
       <Project></Project>
       <Skill></Skill>
       <Contactme></Contactme>
      {/* <div className='h-[400px]'></div> */}
    </div>
  );
};

export default App;
