import React from 'react';
import {Link} from 'react-router-dom'
import Project from './project';
import {data} from './data'

function Projects() {
  return (
    <div>
        <div className="w-[65%] md:w-[60%] flex items-center justify-between mt-2">
            <Link to='/'><i className="fa-regular fa-circle-left text-3xl md:text-5xl ml-2"></i></Link>
            <h1 className="text-center text-2xl md:text-4xl">My Projects</h1>
        </div>
        <div className="flex-wrap flex items-start p-4">
            {
                data.map(datum=> {
                   return <Project {...datum}/>
                })
            }
        </div>
    </div>
  )
}
export default Projects