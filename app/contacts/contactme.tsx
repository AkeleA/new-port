import React from "react";
import Link from "next/link";
import { SiDiscord, SiGmail } from "react-icons/si";

type Props = {};

const Contactme = (props: Props) => {
  return (
    <div className="w-[1061px] h-[141px] flex-shrink-0 flex flex-row gap-[117px] absolute top-[237px] left-[171px]">
      <div className="w-[505px] h-[78px] flex-shrink-0">
        <p className="text-gray-500 text-base not-italic font-medium leading-6 font-sans">
          I’m interested in freelance opportunities. However, if you have other
          request or question, do not hesitate to contact me
        </p>
      </div>
      <div className="w-[439px] h-[141px] flex-shrink-0 flex flex-row gap-[11px]">
        <div className="inline-flex p-4 flex-col items-start gap-2 border border-solid border-gray-400 w-[154px] h-24">
          <p className="text-white font-sans text-base not-italic font-medium leading-normal">
            My github
          </p>
          <Link legacyBehavior href="https://github.com/AkeleA" passHref>
            <a
              target="_blank"
              className="text-white font-sans text-base not-italic font-medium leading-normal"
            >
              {" "}
              My GitHub
            </a>
          </Link>
        </div>
        <div className="inline-flex p-4 flex-col items-start gap-4 w-[260px] h-[149px] border border-solid border-gray-400">
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
            <p className="flex flex-row items-center p-0 gap-[5px] w-[143px] h-8 flex-none order-0 flex-grow-0">
              <span className="w-8 h-8 flex-none order-0 flex-grow-0">
                <SiGmail size={32} className="text-gray-500" />
              </span>
              <span className="w-[106px] h-[21px] font-sans not-italic font-normal text-base leading-[21px] text-gray-500 flex-none order-1 flex-grow-0">
                achorisaac@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
