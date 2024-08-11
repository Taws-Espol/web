import React from "react";

export default function Goal({ logo, text, index }) {
  const image = (
    <div>
      <img src={logo} alt={`logo ${index}`} className="max-w-20 aspect-auto" />
    </div>
  );
  const textP = <p className="text-white mx-4">{text}</p>;

  return (
    <div className="flex flew-row p-4">
      {index % 2 === 0 ? (
        <>
          {image} {textP}
        </>
      ) : (
        <>
          {textP} {image}
        </>
      )}
    </div>
  );
}
