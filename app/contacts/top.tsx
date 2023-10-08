import React from "react";

type Props = {};

const Top = (props: Props) => {
  return (
    <div className="absolute top-[114px] left-[171px] w-[174px] h-[77px] flex-shrink-0">
      <h2 className="inline-flex items-start">
        <span className="text-purple-400 font-sans text-3xl not-italic font-semibold">
          /
        </span>
        <span className="text-white font-sans text-3xl not-italic font-semibold">
          contacts
        </span>
      </h2>
      <p className="mt-[14px] text-white font-sans text-base not-italic font-normal leading-normal">
        Who am I?
      </p>
    </div>
  );
};

export default Top;
