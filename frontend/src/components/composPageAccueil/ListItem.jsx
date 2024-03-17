import React from "react";

export const Li = ({ key, content, isActive, onClick }) => (
  <li
    key={key}
    className={`max-sm:text-sm cursor-pointer hover:bg-blc p-2 px-3 rounded-3xl ${isActive ? "text-bl font-bold bg-[#ffffff]" : "text-mr"}`}
    onClick={onClick}
  >
    {content}
  </li>
);
