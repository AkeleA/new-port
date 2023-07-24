import React from "react";
import Image from "next/image";

type Props = {};

const Bio = (props: Props) => {
  return (
    <div className="absolute w-[1025px] h-[508px] left-[173px] top-[1984px]">
      <div className="flex flex-row items-center p-0 gap-4 absolute w-[516px] h-[42px] left-0 top-0">
        <h2 className="flex flex-row items-start p-0 w-[174px] h-[42px] flex-none order-0 flex-grow-0">
          <span className="w-5 h-[42px] font-sans not-italic font-medium text-3xl leading-[42px] text-purple-400 flex-none order-none flex-grow-0">
            #
          </span>
          <span className="w-[154px] h-[42px] font-sans not-italic font-medium text-3xl leading-[42px] text-white flex-none order-1 flex-grow-0">
            about-me
          </span>
        </h2>
        <span className="w-[326px] h-px bg-purple-400 flex-none order-1 flex-grow"></span>
      </div>
      <div>
        <p className="absolute w-[515px] h-[312px] left-0 top-[65px] font-sans not-italic font-normal text-base leading-6 text-gray-500">
          Hello, I&apos;m Akeleojo Achor! I&apos;m a passionate and dedicated
          self-taught front-end developer based in Lagos, Nigeria. With my
          extensive expertise and attention to detail, I craft visually stunning
          and responsive websites from scratch, delivering exceptional user
          experiences. Transforming creative ideas into functional and elegant
          web solutions is my driving force. I take great pride in helping
          clients establish a strong and captivating online presence. By staying
          abreast of the latest technologies and frameworks, I continuously
          expand my knowledge and skills to create cutting-edge and future-proof
          websites.
        </p>
        <button className="box-border flex- flex-row items-start pt-0.5 pr-4 gap-4 absolute w-[148px] h-[37px] left-0 top-[401px] border border-solid border-purple-400">
          <span className="w-[116px] h-[21px] font-sans not-italic font-medium text-base leading-5 text-white flex-none order-none flex-grow-0">
            Read more &#x2192;
          </span>
        </button>
      </div>
      <div className="absolute w-[343px] h-[508px] left-[679px] top-0">
        <div className="flex flex-col justify-between items-start p-0 gap-4 absolute w-[84px] h-[84px] left-0 top-[59px] z-10">
          <Image src="/dot1.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot2.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot3.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot4.png" alt="dots 1" width={84} height={4} />
          <Image src="/dot5.png" alt="dots 1" width={84} height={4} />
        </div>
        <div className="flex flex-col justify-between items-start p-0 gap-4 absolute w-[104px] h-14 left-[223px] top-[279px] z-20">
          <Image src="/dot1.png" alt="dots 1" width={104} height={4} />
          <Image src="/dot2.png" alt="dots 1" width={104} height={4} />
          <Image src="/dot3.png" alt="dots 1" width={104} height={4} />
          <Image src="/dot4.png" alt="dots 1" width={104} height={4} />
        </div>
        <div className="absolute top-0 left-1 z-0">
          <Image
            src="/shadow.png"
            width={339}
            height={507}
            alt="a man wearing a hoodie"
          />
        </div>
      </div>
    </div>
  );
};

export default Bio;
