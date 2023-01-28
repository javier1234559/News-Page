import React from "react";

const Title = ({ children, customclass }) => {
  return (
    <h1
      className={`text-primary md:text-[50px] text-[45px] leading-[65px] lg:leading-[60px]  py-8 font-semibold ${customclass}`}
    >
      {children}
    </h1>
  );
};

export default Title;
