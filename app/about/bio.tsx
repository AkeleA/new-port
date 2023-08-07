import React from "react";

type Props = {};

const AkeleProf = (props: Props) => {
  return (
    <div className="absolute w-[1033px] h-[593px] top-[117px] left-[171px]">
      <div className="w-[174px] h-[77px] flex-shrink-0">
        <h2 className="w-[174px] h-[42px] inline-flex items-start">
          <span className="font-sans text-purple-400 text-3xl not-italic font-semibold leading-0">
            /
          </span>
          <span className="text-white font-sans text-3xl not-italic font-semibold leading-0">
            about-me
          </span>
        </h2>
        <p className="text-white font-sans mt-3.5 not-italic text-base font-normal leading-normal">
          Who am I?
        </p>
      </div>
      <div className="mt-2 w-[1028px] h-[508px] flex-shrink-0">
        <p className="absolute w-[515px] top-[189px] font-sans text-base not-italic font-normal leading-6 text-gray-500">
          Hello, I’m Akele! I’m a self-taught front-end developer based in
          Lagos, Nigeria. I can develop responsive websites into modern
          user-friendly web experiences. Transforming my creativity and
          knowledge into a websites has been my passion for over 3 years. I
          always strive to learn about the newest technologies and frameworks.
        </p>
      </div>
    </div>
  );
};

export default AkeleProf;
