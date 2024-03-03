import React from "react";
import { HubForgeHeader } from "./HubForgeHeader";

export const TitrePage = ({ Effect }) => {
  return (
    <div>
      <HubForgeHeader
        TitrePage={
          <h1
            className={`policeTitre text-center text-6xl max-sm:text-3xl font-[800] 
                leading-[70px] max-sm:leading-[45px]  max-sm:tracking-wider  ${Effect}`}
          >
            Transformez votre <br />
            <span>vision en réalité </span> <br />
            <span>simplement</span>
          </h1>
        }
      />
    </div>
  );
};
