import About from './components/About';
import Banner from './components/Banner';
import Contactme from './components/Contactme';

import Footer from './components/Footer/Footer';
import Header from './components/Header'
import NavBar from './components/NavBar';

import Project from './components/Project/Project';

import Skill from './components/Skill/Skill';

const App = () => {
  return (
    <div className=''>
 
 
       
        <Header></Header>
       
        <Banner></Banner>
        <NavBar></NavBar>
        <About />
       <Project></Project>
       <Skill></Skill>
       <Contactme></Contactme>
       <Footer></Footer>
      {/* <div className='h-[400px]'></div> */}
    </div>
  );
};

export default App;
