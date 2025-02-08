
import { FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



import HeroImg from "./../../../public/p.png";




const Hero = () => {
  const navigate = useNavigate();
  
  
  
 

  return (
    <>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-700 to-white">
        <div className=" flex flex-col items-center text-center">
          {/* Text Content */}
          <div data-aos="fade-up" className="max-w-2xl flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-50">
              Welcome to
            </h1>
            <h1 className="text-6xl font-bold text-primary  text-amber-50">
              Green Storyteller
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-900 text-sm font-semibold mt-4"
            >
              Create interactive illustrated stories while integrating ecological and inclusive concepts.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-6"
            >
              
                
              
            </div>
            <button type="button" onClick={() => navigate("/ask")} className="flex items-center gap-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> <FaBookOpen className="text-2xl" /> Create your story now</button>
          </div>

          {/* Image Section */}
         
        </div>
        <div data-aos="zoom-in" className="mt-10">
            <img
              src={HeroImg}
              alt="Storytelling Illustration"
              className="earth aspect-square w-[400px] sm:w-[300px] lg:w-[400px] mx-auto relative z-50"
            />
          </div>
      </div>

     
    </>
  );
};

export default Hero;
