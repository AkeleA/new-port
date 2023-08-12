import React from "react";
import Image from "next/image";

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
        <p className="absolute flex flex-col gap-5 w-[515px] top-[189px] font-sans text-base not-italic font-normal leading-6 text-gray-500">
          <span>
            Hello, I’m Akele! I’m a self-taught front-end developer based in
            Lagos, Nigeria. I can develop responsive websites into modern
            user-friendly web experiences.
          </span>
          <span>
            Transforming my creativity and knowledge into a websites has been my
            passion for over 3 years. I always strive to learn about the newest
            technologies and frameworks.
          </span>
        </p>
      </div>
      <div>
        <div className="absolute left-[689px] top-[43px] w-[339px] h-[507px]">
          <Image
            src="/shadow.png"
            width={343}
            height={507}
            alt="a shadow image"
          />
        </div>
        <div className="flex flex-col justify-between items-start gap-4 absolute left-[685px] top-[102px] w-[84px] h-[84px] flex-shrink-0">
          <Image src="/dot1.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot2.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot3.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot4.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot5.png" alt="dots 1" width={84} height={4} />
        </div>
        <div className="flex flex-col justify-between items-start gap-[13.33] absolute left-[908px] top-[321px] w-[104px] h-[56px] flex-shrink-0">
          <Image src="/dot1.png" alt="dots 1" width={104} height={4} />
          <Image src="/dot2.png" alt="dots 1" width={104} height={4} />
          <Image src="/dot3.png" alt="dots 1" width={104} height={4} />
          <Image src="/dot4.png" alt="dots 1" width={104} height={4} />
        </div>
      </div>
    </div>
  );
};

export default AkeleProf;
