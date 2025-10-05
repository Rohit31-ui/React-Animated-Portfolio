import React from 'react'
//import typewriter to achieve typing effect
import { Typewriter } from 'react-simple-typewriter'
//import tilt to achieve tilt effect
import Tilt from 'react-parallax-tilt'
import profileImg from '../../assets/profile3.jpg'

const About = () => {
  return (
    <section
      id='about'
      className='py-16 px-[5vw] lg:px-[16vw] font-sans '
    >
      <div className='flex flex-col-reverse md:flex-row gap-8 justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Rohit Lad
          </h2>

          {/* Typing Effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#8245ec] leading-tight'>
            <span className='text-white'>I am a </span>
            <span className='text-[#8245ec]'>
              <Typewriter
                // typing values
                words={[
                  ' FullStack Developer',
                  ' React Developer',
                  ' Java Programmer',
                  ' Cloud Enthusiast',
                ]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>

          {/* About Paragraph */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-8 leading-relaxed'>
            I am a full stack developer with solid experience in building scalable web applications.
            Skilled in both frontend and backend development, I specialize in the MERN stack and
            modern technologies to create seamless user experiences and efficient solutions.
          </p>

          {/* Resume Button */}
          <a
            href='https://drive.google.com/file/d/1Eu2-P_W0gHJgvfN6sgA0mZrZTwqB1gyX/view?usp=drivesdk'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg,#8245ec, #a855f7)',
              boxShadow:
                '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Download CV
          </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          {/* adding tilt effect */}
          <Tilt
           className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            {/* hero image */}
            <img
              src={profileImg}
              alt='Rohit Lad'
              className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[500px] md:h-[500px] rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
