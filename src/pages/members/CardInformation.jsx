import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuRefreshCcwDot } from "react-icons/lu";
import "./members.css";

const getFacultyColor = (faculty) => {
  switch (faculty) {
    case "FIEC":
      return "bg-[#7196ab]";

    case "FIMCP":
      return "bg-[#005ca6]";

    case "FCSH":
      return "bg-[#ffd400]";

    case "FCNM":
      return "bg-[#3e297b]";

    case "FADCOM":
      return "bg-[#d10073]";

    case "FIMCM":
      return "bg-[#00a7b4]";

    default:
      return "bg-black";
  }
};

const CardInformation = ({
  name,
  major,
  faculty,
  frase,
  imageUrl,
  socialLinks = {},
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { github, linkedin, twitter } = socialLinks || {};

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const facultyColor = getFacultyColor(faculty);

  return (
    <div
      className={`rounded-lg overflow-hidden bg-black flex flex-col justify-between transform transition-transform duration-500 ${
        isFlipped ? "rotate-y-180" : ""
      }`}
    >
      <div className="relative">
        {!isFlipped ? (
          <>
            <img
              src={imageUrl}
              alt={`${name}`}
              className="w-full object-cover"
            />
            <div
              className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full p-2 cursor-pointer"
              onClick={handleFlip}
            >
              <LuRefreshCcwDot className="w-4 h-4 text-gray-700" />
            </div>
          </>
        ) : (
          <div
            className={`flex items-center justify-center h-[500px] p-4 ${facultyColor}`}
          >
            <div
              className="absolute top-2 left-2 bg-white bg-opacity-70 rounded-full p-2 cursor-pointer"
              onClick={handleFlip}
            >
              <LuRefreshCcwDot className="w-4 h-4 text-gray-700 z-10" />
            </div>
            <div className="transform rotate-y-180 w-full">
              <h1 className="text-[25px] mx-5 mb-5 text-white -z-10">Frase:</h1>
              <p className="text-white text-lg inverted-text p-5">{frase}</p>
              <div className="flex justify-end">
                <div className="text-white">{faculty}</div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!isFlipped && (
        <>
          <div className={`p-4 text-center flex-grow ${facultyColor}`}>
            <h2
              style={{ fontSize: "1.28rem" }}
              className="font-semibold text-white"
            >
              {name}
            </h2>
            <p className="text-md text-gray-100">{major}</p>
          </div>
          {(linkedin || twitter || github) && (
            <div className="flex justify-around bg-white p-4 mt-auto">
              {linkedin && (
                <a
                  href={linkedin || "#"}
                  target={linkedin ? "_blank" : "_self"}
                  rel={linkedin ? "noopener noreferrer" : undefined}
                  className="text-blue-700"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              )}

              {twitter && (
                <a
                  href={twitter || "#"}
                  target={twitter ? "_blank" : "_self"}
                  rel={twitter ? "noopener noreferrer" : undefined}
                  className="text-blue-400"
                >
                  <FaSquareXTwitter className="w-6 h-6" />
                </a>
              )}

              {github && (
                <a
                  href={github || "#"}
                  target={github ? "_blank" : "_self"}
                  rel={github ? "noopener noreferrer" : undefined}
                  className="text-gray-900"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CardInformation;
