import React, { useState } from "react";
import styles from "../tailwind-styles";
import { logo } from "../assets";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(true);

  return (
    <header className={`${styles.flexBetween} items-center`}>
      <div className=" w-[150px] h-[100px] cursor-pointer">
        <img
          src={logo}
          alt="logo"
          className="w-[100%] h-[100%] object-contain"
          onClick={() => {
            document.location.reload();
          }}
        />
      </div>
      <ul className="sm:flex hidden mr-8 text-[18px]  ">
        <li className="text-dimBlack mr-16 nav">
          <Link to="/" className="font-roboto nav active">
            Microsoft Team
          </Link>
        </li>
        <li className="text-dimBlack mr-16 nav">
          <Link to="/tiktok" className="font-roboto  font-[300] ">
            Tiktok
          </Link>
        </li>
      </ul>

      <div className="sm:hidden flex align-middle cursor-pointer">
        {toggle ? (
          <FaAlignJustify
            className={`${styles.iconNavbar}`}
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <FaTimes
            className={`${styles.iconNavbar}`}
            onClick={() => setToggle(!toggle)}
          />
        )}
        <div
          className={`sm:hidden ${
            toggle ? "hidden" : "flex"
          } p-6 bg-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" flex  flex-col items-start leading-10 ">
            <li className=" mr-16 nav ">
              <Link to="/" className="font-roboto nav active !text-white">
                Microsoft Team
              </Link>
            </li>
            <li className=" mr-16 nav">
              <Link to="/tiktok" className="font-roboto  font-[300] !text-white ">
                Tiktok
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
