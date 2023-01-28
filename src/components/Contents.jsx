import React from "react";
import styles from "../tailwind-styles.js";

const Contents = ({contents, color}) => {
  return (
    <div className={`${styles.menuSideBar} p-4 border-[2px] bg-slate-100 max-w-[300px]`}>
      {contents.map((item) => (
        <ul key={item.id} className={`text-softBlue py-2  ${color}`}>
          <li>
            <a href={`#${item.id}`} className="font-[500] text-[18px]">
              {item.title}
            </a>
          </li>
          <li>
            <ul className="pl-4 ">
              {item.content.map((subitem) => (
                <li key={subitem.id} className="pt-1">
                  <a href={`#${item.id}${subitem.id}`} className="nav">{subitem.content}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Contents;
