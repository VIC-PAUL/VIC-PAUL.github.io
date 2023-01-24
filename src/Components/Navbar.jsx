import React from "react";
import { CgMenuGridR, CgClose } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const newtab=()=>{
    window.open("/Victor-Choudhury-Resume.pdf")
  }

  const [icon, setIcon] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-3xl font-signature ml-2">vpc.</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, href, download }) => (
          <li
            key={id}
            className="cursor-pointer px-1 text-gray-500 hover:scale-105 duration-50"
          >
            <button className="cursor-pointer px-3 text-black hover:scale-105 duration-50  bg-white text-xl font-black uppercase items-center rounded-md">
              <Link to={link} smooth duration={300}>
                  {link}
              </Link>
            </button>
          </li>

        ))}
         <a href="/Victor-Choudhury-Resume.pdf" download={true}>
        <button onClick={()=>newtab()} className="cursor-pointer px-2 ml-1 text-black hover:scale-105 duration-50  bg-white text-xl font-black uppercase items-center rounded-md">RESUME</button>      
        </a>
        </ul>
       
      <div
        onClick={() => setIcon(!icon)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {icon ? <CgClose size={30} /> : <CgMenuGridR size={30} />}
      </div>

      {icon && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-black to-black">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setIcon(!icon)}
                to={link}
                smooth
                duration={300}
              >
                {link}
              </Link>
            </li>
          ))}
            <a href="/Victor-Choudhury-Resume.pdf" download={true}>
        <button onClick={()=>newtab()} className="px-4 cursor-pointer capitalize py-6 text-4xl">Resume</button>      
        </a>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
