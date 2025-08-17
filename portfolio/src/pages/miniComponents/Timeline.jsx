import axios from "axios";
import { useEffect, useState } from "react";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const getMyTimeline = async () => {
      const { data } = await axios.get(
        "https://sayanportfolio.onrender.com/api/v1/timeline/getall",
        { withCredentials: true }
      );
      setTimeline(data.timelines);
    };
    getMyTimeline();
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-full gap-4 mb-8">
          <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-purple-500"></div>
          <h1 className="relative text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-extrabold bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent tracking-wider whitespace-nowrap px-6 animate-tubelight text-white">
            TIMELINE
            <style jsx>{`
              @keyframes tubelight {
                0% {
                  background-position: -200% 0;
                  text-shadow: 0 0 5px rgba(255, 255, 255, 0.6),
                    0 0 10px rgba(236, 72, 153, 0.4);
                }
                50% {
                  background-position: 200% 0;
                  text-shadow: 0 0 20px rgba(236, 72, 153, 0.9),
                    0 0 40px rgba(168, 85, 247, 0.8);
                }
                100% {
                  background-position: -200% 0;
                  text-shadow: 0 0 5px rgba(255, 255, 255, 0.6),
                    0 0 10px rgba(236, 72, 153, 0.4);
                }
              }
              .animate-tubelight {
                background-size: 200% auto;
                animation: tubelight 3s linear infinite;
              }
            `}</style>
          </h1>

          <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-purple-500 to-purple-500"></div>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My journey through education and professional experiences
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline &&
              timeline.map((element, index) => (
                <div
                  key={element._id}
                  className="relative group"
                  style={{
                    animation: `fadeInUp 0.8s ease-out both`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-6 h-6 -translate-x-1/2">
                    <div className="relative">
                      {/* Outer Ring */}
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                      {/* Inner Dot */}
                      <div className="absolute inset-2 bg-slate-900 rounded-full"></div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-16 relative">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group-hover:transform group-hover:scale-105 shadow-2xl">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                          {element.title}
                        </h3>

                        {/* Date Range */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                            <svg
                              className="w-4 h-4 text-purple-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                            <time className="text-sm font-semibold text-purple-300">
                              {element.timeline.from} -{" "}
                              {element.timeline.to
                                ? element.timeline.to
                                : "Present"}
                            </time>
                            {!element.timeline.to && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                                Current
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                          {element.description}
                        </p>

                        {/* Decorative Element */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Connection Line to Dot */}
                    <div className="absolute left-0 top-6 w-4 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span className="text-purple-300 text-sm font-medium">
            Journey Continues...
          </span>
        </div>
      </div>
    </div>
  );
};

// Add this CSS to your stylesheet
const timelineStyles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

export default Timeline;
