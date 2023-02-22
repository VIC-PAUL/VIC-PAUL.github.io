import React from "react";
import milaap from "../assets/portfolio/milaap.png";
import travelo from "../assets/portfolio/travelo.png";
import wrike1 from "../assets/portfolio/wrike1.png";
import kindmeal from "../assets/portfolio/kindmeal.png";
const Portfolio = () => {
  const newtab = () => {
    window.open("https://github.com/VIC-PAUL/Milaap-clone");
  };

  const newtab1 = () => {
    window.open("https://preeminent-souffle-ade7e3.netlify.app/index.html");
  };
  const newtab2 = () => {
    window.open("https://github.com/VIC-PAUL/kindmeal");
  };
  const newtab3 = () => {
    window.open("https://effervescent-pasca-08dbb6.netlify.app/index.html");
  };
  const newtab4 = () => {
    window.open("https://github.com/VIC-PAUL/Travelocity-clone");
  };
  const newtab5 = () => {
    window.open("https://tipify20.netlify.app/");
  };
  const newtab6 = () => {
    window.open("https://github.com/VIC-PAUL/sad-kettle-1351");
  };
  const newtab7 = () => {
    window.open("https://proflow.netlify.app");
  };
  return (
    <div
      name="projects"
      className=" bg-white w-full text-black h-auto md:h-full place-items-center md:mt-40"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8 pt-40">
          <p className="text-4xl font-bold">Projects</p>
          {/* <p className="py-6">Checkout some of my projects here</p> */}
        </div>

        <div class="grid sm:grid-cols-1 md:grid-cols-1 md:w-3/3 gap-8 px-12 sm:px-0 ">
          <div class="flex flex-col sm:flex-row max-w-screen-lg ">
            <div class="text-white bg-gradient-to-r from-blue-500 to-cyan-500 md:w-2/3 rounded-md">
              <div class="flex items-center justify-center">
                <h3
                  onClick={() => newtab()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab()}>Code</button>
                </h3>
                <h3
                  onClick={() => newtab1()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab1()}>Link</button>
                </h3>
              </div>
              <h3 onClick={() => newtab()} class="cursor-pointer">
                <img
                  src={milaap}
                  alt="milaap"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </h3>
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
                <h3
                  onClick={() => newtab2()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab2()}>Code</button>
                </h3>
                <h3
                  onClick={() => newtab3()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 bg-slate-50 cursor-pointer text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab3()}>Link</button>
                </h3>
              </div>
              <h3 onClick={() => newtab3()} class="cursor-pointer">
                <img
                  src={kindmeal}
                  alt="kindmeal"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </h3>
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
                <h3
                 onClick={() => newtab4()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab4()}>Code</button>
                </h3>
                <h3
                 onClick={() => newtab5()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button onClick={() => newtab5()}>Link</button>
                </h3>
              </div>
              <h3  onClick={() => newtab5()} class="cursor-pointer">
                <img
                  src={travelo}
                  alt="travelo"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </h3>
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
                <h3
                  onClick={() => newtab6()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button   onClick={() => newtab6()}>Code</button>
                </h3>
                <h3
                   onClick={() => newtab7()}
                  class="w-1/2 px-6 py-2 m-4 duration-50 hover:scale-105 cursor-pointer bg-slate-50 text-blue-500 rounded-md text-xl font-extrabold flex items-center justify-center"
                >
                  <button   onClick={() => newtab7()}>Link</button>
                </h3>
              </div>
              <h3   onClick={() => newtab7()} class="cursor-pointer">
                <img
                  src={wrike1}
                  alt="wrike"
                  class="rounded-md duration-300 hover:scale-105"
                />
              </h3>
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
