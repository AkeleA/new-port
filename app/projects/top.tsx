import React from "react";

type Props = {};

const Top = (props: Props) => {
  return (
    <div className="absolute flex flex-col gap-[14px] left-[171px] top-[114px]  w-[183px] h-[77px] flex-shrink-0">
      <h2 className="left-[174px] h-[42px] inline-flex items-start">
        <span className="text-purple-400 leading-normal text-3xl not-italic font-semibold">
          /
        </span>
        <span className="font-sans text-3xl not-italic font-semibold leading-normal text-white">
          projects
        </span>
      </h2>
      <p className="text-white font-sans text-base not-italic font-normal leading-normal">
        List of my projects
      </p>
    </div>
  );
};

export default Top;
