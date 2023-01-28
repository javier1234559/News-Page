import React from "react";
import styles from "../tailwind-styles";

const List = ({children,customclass}) => {
  return <li className={`list-none ${styles.paragraph} mt-4 ${customclass} `} >
    {children}
  </li>;    
};

export default List;
