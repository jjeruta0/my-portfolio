import React from "react";
import HomeImage from "../assets/home-bg-2.jpg";

function Home() {
  return (
    <div className="bg-stone-800 text-white text-center py-16">
      <img
        src={HomeImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400">
          Joshua Jeruta
        </span>
      </h1>
      <h1 className="text-4xl font-bold">
        Creative Frontend Developer & UI Designer Crafting Intuitive,
      </h1>
      <h1 className="text-4xl font-bold">Responsive Web Experiences</h1>
      <p className="mt-4 text-lg text-gray-200">
        I specialize in developing websites, enhancing existing ones, and
        creating seamless UI designs.
      </p>
      <div className="mt-8 space-x-4">
        <a href="#contact">
          <button className="bg-gradient-to-r from-emerald-400 to-sky-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Contact With Me
          </button>
        </a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-400 to-emerald-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Resume/CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
