import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.domain === filter);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[5vw] lg:px-[18vw] font-sans relative bg-[#0d081f]"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/*  Summary / Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { value: "200+", label: "Leetcode Questions Solved" },
          { value: "10+", label: "Projects Built" },
          { value: "200+", label: "Commits Made" },
          { value: "100%", label: "Passion for Learning" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 text-center py-8 rounded-xl shadow-md 
            hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-green-500 mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-300 text-base font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["all", "react", "full", "backend"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl cursor-pointer font-semibold transition-all duration-300 
              ${
                filter === cat
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-purple-700 hover:text-white"
              }`}
          >
            {cat === "all"
              ? "All"
              : cat === "full"
              ? "Fullstack"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border border-gray-800 bg-gray-900 rounded-2xl shadow-md 
             overflow-hidden cursor-pointer transform transition-all duration-500 
             hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-purple-400">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 pt-2 line-clamp-3 transition-colors duration-300 group-hover:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1 transition-colors duration-300 group-hover:bg-purple-600/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-full max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white cursor-pointer text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-[40%] w-[75%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
