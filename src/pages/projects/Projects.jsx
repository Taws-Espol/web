import React from "react";
import "./projects.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Projects = () => {
  return (
    <div className="Projects bg-taws">
      <div className="Contenedor w-10/12 mx-auto">
        <Navbar item="proyectos" />
        <div className="flex flex-col items-center py-3" />
        <h2 className="text-center text-4xl xl:text-5xl text-white py-6">
          Proyectos
        </h2>
        <div className="cards overflow-auto scrollbar scrollbar-thumb-blue scrollbar-thumb-gray-100 scrollbar-track-gray-100">
          <div id="card" className="">
            <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
              <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                <div className="h-64 w-auto md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-cover object-center"
                    src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                  />
                </div>
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h3 className="font-semibold text-lg leading-tight truncate">
                    eact tailwind horizontal card image
                  </h3>
                  <p className="mt-2">
                    react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content.
                  </p>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                <div className="h-64 w-auto md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-cover object-center"
                    src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                  />
                </div>
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h3 className="font-semibold text-lg leading-tight truncate">
                    eact tailwind horizontal card image
                  </h3>
                  <p className="mt-2">
                    react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content.
                  </p>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                <div className="h-64 w-auto md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-cover object-center"
                    src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                  />
                </div>
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h3 className="font-semibold text-lg leading-tight truncate">
                    eact tailwind horizontal card image
                  </h3>
                  <p className="mt-2">
                    react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content.
                  </p>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Projects;
