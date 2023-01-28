import React from "react";
import contents from "../constants/data.js";

const Contents = () => {
  return (
    <div className="p-8 border-[2px] bg-slate-100 max-w-[400px] ">
      {contents.map((item) => (
        <ul key={item.id} className={"text-softBlue py-2 "}>
          <a href={`#${item.id}`} className="font-[500] text-[18px]">
            {item.title}
          </a>
          <ul className="pl-4 ">
            {item.content.map((subitem) => (
              <li key={subitem.id} className="pt-1">
                <a href={`#${item.id}${subitem.id}`} className="nav">{subitem.content}</a>
              </li>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  );
};

export default Contents;
