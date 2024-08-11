import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip }  from "react-tooltip";

const Github = () => {
  return (
    <div class="react-activity-calendar" name='github' className='w-full h-full bg-white'>
        <div id="github-top-langs" className=' p-10 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-screen'>
        <div className="pb-8 mt-20 md:mt-20" >
            <p className="text-4xl font-bold">Github</p>
        </div>
            <div id="github-stats-card" className=' p-10 shadow-md hover:scale-105 duration-500 shadow-blue-600 rounded-xl'>
            <GitHubCalendar username='VIC-PAUL' ><ReactTooltip /></GitHubCalendar>
            </div>
            <div id="github-streak-stats" className=' p-10 mt-10 flex justify-center shadow-md hover:scale-105 duration-500 shadow-blue-600 rounded-xl'>
                <img src="https://github-readme-streak-stats.herokuapp.com?user=VIC-PAUL&theme=nightowl&hide_border=true&border_radius=0&date_format=M%20j%5B%2C%20Y%5D" alt="streak" className='align-center' />
            </div>
        </div>
      
    </div>
  )
}

export default Github