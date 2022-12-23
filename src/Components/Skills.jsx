import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import node from "../assets/node.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.jpg";
import chakra from "../assets/chakra.png";

const Skills = () => {
  const skill = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-black",
    },
  
    {
      id: 7,
      src: git,
      title: "GitHub",
      style: "shadow-black",
    },
    {
      id: 8,
      src: chakra,
      title: "Chakra-UI",
      style: "shadow-teal-300",
    },
  ];

  return (
    <div
      name="skills"
      className=" w-full h-auto bg-white mt-40"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black ">
        <div className=" pb-8 pt-40">
          <p className=" text-4xl font-bold">
            Skills
          </p>
          {/* <p className="py-6">These are the techstacks I have worked with</p> */}
        </div>


        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {
                skill.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-xl ${style}`}>
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
                ))
            }
          
        </div>
      </div>

      

      
    </div>
  );
};

export default Skills;
