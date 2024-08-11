import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import node from "../assets/node.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.jpg";
import redux from "../assets/redux.png"
import chakra from "../assets/chakra.png";
import typescript from "../assets/typescript.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import mongoose from "../assets/mongoose.png";
import story from "../assets/story.png";

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
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-600",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-black",
    },
   
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-violet-500",
    },
    {
      id: 8,
      src: node,
      title: "Node",
      style: "shadow-green-600",
    },
    {
      id: 9,
      src: express,
      title: "Express",
      style: "shadow-gray-600",
    },
    {
      id: 10,
      src: mongo,
      title: "Mongo",
      style: "shadow-green-600",
    },
    {
      id: 11,
      src: mongoose,
      title: "Mongoose",
      style: "shadow-red-900",
    },
    {
      id: 12,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  
    {
      id: 13,
      src: chakra,
      title: "Chakra-UI",
      style: "shadow-teal-300",
    },
    {
      id: 14,
      src: git,
      title: "GitHub",
      style: "shadow-black",
    },
    {
      id: 15,
      src: story,
      title: "Storybook",
      style: "shadow-pink-600",
    },
  ];

  return (
    <div
    id="skills"
      name="skills"
      className=" w-full h-auto bg-white mt-20"
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
                    <div key={id} className={`shadow-md hover:scale-105 duration-80 py-2 rounded-xl ${style}`}>
            <img  class="skills-card-img" src={src} alt="" className="w-20 mx-auto h-20"/>
            <p class="skills-card-name" className="mt-4">{title}</p>
          </div>
                ))
            }
          
        </div>
      </div>

      

      
    </div>
  );
};

export default Skills;
