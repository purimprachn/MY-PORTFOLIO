import React from 'react';
import sun from "../assets/sun.png"; //ดึงรูปมาใช้ในรีแอค

const Projects = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">My Projects</h2>

            <div className="row">
                {/*Project 1*/}
                <div className="col-md-4">
                    <div className="card shadow-lg">
                        
                        <img src={sun} className="card-img-top" alt="Weather App" />
                        <div className="card-body">
                        <h5 className="card-title">Weather App</h5>
                        <p className="card-text">A wep application that provides real-time weather updates.</p>
                        <a href="https://purimprachn.github.io/weather/" className="btn btn-primary">View Details</a>
                        </div>                
                    </div>
                </div>
            

            {/* Project 2*/}
            <div className="col-md-4">
                <div className="card shadow-lg">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 2" />
                    <div className="card-body">
                        <h5 className="card-title">Project 2</h5>
                        <p className="card-text">This is a description of project 2.</p>
                        <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
            {/* Project 3*/}
            <div className="col-md-4">
                <div className="card shadow-lg">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 3" />
                        <div className="card-body">
                        <h5 className="card-title">Project 3</h5>
                        <p className="card-text">This is a description of project 3.</p>
                        <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default Projects;