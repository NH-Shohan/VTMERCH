import Image from "next/image";
import { useState } from "react";
import logo from "/public/assets/logo/logo_white.svg";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => setNavOpen(true);
  const handleNavClose = () => setNavOpen(false);

  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          className="aspect-square h-[6.5vw] w-auto"
          src={logo}
          alt="logo"
          width={115}
          height={115}
        />
        <h3 className="font-semibold sm:font-semibol md:font-bold lg:font-extrabold text-[5.8vw] tracking-widest sm:tracking-widest md:tracking-[12px] leading-none">
          VTMERCH
        </h3>
      </div>

      <button
        className="group scale-50 sm:scale-50 md:scale-75 xl:scale-100"
        onMouseEnter={handleNavOpen}
        onMouseLeave={handleNavClose}
      >
        <div className="grid justify-items-center gap-3">
          <span className="h-1 w-12 rounded-full bg-white transition duration-300 group-hover:rotate-45 group-hover:translate-y-[22px]"></span>
          <span className="h-1 w-12 rounded-full bg-white group-hover:scale-x-0 transition duration-300"></span>
          <span className="h-1 w-12 rounded-full bg-white transition duration-300 group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
        </div>
      </button>

      <div
        className={`absolute top-0 right-0 w-full bg-white text-primary shadow-2xl z-50 transition-all duration-500 rounded-b-3xl grid place-content-center ${
          navOpen ? "h-[50vh]" : "h-0"
        } overflow-hidden`}
        onMouseEnter={handleNavOpen}
        onMouseLeave={handleNavClose}
      >
        <p
          className={`font-[family-name:var(--font-act-of-rejection)] text-9xl transition-all duration-500 pointer-events-none ${
            navOpen ? "scale-100" : "scale-50"
          }`}
        >
          Comming Soon
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
