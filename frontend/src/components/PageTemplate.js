import React from 'react'
import EnsembleTemp2 from './TemplateNum2/EnsembleTemp2'
import ChompRestaurant from "../components/pageTemplate2/ChompRestaurant";

export const PageTemplate = () => {
  return (
    <div>
      {/*  */}
      <ChompRestaurant/>
    </div>
  );
}
export const PageTemplate2 = () => {
  return (
    <div>
      <p className="text-center mt-[20%] text-4xl text-red-700 font-bold">
        Mariama tu REND ton deuxième template ICI Dans PageTemplate2
      </p>
    </div>
  );
};
