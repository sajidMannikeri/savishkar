import React from "react";
import video from "../assets/vid.mp4";

const Hero = ({ toggle }) => {
  return (
    <section className="w-full h-full mt-10">
      <div
        className={`flex flex-col items-center content relative ${
          toggle ? "-z-10" : ""
        }`}
      >
        <h1 className="text-8xl text-white hero-text ">Savishkar</h1>
        {/* <h1 className="text-8xl text-white hero-text absolute">Savishkar</h1> */}
      </div>
      <div className="flex flex-col items-center mt-24 w-[75%] mx-auto">
        <p className="text-4xl text-white py-4 hero-text">2k23-24</p>
        <p className="text-2xl text-white text-center py-4 description">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          minus perspiciatis debitis omnis atque consequuntur doloremque facere,
          quaerat corporis inventore ea iusto est necessitatibus excepturi,
          minima odio, soluta fugiat quia accusantium obcaecati.
        </p>
      </div>
    </section>
  );
};

export default Hero;
