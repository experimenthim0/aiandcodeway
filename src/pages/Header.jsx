import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - winHeight;

      const percent = (scrollY / totalScrollable) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="w-full h-1 fixed">
        <div
          className="h-1 bg-amber-400  transition-all duration-100"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>
      <div className="bg-black flex justify-around flex-row w-screen h-15 items-center">
        <div className="text-4xl font-Montserrat font-semibold ">
          Ai<span className="text-blue-500 text-2xl">&</span>Code Way
        </div>
        <div className="flex flex-row gap-2 text-white">
          <ul className=" gap-6 flex-row text-[18px] cursor-pointer hidden sm:flex">
            {/* <li className="hover:text-yellow-500">
              <a href="#home">Home</a>
            </li> */}

            <li className="hover:text-yellow-500">
              <a href="#aitools">AI Tools</a>
            </li>
            <li className="hover:text-yellow-500">
              <a href="#webtools">WebTools</a>
            </li>
            <li className="hover:text-yellow-500">
              {" "}
              <a href="#resources">Resources</a>
            </li>
            <li className="hover:text-yellow-500">
              {" "}
              <Link to="/indistartups">IndiStartups</Link>
            </li>
             <li className="hover:text-yellow-500">
              {" "}
              <Link to="/promptdirectory">Prompt Directory</Link>
            </li>
          </ul>

          <span
            className="text-3xl block sm:hidden cursor-pointer"
            onClick={handleMenuClick}
          >
            =
          </span>
        </div>
        <div
          id="menu"
          className={`${menuOpen ? "block" : "hidden"}  sm:hidden`}
        >
          <ul className="flex cursor-pointer gap-6 text-xl  flex-col justify-center items-center absolute top-16 right-8 bg-black p-4 rounded-md">
            {/* <li className="hover:text-yellow-500">
              <a href="#home">Home</a>
            </li> */}

            <li className="hover:text-yellow-500">
              <a href="#aitools">AI Tools</a>
            </li>
            <li className="hover:text-yellow-500">
              <a href="#webtools">WebTools</a>
            </li>
            <li className="hover:text-yellow-500">
              {" "}
              <a href="#resources">Resources</a>
            </li>
            <li className="hover:text-yellow-500">
              {" "}
              <Link to="/indistartups">IndiStartups</Link>
            </li>
            <li className="hover:text-yellow-500">
              {" "}
              <Link to="/promptdirectory">Prompt Directory</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
