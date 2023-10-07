import React from "react";

type Props = {};

const Funfacts = (props: Props) => {
  return (
    <div className="w-[939px] h-[264px] flex-shrink-0 absolute top-[1153px] left-[171px]">
      <div className="inline-flex items-start w-[251px] h-[42px]">
        <span className="font-sans leading-normal text-purple-400 text-3xl not-italic font-medium">
          #
        </span>
        <span className="font-sans leading-normal text-white text-3xl not-italic font-medium">
          my-fun-facts
        </span>
      </div>
      <div className="absolute left-0 top-[68px] w-[755px] h-[196px] inline-flex flex-col items-start gap-4">
        <div className="flex items-start gap-4">
          <div className="w-[420px] h-10 flex items-start p-2 gap-4 border border-solid border-gray-500">
            <span className="text-gray-500 font-sans text-base font-normal not-italic leading-normal">
              I love to read books, especially fiction
            </span>
          </div>
          <div className=" w-[320px] h-10 flex p-2 items-start gap-[10px] border border-solid border-gray-500 ">
            <span className="text-gray-500 font-sans text-base font-normal not-italic leading-normal">
              Cooking tends to clear my mind
            </span>
          </div>
        </div>
        <div className="w-[412px] h-10 flex p-2 items-start gap-[10px] border border-solid border-gray-500">
          <span className="text-gray-500 font-sans text-base font-normal not-italic leading-normal">
            I play the piano and sing in the choir
          </span>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-[412px] h-10 flex p-2 items-start gap-[10px] border border-solid border-gray-500">
            <span className="text-gray-500 font-sans text-base font-normal not-italic leading-normal">
              I also play guitar and the saxophone
            </span>
          </div>
          <div className="w-[322px] h-10 flex p-2 items-start gap-[10px] border border-solid border-gray-500">
            <span className="text-gray-500 font-sans text-base font-normal not-italic leading-normal">
              I play football on the weekends
            </span>
          </div>
        </div>
        <div className="w-[422px] h-16 flex p-2 items-start gap-[10px] border border-solid border-gray-500">
          <span className="text-gray-500 font-sans text-base font-normal not-italic leading-normal">
            Amadeus Mozart and Christopher Tin are my favourite composers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Funfacts;
