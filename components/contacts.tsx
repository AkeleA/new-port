import React from "react";
import { SiDiscord, SiGmail } from "react-icons/si";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div className="absolute w-[1023px] h-[228px] left-[170px] top-[2611px]">
      <h2 className="flex flex-row items-center p-0 gap-4 absolute w-[317px] h-[42px] left-0 top-0">
        <h3>
          <span className="w-5 h-[42px] font-sans not-italic font-medium text-3xl leading-[42px] text-purple-400 flex-none order-none flex-grow-0">
            #
          </span>
          <span className="w-[154px] h-[42px] font-sans not-italic font-medium text-3xl leading-[42px] text-white flex-none order-1 flex-grow-0">
            contacts
          </span>
        </h3>
        <span className="w-[127px] h-px bg-purple-400 flex-none order-1 flex-grow" />
      </h2>
      <div className="absolute w-[505px] h-[63px] left-0 top-[87px]">
        <p className="absolute w-full h-[63px] left-0 top-0 font-sans not-italic font-medium text-base leading-5 text-gray-500">
          I am interested in exploring any opportunities or positions. If you
          have any other requests or questions, please do not hesitate to
          contact me.
        </p>
      </div>
      <div className="absolute w-[204px] h-[141px] left-[819px] top-[87px]">
        <span className="box-border flex flex-col items-start p-4 gap-4 absolute w-[204px] h-[141px] left-0 top-0 border border-solid border-gray-500">
          <h2 className="w-[164px] h-[21px] font-sans not-italic font-semibold text-base leading-[21px] text-white flex-none order-none flex-grow-0">
            {" "}
            Message me here!
          </h2>
          <div className="flex flex-col items-start p-0 gap-2 w-[172px] flex-none order-1 flex-grow-0">
            <p className="flex flex-row items-center p-0 gap-[5px] w-[143px] h-8 flex-none order-0 flex-grow-0">
              <span className="w-8 h-8 flex-none order-0 flex-grow-0">
                <SiDiscord size={32} className="text-gray-500" />
              </span>
              <span className="w-[106px] h-[21px] font-sans not-italic font-normal text-base leading-[21px] text-gray-500 flex-none order-1 flex-grow-0">
                aia#0526
              </span>
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Contacts;
