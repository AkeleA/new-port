import React from "react";
import Image from "next/image";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="absolute w-[1024px] h-[365px] left-[173px] top-[1314px]">
      <div className="flex flex-row items-center p-0 gap-4 absolute w-[391px] h-[42px] left-0 top-0">
        <h2 className="flex flex-row items-start p-0 w-[136px] h-[42px] flex-none order-0 flex-grow-0">
          <span className="w-5 h-[42px] font-sans not-italic font-medium text-3xl leading-[42px] text-purple-400 flex-none order-none flex-grow-0">
            #
          </span>
          <span className="w-32 h-10 font-sans not-italic font-medium text-3xl leading-[42px] text-white flex-none order-1 flex-grow-0">
            skills
          </span>
        </h2>
        <span className="w-[239px] h-px bg-purple-400 flex-none order-1 flex-grow" />
        <div className="absolute w-[394px] h-[282px] left-8 top-[54px]">
          <div className="flex flex-col justify-between items-start p-0 gap-2 absolute w-[63px] h-[63px] left-0 top-[38px]">
            <Image src="/dot1.png" alt="dots 1" width={63} height={4} />
            <Image src="/dot2.png" alt="dots 1" width={63} height={4} />
            <Image src="/dot3.png" alt="dots 1" width={63} height={4} />
            <Image src="/dot4.png" alt="dots 1" width={63} height={4} />
            <Image src="/dot5.png" alt="dots 1" width={63} height={4} />
          </div>
          <div className="flex flex-col justify-between items-start p-0 gap-2 absolute w-[63px] h-[63px] left-[167px] top-[143px]">
            <Image src="/dot1.png" alt="dots 1" width={63} height={4} />
            <Image src="/dot2.png" alt="dots 1" width={63} height={4} />
            <Image src="/dot3.png" alt="dots 1" width={63} height={4} />
            <Image src="/dot4.png" alt="dots 1" width={63} height={4} />
            <Image src="/dot5.png" alt="dots 1" width={63} height={4} />
          </div>
          <div className="absolute w-[113px] h-[113px] left-0 top-[169px] border border-solid border-purple-500">
            <Image src="/AI.png" width={143} height={143} alt="my logo" />
          </div>
          <div className="box-border absolute left-[227px] top-0">
            <Image
              src="/bigrect.png"
              alt="a bigger rectangle"
              width={86}
              height={86}
            />
          </div>
          <div className="box-border absolute left-[297px] top-[193px]">
            <Image
              src="/smallrect.png"
              width={52}
              height={52}
              alt="a rectangle"
            />
          </div>
        </div>
        <div className="absolute w-[584px] h-[200px] top-[85px] left-[440px]">
          <div className="border-box flex flex-col flex-start pt-2 pr-0 gap-2 absolute w-[178px] h-[103px] left-0 top-0 border border-solid border-gray-500">
            <h3 className="flex flex-row items-start pt-0 pl-2 w-48 h-5 flex-none order-none self-stretch flex-grow-0">
              <span className="w-[87px] h-[21px] font-sans not-italic font-semibold text-base leading-5 text-white flex-none order-0 flex-grow-0">
                Languages
              </span>
            </h3>
            <span className="w-[178px] h-0 border border-solid border-gray-500 flex-none order-1 self-stretch flex-grow-0"></span>
            <p className="flex flex-col items-start w-[178px] pt-0 pl-2 gap-2 h-[50px] flex-none order-2 flex-grow-0">
              <span className="flex flex-row items-start p-0 w-[133px] h-[21px] flex-none order-none flex-grow-0">
                {" "}
                <span className="w-24 h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                  Typescript
                </span>{" "}
              </span>
              <span className="flex flex-row items-start p-0 w-40 h-5 flex-none order-1 flex-grow-0">
                {" "}
                <span className="w-24 h-5 not-italic font-sans font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
                  Javascript
                </span>{" "}
              </span>
            </p>
          </div>
          <div className="border-box flex flex-col items-start pt-2 pr-0 gap-2 absolute w-[178px] h-[103px] left-[194px] top-0 border border-solid border-gray-500">
            <h2 className="flex flex-row items-start pt-0 pl-2 w-[178px] h-[21px] flex-none order-0 self-stretch flex-grow-0">
              <span className="w-[87px] h-[21px] font-sans not-italic font-semibold text-base leading-5 text-white flex-none order-none flex-grow-0">
                Databases
              </span>
            </h2>
            <span className="w-[178px] h-0 border border-solid border-gray-500 flex-none order-1 self-stretch flex-grow-0" />
            <p className="flex flex-col items-start pt-0 pr-2 pl-2 gap-2 w-[178px] h-[50px] flex-none order-2 flex-grow-0">
              <span className="w-16 h-5 font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                MySQL
              </span>
              <span className="w-12 h-5 font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                *Mongo
              </span>
            </p>
          </div>
          <div className="border-box flex flex-col items-start pt-2 pr-2 gap-2 absolute w-[196px] h-[132px] left-[388px] top-0 border border-solid border-gray-500">
            <h2 className="flex flex-row items-start pt-0 pl-2 w-[196px] h-[21px] flex-none order-0 self-stretch flex-grow-0">
              <span className="w-12 h-[21] font-sans not-italic font-semibold text-base leading-5 text-white flex-none order-none flex-grow-0">
                Tools
              </span>
            </h2>
            <span className="w-[196px] h-0 border border-solid border-gray-500 flex-none order-1 self-stretch flex-grow-0"></span>
            <div className="flex flex-col items-start pt-0 pl-2 gap-2 w-[196px] h-[79px] flex-none order-2 flex-grow-0">
              <p className="flex flex-row items-start p-0 gap-2 w-[180px] h-[21px] flex-none order-0 flex-grow-0">
                <span className="w-[58px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                  VSCode
                </span>{" "}
                <span className="w-[58px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
                  Netlify
                </span>
              </p>
              <p className="flex flex-row items-start p-0 w-[142px] h-[21px] flex-none order-1 flex-grow-0">
                <span className="w-12 h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                  Figma
                </span>
              </p>
              <p className="flex flex-row items-start p-0 gap-[11px] w-[156px] h-[21px] flex-none order-2 flex-grow-0">
                <span className="w-[29px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                  Git
                </span>{" "}
                <span className="w-[116px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
                  Font Awesome
                </span>
              </p>
            </div>
          </div>
          <div className="box-border flex flex-col items-start pt-0 pr-2 gap-2 absolute w-[178px] h-[103px] left-[197px] top-[119px] border border-solid border-gray-500">
            <h2 className="flex flex-row items-start pt-2 pl-2 w-[178px] h-[21px] flex-none order-0 self-stretch flex-grow-0">
              <span className="w-12 h-[21px] not-italic font-semibold text-base leading-5 text-white flex-none order-none flex-grow-0">
                Others
              </span>
            </h2>
            <span className="w-[178px] h-0 border border-solid border-gray-500 flex-none order-1 self-stretch flex-grow-0"></span>
            <div className="flex flex-col items-start pt-0 pl-2 gap-2 w-[176px] h-[50px] flex-none order-2 flex-grow-0">
              <p className="flex flex-row items-starts p-0 gap-2 w-[160px] h-[21px] flex-none order-0 flex-grow-0">
                <span className="w-[39px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                  HTML
                </span>
                <span className="w-[29px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
                  CSS
                </span>
                <span className="w-[39px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-2 flex-grow-0">
                  SCSS
                </span>
              </p>
              <p className="flex flex-row items-start p-0 gap-2 w-[95px] h-[21px] flex-none order-1 flex-grow-0">
                <span className="w-[39px] h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0 ">
                  REST
                </span>
              </p>
            </div>
          </div>
          <div className="box-border flex flex-col items-start pt-2 pr-2 gap-2 absolute w-[196px] h-[132px] left-[388px] top-[148px] border border-solid border-gray-500">
            <h2 className="flex flex-row items-start pt-2 pl-2 w-[196px] h-[21px] flex-none order-none self-stretch flex-grow-0 ">
              <span className="w-24 h-[21px] font-sans not-italic font-semibold text-base leading-5 text-white flex-none order-none flex-grow-0">
                Frameworks
              </span>
            </h2>
            <span className="w-[196px] h-0 border border-solid border-gray-500 flex-none order-1 self-stretch flex-grow-0"></span>
            <div className="flex flex-col items-start pt-0 pl-2 gap-2 w-[188px] h-[79px] flex-none order-2 flex-grow-0">
              <p className="flex flex-row items-start p-0 gap-2 w-[85px] h-[21px] flex-none order-none flex-grow-0">
                <span className="w-12 h-5 font-sans not-italic ont-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                  React
                </span>
                <span className="w-10 h-5 not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
                  NextJS
                </span>
              </p>
              <p className="flex flex-row items-start p-0 gap-2 w-[172px] h-[21px] flex-none order-1 flex-grow-0">
                <span className="w-40 h-5 font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                  Tailwind CSS
                </span>
              </p>
              <p className="flex flex-row items-start p-0 gap-[11px] w-[155px] h-[21px] flex-none order-2 flex-grow-0">
                <span className="w-24 h-5 font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
                  Bootstrap
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
