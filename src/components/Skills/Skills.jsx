import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[8vw] md:px-[5vw] lg:px-[12vw] font-sans"
    style={{
      background: `linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
                   linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)`,
    }}
  >
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
      <p className="text-gray-400 mt-5 text-lg font-medium max-w-2xl mx-auto">
        A showcase of technologies I’ve mastered — crafted through hands-on projects and learning.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-col gap-16">
      {SkillsInfo.map((category) => (
        <div key={category.title}>
          {/* Category Title */}
          <h3 className="text-center text-2xl sm:text-3xl font-semibold text-[#9f7aea] mb-8 tracking-wider">
            {category.title}
          </h3>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {category.skills.map((skill) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={800}
                scale={1.05}
                transitionSpeed={800}
                gyroscope={true}
              >
                <div
                  className="bg-gray-900/70 border border-gray-700 rounded-2xl 
                             flex flex-col items-center justify-center p-4 
                             transition-all duration-500 ease-in-out 
                             hover:border-[#8245ec] hover:shadow-[0_0_20px_rgba(130,69,236,0.5)]
                             hover:scale-105 group"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 mb-3 transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="text-gray-300 text-sm sm:text-base font-medium group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
