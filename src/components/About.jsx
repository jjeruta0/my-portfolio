import React from "react";
import AboutMePhoto from "../assets/home-bg-photo.jpg";

function About() {
  return (
    <div className="bg-stone-800 text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutMePhoto}
            alt=""
            className="w-72 h-80 object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              Motivated and adaptable software developer with 2 years of
              hands-on experience in creating innovative solutions, seeking to
              leverage my technical and problem-solving skills in a new and
              challenging career path. Always willing to learn and grow,
              dedicated to continuous improvement, and committed to delivering
              value through creative and effective contributions to achieve
              organizational goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  UI/UX Designing
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
              <div className="mt-12 flex justify-between text-center">
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-500">
                    2+
                  </h3>
                  <p>years of experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-500">
                    2+ years
                  </h3>
                  <p>Web development</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-500">
                    Half year
                  </h3>
                  <p>Mobile Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
