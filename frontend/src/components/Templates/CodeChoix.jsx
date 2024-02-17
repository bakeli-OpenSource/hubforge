import React from 'react'

export const CodeChoix = ({prixTemplate, condition1, condition2, TypeCode}) => {
  return (
    <div
      className={`border-b w-full border-gray-400 pe-6 flex justify-between items-center`}
    >
      <div className="flex items-center ms-4">
        <div
          className={`w-[20px] h-[20px] rounded-full border flex justify-center items-center border-gray-400 `}
        >
          <div
            className={`w-[12px] h-[12px]  rounded-full  ${
              condition1
            } `}
          ></div>
        </div>
        <h2
          className={`flex p-3  ${condition2}`}
        >
          {TypeCode}
        </h2>
      </div>

      {prixTemplate}
    </div>
  );
}
