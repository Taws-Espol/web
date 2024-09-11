import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
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

const getFacultyTextColor = (faculty) => {
  switch (faculty) {
    case "FIEC":
      return "text-[#fff]";

    case "FIMCP":
      return "text-[#fff]";

    case "FCSH":
      return "text-[#000]";

    case "FCNM":
      return "text-[#fff]";

    case "FADCOM":
      return "text-[#fff]";

    case "FIMCM":
      return "text-[#fff]";

    default:
      return "bg-black";
  }
};

const CardInformation = ({
  name,
  major,
  faculty,
  imageUrl,
  socialLinks = {},
}) => {
  const { github, linkedin, twitter } = socialLinks || {};

  const facultyColor = getFacultyColor(faculty);

  const facultyTextColor = getFacultyTextColor(faculty);

  return (
    <div
      className={`rounded-lg overflow-hidden bg-black flex flex-col justify-between transform transition-transform duration-500}`}
    >
      <>
        <div className={`p-4 text-center flex-grow ${facultyColor}`}>
          <img src={imageUrl} alt={name} className="p-2 rounded-xl" />
          <h2
            className={`text-black font-black text-[29px] p-2 ${facultyTextColor}`}
          >
            {name}
          </h2>
          <p
            className={`text-md text-gray-100 text-[20px] font-bold opacity-70 ${facultyTextColor}`}
          >
            {major}
          </p>
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
    </div>
  );
};

export default CardInformation;
