import React from 'react';
import title from '../Assests/Images/title.png';
export default function Subtitle() {
  return (
    <div>
      <div className="flex items-center justify-center mt-40 text-5xl font-sans font-bold">
        <h1>Zetspace</h1>
      </div>

      <p className="flex items-center justify-center ml-2 mt-2 text-2xl font-sans font-normal">
        Subtitle
      </p>

      <div className="flex items-center justify-center mt-44">
        <img src={title} alt="Title Image" className="w-[100%] h-[50vh]" />
      </div>
    </div>
  );
}
