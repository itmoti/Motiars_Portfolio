import React from 'react';

const Projects = () => {
    const projects = [
        {
            projectTitle : 'BikerZone' , 
            projectInfo : 'A second hand bike selling website' , 
            liveLink : 'https://bikezone-45b01.web.app/' , 
            Features : {

            }
        } , 
        {
            projectTitle : 'Programmers Club' , 
            projectInfo : 'A  Course Selling Website' , 
            liveLink : 'https://programmers-club-7ead9.web.app/' , 

            Features : {

            }
        } , 
        {
            projectTitle : 'Kowsik Photography' , 
            projectInfo : 'A Content Sharing Website' , 
            liveLink : 'https://kowshik-photogrpahhing.web.app/service/636a5748cab5d4cea6473ed1' , 

            Features : {

            }
        } 
    ]
    
    return (
        <div className='my-4'>
            <h1 className='text-3xl '>Projects</h1>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             {
                projects.map(project => <div className="card w-64 mx-auto bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                   {project.projectTitle}
                  
                  </h2>
                  <p>{project.projectInfo}</p>
                  <div className="card-actions  justify-end">
                  <div className='flex gap-3'>
                  <div  className="btn btn-sm btn-primary ">Live Link</div> 
                    <div className="btn btn-sm btn-primary">Full details</div>
                    </div>
                  </div>
                </div>
              </div>)
             }
            </div>
        </div>
    );
};

export default Projects;