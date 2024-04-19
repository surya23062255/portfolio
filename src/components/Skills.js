import React from "react";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Skill Heading */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        {/* Skill Icons */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="./assets/img/html.png"
              alt="html"
            />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="./assets/img/css.png"
              alt="html"
            />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="./assets/img/javascript.png"
              alt="html"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="./assets/img/react.png"
              alt="html"
            />
            <p className="my-4">React JS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="./assets/img/node.png"
              alt="html"
            />
            <p className="my-4">Node JS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="./assets/img/github.png"
              alt="html"
            />
            <p className="my-4">Git Hub</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="./assets/img/tailwind.png"
              alt="html"
            />
            <p className="my-4">Tailwind CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="./assets/img/bootstrap.png"
              alt="html"
            />
            <p className="my-4">Bootstrap</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
