import React from "react";
import { SocialIcon } from 'react-social-icons'

const Cont = () => {
  return (
    <div class="h-full w-full bg-white-100 justify-center">
      <div class="bg-white rounded-xl shadow-md flex flex-row justify-center bg-gradient-to-r from-blue-500 to-cyan-500 pr-8 md:hover:scale-y-110 duration-100">
        <div class=" p-8  transition md:block max-w-screen-lg ">
          <div class="flex justify-between ">
            <h2 class="text-white text-xl justify-center">Contact Information</h2>
          </div>
          <div class="mt-6 flex flex-row ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-slate-200 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-slate-200 text-xs">Name :</h2>
              <p class="text-white text-xs">Victor Paul Choudhury</p>
            </div>
          </div>

          <div class="mt-4 flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-slate-200 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-slate-200 text-xs">Email :</h2>
              <p class="text-white text-xs">vicpaul1994@gmail.com</p>
            </div>
          </div>

          <div class="mt-4 flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-slate-200 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <h2 class="text-slate-200 text-xs">Phone :</h2>
              <p class="text-white text-xs">+91-8638895425</p>
            </div>
          </div>

          <div class="mt-5 flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-slate-200 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <div>
              <h2 class="text-slate-200 text-xs">Location :</h2>
              <p class="text-white text-xs">Guwahati</p>
            </div>
          </div>
          </div>
          <div class="pt-16">
          <div class="mt-10 flex flex-row justify-center md:mt-3">
            <div class="flex flex-row">
            <SocialIcon
                url="https://www.linkedin.com/in/victor-paul-choudhury/"
                fgColor="white"
                bgColor="transparent"
              />
                <h2 class="text-slate-200 text-xs mt-5">Linkedin</h2>
            </div>
          </div>

          <div class="mt-0 flex flex-row">
            <div class="flex flex-row">
            <SocialIcon
                url="https://github.com/VIC-PAUL"
                fgColor="white"
                bgColor="transparent"
              />
                <h2 class="text-slate-200 text-xs mt-5">Github</h2>
            </div>
          </div>

          <div class="mt-0 flex flex-row">
            <div class="flex flex-row">
            <SocialIcon
                url="https://twitter.com/victor__paul"
                fgColor="white"
                bgColor="transparent"  
              />
              <h2 class="text-slate-200 text-xs mt-5">Twitter</h2>
            </div>
          </div>

          <div class="mt-0 flex flex-row">
            <div class="flex flex-row">
            <SocialIcon
                url="https://vicpaul1994@gmail.com"
                fgColor="white"
                bgColor="transparent"  
              />
              <h2 class="text-slate-200 text-xs mt-5">Mail</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cont;
