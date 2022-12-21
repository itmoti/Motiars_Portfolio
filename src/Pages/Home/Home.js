import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import ContactForm from './ContactForm';
import Projects from './Projects';

const Home = () => {
    return (
      <section>
          <div className='h-screen flex justify-center items-center flex-col align-middle'>
           <h1 className='text-3xl'> Hello ,It's
           <br/>
            Motiar Rahman</h1>
            <p>
                
            <TypeAnimation
                sequence={[
                   'A Computer Programmer Who is a MERN ', // Types 'One'
                    1000, // Waits 1s
                    'A Computer Programmer Who is a Stack', // Deletes 'One' and types 'Two'
                    1000, // Waits 2s
                    'A Computer Programmer Who is a MERN Stack Developer', // Types 'Three' without deleting 'Two'
                    () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em' }}
            />
            </p>

            <div className='flex justify-center gap-3 mt-6'>
            <button className="btn  btn-info">Hire ME</button>
            <button className="btn btn-outline btn-info">Resume</button>
            </div>
        </div>

        <div id='about'>
           <About></About>
        </div>
      <div id='projects'>
      <Projects ></Projects>
      </div>
      <div id='contactform'>
        <ContactForm></ContactForm>
      </div>
      </section>
    );
};

export default Home;