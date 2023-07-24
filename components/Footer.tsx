import React from "react";
import Image from "next/image";
import { SiGithub, SiDiscord, SiGmail } from "react-icons/si";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col items-center pt-0 pr-0 pb-8 gap-8 absolute w-full h-[208px] top-[2984px]">
      <span className="w-full h-0 border border-solid border-gray-500 flex-none order-0 flex-grow-0"></span>
      <div className="flex flex-col items-center p-0 gap-12 w-[1025px] h-36 flex-none order-1 flex-grow-0">
        <div className="flex flex-row justify-between items-start p-0 gap-[437px] w-[1025px] h-[75px] flex-none order-0 flex-grow-0">
          <div className="flex flex-col items-start p-0 gap-4 w-[346px] h-[58px] flex-none order-0 flex-grow-0">
            <h2 className="flex flex-row items-center p-0 gap-6 w-[346px] h-[21px] flex-none order-0 self-stretch flex-grow-0">
              <span className="flex flex-row items-center p-0 gap-[9px] w-[73px] h-[21px] flex-none order-0 flex-grow-0">
                <span className="w-12 h-[21px] font-sans not-italic font-medium text-base leading-5 text-white flex-none order-1 flex-grow-0">
                  AKELE
                </span>
              </span>
              <span className="w-[173px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0 ">
                achorisaac@gmail.com
              </span>
            </h2>
            <p className="w-[346px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-white flex-none order-1 flex-grow-0">
              Front-end Developer
            </p>
          </div>
          <div className="flex flex-col items-start p-0 gap-3 w-[112px] h-[75px] flex-none order-1 flex-grow-0">
            <h2 className="w-[72px] h-[31px] font-sans not-italic font-medium text-2xl leading-8 text-white flex-none order-none flex-grow-0">
              Media
            </h2>
            <div className="flex flex-row gap-2 items-start justify-between w-[112px] h-8 flex-none order-1 flex-grow-0">
              <a href="https://discord.com/channels/@aia0526" target="_blank">
                <SiDiscord size={32} className="text-gray-500 cursor-pointer" />
              </a>
              <a href="https://github.com/AkeleA" target="_blank">
                <SiGithub size={32} className="text-gray-500 cursor-pointer" />
              </a>
              <a href="mailto:achorisaac@gmail.com">
                <SiGmail size={32} className="text-gray-500 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <p className="w-[900px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
          &#169; Copyright 2023. Developed by Akele. Designed by{" "}
          <a href="elias-dev.ml" className="">
            Elias
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
