import React from "react";
import styles from "../tailwind-styles";
import {FaFacebook ,FaDiscord,FaLinkedin,FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full bg-primary mt-20 ">
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.container}`}>
          <div className="flex  w-full justify-between py-8 text-white border-t-[#3F3E45] items-center md:flex-row flex-col pt-6 border-t-[1px]">
            <h1 className=" flex-1 font-poppins font-normal text-[18px]">
              Copyright Ⓒ 2023 Javier From Better Me.
            </h1>
            <div className="flex pt-4 md:pt-0  ">
                <a href="https://facebook.com" ><FaFacebook className="ml-4" /></a>
                <a href="https://discord.com/" ><FaDiscord className="ml-4" /></a>
                <a href="https://www.linkedin.com/" ><FaLinkedin className="ml-4" /></a>
                <a href="https://github.com/javier1234559/News-Page" ><FaGithub className="ml-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
