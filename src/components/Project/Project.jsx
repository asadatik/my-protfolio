import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";


const Project = () => {

    const [ projects ,setData] = useState([]);
    useEffect( () =>{
          fetch ('Project.json')
          .then(res=>res.json())
                
          .then(data =>setData(data))
             

        },[])

  return (
    <div className="py-8 lg:py-40" id="project">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-8 border-b-4 w-fit border-teal-300 pb-2">
          Projects
        </h1>
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
