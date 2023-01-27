import React from "react";
import styles from "../tailwind-styles";
import {logo} from "../assets"

const Header = () => {
  return (
    <div className={`${styles.flexBetween} items-center`}>
      <div className=" w-[150px] h-[100px] ">
        <img src={logo} alt="logo" className="w-[100%] h-[100%] object-contain" />
      </div>
      <ul className="md:flex hidden mr-8 text-[18px]  ">
        <li className="text-dimBlack mr-16 nav">
          <a href="#chuong1" className="font-roboto nav active" >Chương 1</a>
        </li>
        <li className="text-dimBlack mr-16 nav">
          <a href="#chuong2" className="font-roboto  font-[300] ">Chương 2 </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
