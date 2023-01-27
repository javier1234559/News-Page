import React from "react";

const Title = ({ children, customclass }) => {
  return (
    <h1
      className={`text-primary text-[50px] leading-[60px] lg:leading-[45px]  py-8 font-semibold ${customclass}`}
    >
      {children}
    </h1>
  );
};

export default Title;
