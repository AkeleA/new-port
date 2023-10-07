import React from "react";
import skillsData from "./skills.json";

type Props = {};

const Akeleskills = (props: Props) => {
  const { Languages, Databases, Tools, Others, Frameworks } = skillsData;

  return (
    <div className="absolute top-[819px] left-[171px] w-[1024px] h-[251px]">
      <h2 className="w-[136px] h-[42px] inline-flex items-start">
        <span className="text-purple-400 text-3xl not-italic font-medium font-sans leading-normal">
          #
        </span>
        <span className="text-white font-sans leading-normal text-3xl not-italic font-medium">
          skills
        </span>
      </h2>

      <div className="absolute top-16 left-0 inline-flex items-start gap-4">
        {/* Render Languages */}
        <div className="flex w-[192px] h-28 pt-1 flex-col flex-initial items-start gap-2 border border-solid border-gray-500">
          <h3 className="flex pl-2 items start self-stretch w-44 h-auto">
            <span className="text-white font-sans text-base not-italic font-semibold leading-normal">
              Languages
            </span>
          </h3>
          <hr className="w-[191px] h-0 color-gray-500" />
          <ul className="flex flex-col pt-0 pr-2 pb-0 pl-2 items start gap-2">
            {Object.keys(Languages).map((language) => (
              <li
                key={language}
                className="text-gray-500 font-sans text-base not-italic font-normal leading-normal"
              >
                {language}
              </li>
            ))}
          </ul>
        </div>

        {/* Render Databases */}
        <div className="flex w-48 h-28 pt-2 pr-0 pb-2 pl-0 flex-col items-start gap-2 flex-initial border border-solid border-gray-500">
          <h3 className="flex pt-0 pr-2 pb-0 pl-2 items-start self-stretch">
            <span className="text-white font-sans text-base not-italic font-semibold leading-normal">
              Databases
            </span>
          </h3>
          <hr className="w-[191px] h-0 color-gray-500" />
          <ul className="flex pt-0 pr-2 pl-2 pb-1 flex-col items-start gap-2">
            {Object.keys(Databases).map((database) => (
              <li
                className="text-gray-500 font-sans text-base not-italic font-normal leading-normal"
                key={database}
              >
                {database}
              </li>
            ))}
          </ul>
        </div>

        {/* Render Tools */}
        <div className="flex w-48 h-28 pt-2 pr-0 pb-2 pl-0 flex-col items-start gap-2 flex-initial border border-solid border-gray-500">
          <h3 className="flex pt-0 pr-2 pb-0 pl-2 items-start self-stretch">
            <span className="text-white font-sans text-base not-italic font-semibold leading-normal">
              Tools
            </span>
          </h3>
          <hr className="w-[191px] h-0 color-gray-500" />
          <ul className="flex pt-0 pr-2 pl-2 pb-1 flex-row flex-wrap items-start gap-2">
            {Object.keys(Tools).map((tool) => (
              <li
                className="text-gray-500 font-sans text-base not-italic font-normal leading-normal"
                key={tool}
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* Render Others */}
        <div className="flex w-48 h-28 pt-2 pr-0 pb-2 pl-0 flex-col items-start gap-2 flex-initial border border-solid border-gray-500">
          <h3 className="flex pt-0 pr-2 pb-0 pl-2 items-start self-stretch">
            <span className="text-white font-sans text-base not-italic font-semibold leading-normal">
              Others
            </span>
          </h3>
          <hr className="w-[191px] h-0 color-gray-500" />
          <ul className="flex pt-0 pr-2 pl-2 pb-1 flex-row flex-wrap items-start gap-2">
            {Object.keys(Others).map((other) => (
              <li
                className="text-gray-500 font-sans text-base not-italic font-normal leading-normal"
                key={other}
              >
                {other}
              </li>
            ))}
          </ul>
        </div>

        {/* Render Frameworks */}
        <div className="flex w-48 h-36 pt-2 pr-0 pb-2 pl-0 flex-col items-start gap-2 flex-initial border border-solid border-gray-500">
          <h3 className="flex pt-0 pr-2 pb-0 pl-2 items-start self-stretch">
            <span className="text-white font-sans text-base not-italic font-semibold leading-normal">
              Frameworks
            </span>
          </h3>
          <hr className="w-[191px] h-0 color-gray-500" />
          <ul className="flex pt-0 pr-2 pl-2 pb-1 flex-row flex-wrap items-start gap-2">
            {Object.keys(Frameworks).map((framework) => (
              <li
                className="text-gray-500 font-sans text-base not-italic font-normal leading-normal"
                key={framework}
              >
                {framework}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Akeleskills;
