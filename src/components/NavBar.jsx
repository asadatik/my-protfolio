
import {BiHomeAlt, BiUser } from 'react-icons/bi'
import {BsBriefcase,BsChatSquareDots} from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi';
import {Link } from 'react-scroll'


const NavBar = () => {

  return <div>
         <div className='fixed bottom-10 lg:bottom-16 w-full  overflow-hidden z-50  ' >
              <div className='container mx-auto'  >   
                
              

               <div  className='w-full bg-black/30 border-sky-500 border-2 h-[50px] md:px-8 backdrop-blur-2xl rounded-full  flex items-center justify-between  text-3xl text-white '  >
                     <Link 
                     activeClass='active' smooth={true} spy={true} offset={-200}
                     to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '  >
                              <BiHomeAlt></BiHomeAlt>
                    </Link>
                    <Link 
                    activeClass='active' smooth={true} spy={true}
                    to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '  >
                          <BiUser></BiUser>
                    </Link>
                      {/* <Link  
                     activeClass='active' smooth={true} spy={true}
                     to='service' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' >
                             <BsClipboardData> </BsClipboardData>
                       </Link>       */}
                    <Link 
                    activeClass='active' smooth={true} spy={true}
                    to='project' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' >
                             <BsBriefcase></BsBriefcase>
                    </Link>
                 
                    <Link 
                    activeClass='active' smooth={true} spy={true}
                    to='skill' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' >
                               <GiSkills/>
                    </Link>
                    <Link  
                    activeClass='active' smooth={true} spy={true}
                    to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' >
                             <BsChatSquareDots></BsChatSquareDots>
                    </Link>

              
                </div>
                  
            </div>
         </div>
        
          
    </div>;
        
      
};

export default NavBar;
