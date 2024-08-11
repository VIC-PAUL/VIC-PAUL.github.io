import React from "react";

const About = () => {
  return (
    <div
    id="about" class="aboutsection"
      name="about"
      className=" w-full text-white rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 h-auto place-items-center mt-20 md:mt-40 flex flex-col sm:flex-row"
    >
          <div className="p-5">
          <img src="https://i.pinimg.com/originals/00/c5/37/00c537bdf08547f031540521892e5aa7.gif" alt="" className="rounded-xl"/>
        </div>
      <div id="user-detail-intro" className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-20">
          <p className=" text-4xl font-bold pt-20">About</p>
        </div>
        <p  className="text-2xl mt-5 pb-40">
        I am a M.E.R.N Stack Developer along with theoretical knowledge about
          storybook.<br/>
          I am skilled in HTML, CSS, and JavaScript along with the MERN
          stack and I have used these tech stacks for creating various projects. I also possess
          knowledge about data structures & algorithms. I am looking forward to starting my
          career as a Full Stack Web Developer in a company that promotes both
          the personal and professional growth of its employees while giving them
          the opportunities to use their skills and knowledge.
        </p>
      </div>

    </div>
  );
};

export default About;
