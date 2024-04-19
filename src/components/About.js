import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold ">
              <p>
                Hi, I'am Suryakant, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
              <p className="text-justify">
                Skilled web developer with expertise in front-end technologies.
                Proficient in HTML, CSS, and JavaScript, with experience in
                modern frameworks such as React. Proven track record of
                delivering high-quality, responsive web applications that meet
                client requirements and enhance user experience. Strong
                problem-solving abilities and a commitment to staying updated
                with the latest industry trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
