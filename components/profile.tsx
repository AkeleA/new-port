import React from "react";
import Image from "next/image";

type Props = {};

const Profile: React.FC = () => {
  return (
    <div className="absolute w-210 h-423 left-[171px] top-[123px]">
      <div className="absolute w-200 h-[423px] left-0 top-[74px]">
        <h1 className="h-20 not-italic font-semibold font-sans text-3xl text-white w-[537px]">
          Akeleojo is an{" "}
          <i className="text-purple-400 not-italic"> enigmatic </i> and creative{" "}
          <i className="text-purple-400 not-italic"> Frontend web developer</i>{" "}
        </h1>
        <p className="absolute w-[463px] top-[116px] h-12 not-italic font-normal text-base leading-6 text-gray-500 font-sans">
          I develop responsive, modern and pixel-perfect websites which blend
          technology and creativity
        </p>
        <button className="box-border border-[1px] border-solid border-purple-400 flex flex-row font-sans items-start absolute pt-2 pr-4 gap-[10px] w-40 h-10 top-[197px]">
          <span className="w-32 h-5 not-italic font-medium text-base leading-5 font-mono text-white flex-none order-none flex-grow-0">
            {" "}
            Contact me!
          </span>
        </button>
      </div>
      <div className="absolute w-[469px] h-[386px] left-[555px] top-0">
        <div className="absolute top-0 left-5">
          <Image
            src="/darkkoo.png"
            alt="what Akele thinks he is"
            width={457}
            height={386}
          />
        </div>
        <div className="absolute left-0 top-16">
          <Image src="/AI.png" width={175} height={175} alt="my logo" />
        </div>
        <div className="flex flex-col justify-between items-start p-0 gap-4 absolute w-[84px] h-[84px] left-[380px] top-[246px]">
          <Image src="/dot1.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot2.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot3.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot4.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot5.png" alt="dots 1" width={84} height={4} />
        </div>
      </div>
      <div className="flex flex-row items-center absolute p-2 gap-2.5 h-9 w-[402px] left-[590px] top-[386px] bg-gray-900 border-solid border-[1px] border-gray-500">
        <span className="box-border w-4 h-4 bg-purple-400 flex-none order-none flex-grow-0 border-[1px] border-solid border-purple-400 "></span>
        <h3 className="w-72 h-5n font-sans not-italic font-medium text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
          Currently working on Portfolio
        </h3>
      </div>
    </div>
  );
};

export default Profile;
