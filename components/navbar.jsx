"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const navOptions = ["Home", "Team", "Gallery", "About"];
  const [mobNavOpen, setMobNavOpen] = useState(false);

  const handleMobNavToggle = () => {
    setMobNavOpen((prev) => !prev);
  };

  return (
    <nav className="flex flex-row items-center justify-between px-[4vw] py-[20px] bg-[#574900] bg-opacity-65 fixed z-50 w-[100vw] select-none">
      <img
        src="./CEST_Logo.svg"
        alt="CEST Club"
        className="select-none w-[70px]"
      />
      <div className="flex flex-row gap-[1vw] select-none max-[800px]:hidden">
        {navOptions.map((option, index) => (
          <div key={index} className="text-white font-semibold text-[2.3vh] cursor-pointer">
            {option}
          </div>
        ))}
      </div>
      {!mobNavOpen && (
        <FaBars
          size={25}
          color="white"
          className="min-[800px]:hidden cursor-pointer"
          onClick={handleMobNavToggle}
        />
      )}
      {mobNavOpen && (
        <div className="fixed right-0 top-0 h-[100dvh] w-[100vw] bg-[#574900] bg-opacity-65">
          <div
            className="text-white flex justify-end mt-[30px] mr-[3.4vw] "
            onClick={handleMobNavToggle}
          >
            <FaXmark size={31} color="white" />
          </div>

          <div className="flex flex-col gap-[1vh] select-none mt-10 content-center items-center">
            {navOptions.map((option, index) => (
              <div className="text-white font-semibold text-xl text-[2.3vh] cursor-pointer">
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
