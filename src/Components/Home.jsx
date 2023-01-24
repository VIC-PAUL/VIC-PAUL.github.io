import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  const newtab=()=>{
    window.open("https://drive.google.com/file/d/1AkWZgn9qHNiM0AtNEwC3wAwacD1sy5jA/view?usp=sharing")
  }
  return (
    <div name="home" className="h-screen w-full bg-white pt-40">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center h-full px-8  md:pt-9 md:flex-row pb-6">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            VICTOR PAUL
          </h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            CHOUDHURY
          </h2>
          <p className="text-gray-800 py-4 max-w-lg text-lg uppercase font-extrabold">
            {/* Full Stack Web Developer */}
            <a href="https://github.com/DenverCoder1/readme-typing-svg">
              <img
                src="https://readme-typing-svg.herokuapp.com?font=Oxygen&color=cyan&size=40&pause=500&width=800&height=64&lines=Hi+there+👋;I+am+a+Full+Stack+Web+Developer"
                alt="img"
              />
            </a>
          </p>

          <div>
            <a href="/Victor-Choudhury-Resume.pdf" download={true}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black cursor-pointer" onClick={()=>newtab()}>
                RESUME
                <span className=" group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="mb-80">
          <img
            src={heroImage}
            alt="img"
            className="rounded-2xl w-full mx-auto mt-20  md:w-2/3 md:mt-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
