import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuRefreshCcwDot } from "react-icons/lu";

const CardInformation = ({ name, major, imageUrl, socialLinks = {} }) => {
  const { github, linkedin, twitter } = socialLinks[0] || {};

  return (
    <div className="w-64 rounded-lg border-4 border-white border-opacity-60 overflow-hidden bg-white shadow-lg flex flex-col justify-between">
      <div className="relative">
        <img
          src={imageUrl}
          alt={`${name}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full p-2">
          <LuRefreshCcwDot className="w-4 h-4 text-gray-700" />
        </div>
      </div>
      <div className="p-4 text-center bg-gray-100 flex-grow">
        <h3 className="text-lg font-semibold text-black">{name}</h3>
        <p className="text-gray-500">{major}</p>
      </div>
      <div className="flex justify-around bg-white p-4 mt-auto">
        <a
          href={linkedin || "#"}
          target={linkedin ? "_blank" : "_self"}
          rel={linkedin ? "noopener noreferrer" : undefined}
          className="text-blue-700"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href={twitter || "#"}
          target={twitter ? "_blank" : "_self"}
          rel={twitter ? "noopener noreferrer" : undefined}
          className="text-blue-400"
        >
          <FaSquareXTwitter className="w-6 h-6" />
        </a>
        <a
          href={github || "#"}
          target={github ? "_blank" : "_self"}
          rel={github ? "noopener noreferrer" : undefined}
          className="text-gray-900"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default CardInformation;
