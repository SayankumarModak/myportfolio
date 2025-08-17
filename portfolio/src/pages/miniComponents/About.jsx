import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="../../../public/DP_Modak.jpg"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[10deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] rotate-[0deg] text-xl gap-5">
            <p>
              I’m Sayan Kumar Modak, a recent B.Tech graduate in Electronics and
              Communication Engineering from RKMGEC with a CGPA of 8.10. As a
              Full-Stack Developer, I specialize in building scalable and
              efficient web applications using the MERN stack and I’m currently
              exploring Next.js to expand my expertise in modern web
              development.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          Beyond technology, I have a strong interest in reading storybooks, and
          traveling. I am known for being consistent and hardworking, with a
          proven ability to meet deadlines effectively. My dedication and
          perseverance form the foundation of my work ethic, and I maintain the
          resilience and courage to face challenges for extended periods while
          ensuring quality and timely delivery.
        </p>
      </div>
    </div>
  );
};

export default About;
