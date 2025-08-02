import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import LoginPopUp from "./Modal/LoginPopUp";

function SearchPage() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLogin = () => {
    setShowLoginPopup(true);
  };
  const handleClosePopUp = () => {
    setShowLoginPopup(false);
  };
  return (
    <div className="flex flex-row justify-between">
      <div className="inline-flex w-full justify-between gap-x-3 rounded-md bg-black opacity-60 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm">
        <label className="flex flex-col  text-sm font-medium text-gray-500">
          I'm looking for
          <select className="mt-1 text-black px-3 py-2 rounded border">
            Options
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
            <option>Women</option>
            <option>Men</option>
          </select>
        </label>
        <label className="flex flex-col  text-sm font-medium text-gray-500">
          aged
          <select className="mt-1 text-black px-3 py-2 rounded border">
            Options
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
            <option>20-25</option>
            <option>26-30</option>
            <option>31-35</option>
            <option>35-40</option>
            <option>41-45</option>
            <option>46-50</option>
            <option>51-60</option>
          </select>
        </label>
        <label className="flex flex-col  text-sm font-medium text-gray-500">
          of religion
          <select className="mt-1 text-black px-3 py-2 rounded border">
            Options
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
            <option>select</option>
            <option>Hindu</option>
            <option>Muslim</option>
            <option>Christian</option>
            <option>Jain</option>
            <option>Sikh</option>
            <option>Parsi</option>
            <option>Jain</option>
            <option>Buddhist</option>
            <option>Spiritual</option>
            <option>other</option>
          </select>
        </label>
        <label className="flex flex-col whitespace-nowrap text-sm font-medium text-gray-500">
          and mother tongue
          <select className="mt-1 text-black px-3 py-2 rounded border">
            Options
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
            <option>select</option>
            <option>Bengali</option>
            <option>Hindi</option>
            <option>Punjabi</option>
            <option>Odia</option>
            <option>Kannada</option>
            <option>Tamil</option>
            <option>Telegu</option>
            <option>Malayali</option>
            <option>Assamese</option>
            <option>Rajasthani</option>
          </select>
        </label>
        <button
          className="bg-pink-400 text-white rounded-lg px-3 py-2 text-2xl hover:bg-pink-500 m-4"
          onClick={handleLogin}
        >
          Get Started
        </button>
        {/* <LoginPopUp /> */}
        {showLoginPopup && (
          <div className="">
            {/* <button onClick={handleClosePopUp}>close</button> */}
            <LoginPopUp onClose={handleClosePopUp} visible={showLoginPopup} />
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
