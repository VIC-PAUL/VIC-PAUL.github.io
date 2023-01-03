import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full text-white rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 h-full place-items-center mt-20 md:mt-40"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-20">
          <p className=" text-4xl font-bold pt-20">About</p>
        </div>
        <p className="text-2xl mt-5 pb-40">
          I am a M.E.R.N Stack Developer along with theoratical knowledge about
          storybook. I am skilled in HTML, CSS, JavaScript along with MERN
          stack, which I have used in creating various projects. I also possess
          the knowledge about Data Structure & algorithm. I am keen to start my
          career as a Full Stack Developer in a company that promotes the
          personal and professional growth of its employees while giving them
          the opportunities to use their skills and knowledge.
        </p>
        
      </div>
    </div>
  );
};

export default About;
