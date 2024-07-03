

import {BiHomeAlt, BiUser } from 'react-icons/bi'
import {BsBriefcase,BsChatSquareDots} from 'react-icons/bs'
import {Link } from 'react-scroll'


const NavBar = () => {

  return <div>
       <div className='fixed bottom-2 lg:bottom-14 w-full  overflow-hidden z-50  ' >
              <div className='container mx-auto'  >   
                
              

               <div  className='w-full bg-black/20 h-[80px] md:px-8 backdrop-blur-2xl rounded-full  flex items-center justify-between  text-3xl text-white '  >
                     <Link 
                     activeClass='active' smooth={true} spy={true}
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
                    to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' >
                             <BsChatSquareDots></BsChatSquareDots>
                    </Link>

              
            </div>
                  
            </div>
         </div>
        
          
    </div>;
        
      
};

export default NavBar;
