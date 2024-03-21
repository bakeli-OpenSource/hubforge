import React from "react";

const MonBouton = ({
  id,
  couleurFond,
  bordure,
  icone,
  action,
  textColor,
  children,
}) => {
  return (
    <button
      className={` text-center font-medium whitespace-nowrap justify-center items-center ${couleurFond} ${bordure} ${textColor} flex`}
      type="button"
      onClick={action}
      id={id}
    >
      {icone && <span className="me-2 text-[30px]">{icone}</span>}
      {children}
    </button>
  );
};

export default MonBouton;
