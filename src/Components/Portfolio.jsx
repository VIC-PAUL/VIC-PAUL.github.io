import React from "react";
import milaap from "../assets/portfolio/milaap.png";
import travelo from "../assets/portfolio/travelo.png";
import wrike1 from "../assets/portfolio/wrike1.png";
import kindmeal from "../assets/portfolio/kindmeal.png";
const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className=" bg-white w-full text-black h-auto md:h-full place-items-center md:mt-40"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8 pt-40">
          <p className="text-4xl font-bold">Portfolio</p>
          {/* <p className="py-6">Checkout some of my projects here</p> */}
        </div>

        <div class="grid sm:grid-cols-1 md:grid-cols-1 md:w-3/3 gap-8 px-12 sm:px-0 ">
          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="text-white bg-gradient-to-r from-blue-500 to-cyan-500 md:w-2/3 rounded-md">
              <div class="flex items-center justify-center">
                <a
                  href="https://github.com/VIC-PAUL/Milaap-clone"
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button>Code</button>
                </a>
                <a
                  href="https://preeminent-souffle-ade7e3.netlify.app/index.html"
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button>Link</button>
                </a>
              </div>
              <a href="https://preeminent-souffle-ade7e3.netlify.app/index.html">
                <img
                  src={milaap}
                  alt="milaap"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </a>
            </div>

            <div class="flex flex-col justify-center border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">Milaap Clone</h1>
              <h1>
                A free crowdfunding platform for personal and social causes
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p>
                Fundraiser calculator <br /> Accordion feature <br /> Crauser
                functionality
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p>
                HTML <br /> CSS <br /> JavaScript
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="text-white bg-gradient-to-r from-blue-500 to-cyan-500 md:w-2/3 rounded-md">
              <div class="flex items-center justify-center">
                <a
                  href="https://github.com/VIC-PAUL/kindmeal"
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button>Code</button>
                </a>
                <a
                  href="https://effervescent-pasca-08dbb6.netlify.app/index.html"
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button>Link</button>
                </a>
              </div>
              <a href="https://effervescent-pasca-08dbb6.netlify.app/index.html">
                <img
                  src={kindmeal}
                  alt="kindmeal"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </a>
            </div>

            <div class="flex flex-col justify-center border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">
                Kindmeal.my Clone
              </h1>
              <h1>
                Kindmeal.my is Malaysia's No.1 meat-free lifestyle platform.
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p>
                Landing Page <br /> SignUp/Login functionality <br /> Product
                pages with crauser functionality
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p>
                HTML <br /> CSS <br /> JavaScript
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="text-white bg-gradient-to-r from-blue-500 to-cyan-500 md:w-2/3 rounded-md">
              <div class="flex items-center justify-center">
                <a
                  href="https://github.com/VIC-PAUL/Travelocity-clone"
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button>Code</button>
                </a>
                <a
                  href="https://tipify20.netlify.app/"
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button>Link</button>
                </a>
              </div>
              <a href="https://tipify20.netlify.app/">
                <img
                  src={travelo}
                  alt="travelo"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div class="flex flex-col justify-center border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">
                Travelocity Clone
              </h1>
              <h1>
                An online travel agency for booking stays and flights for both
                domestic and international purposes.
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p>
                SignUp/Login functionality <br />
                Search filter for stays <br /> Payment functionality with OTP
                authentication
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p>
                ReactJS <br /> Chakra
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="text-white bg-gradient-to-r from-blue-500 to-cyan-500 md:w-2/3 rounded-md">
              <div class="flex items-center justify-center">
                <a
                  href="https://github.com/VIC-PAUL/sad-kettle-1351"
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button>Code</button>
                </a>
                <a
                  href="https://proflow.netlify.app"
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button>Link</button>
                </a>
              </div>
              <a href="https://proflow.netlify.app">
                <img
                  src={wrike1}
                  alt="wrike"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </a>
            </div>
            <div class="flex flex-col justify-center border-black h-full sm:w-1 md:w-2/3 pl-8 pb-4">
              <h1 class="text-4xl font-bold mt-4 md:mt-0 ">
                Wrike Clone(Pro-Flo)
              </h1>
              <h1>
                A free crowdfunding platform for personal and social causes
              </h1>
              <br />
              <p class="text-2xl font-bold">Features</p>
              <p>
                Login functionality <br /> SignUp functionality with multi step
                form <br /> Routing with private routes
              </p>
              <br />
              <p class="text-2xl font-bold">TechStack </p>
              <p>
                ReactJS <br /> Chakra <br /> React-router
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Portfolio;
