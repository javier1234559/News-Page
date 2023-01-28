import React from "react";

const Heading = ({ children, customclass }) => {
  return (
    <h2
      className={`my-10 md:text-[38px] text-[30px] leading-[50px] font-semibold  ${customclass}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
