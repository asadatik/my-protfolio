import { Link } from "react-scroll";


const Header = () => {
    return (


        <div className=''>

            <div  className="container mt-14 mx-auto">
                  <div className="flex justify-between items-center">
                      <a href="#">  <h1 className="uppercase  text-4xl font-extrabold  text-amber-200 lg:tracking-[.25em] font-tertiary "  >Atik</h1>     </a>
                            
                         <Link to="contact">
                         <button className="btn text-lg font-bold text-yellow-100 btn-sm"> Work with me </button>

                         </Link> 

                  </div>


            </div>







        </div>

    );
};

export default Header;