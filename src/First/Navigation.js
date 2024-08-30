import React from 'react';
import Subtitle from '../First/Subtitle';

export default function Navigation() {
  return (
    <div>
      <div className="flex w-full h-24 items-center justify-center bg-green-300">
        <ul className="flex space-x-8 -mt-1 w-2 ml-40">
          <li>Solutions</li>
          <li>Community</li>
          <li>Resources</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="flex justify-end mr-7 -mt-16 space-x-4">
        <button className="bg-white text-black px-4 py-1 rounded-lg">
          Sign in
        </button>
        <button className="bg-black text-white px-3 py-1 rounded-lg">
          Register
        </button>
      </div>

      <Subtitle></Subtitle>
    </div>
  );
}
