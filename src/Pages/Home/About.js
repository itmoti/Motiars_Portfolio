import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt='loading'/>
    <div className='text-left p-6 '>
        <h3 className='text-xl'>About Me</h3>
      <h1 className="text-5xl font-bold">I build software that solves your problem.</h1>
      <p className="py-6">Professional Web developer who always try to solve every problem according to your problem </p>

      <div>
        
      </div>
      <button className="btn btn-info">Download CV</button>
    </div>
  </div>
</div>
    );
};

export default About;