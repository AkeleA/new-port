import React from "react";
import Image from "next/image";
import compData from "./proj.json";

type Props = {};

const Comprojs = (props: Props) => {
  const topThreeProjects = compData.slice(0, 3); // Get the top 3 items
  const remainingProjects = compData.slice(3); // Get the remaining 2 items

  return (
    <div className="absolute left-[171px] top-[259px] w-[1024px] h-[919px] flex-shrink-0">
      <h2 className="w-[270px] h-[42px] inline-flex items-start">
        <span className="text-purple-400 font-sans text-3xl not-italic font-medium leading-none">
          #
        </span>
        <span className="text-white font-sans text-3xl not-italic font-medium leading-none">
          complete-apps
        </span>
      </h2>
      <div className="inline-flex flex-col items-start mt-[48px] w-[1024px] h-[880px] gap-4">
        <div className="w-[1024px] h-[462px] flex flex-start gap-4">
          {topThreeProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-[330px] h-[422px] border"
            >
              <div className="border-b border-solid border-gray-500">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={330.579}
                  height={201} // Specify the image dimensions here
                />
              </div>
              <ul className="flex items-start gap-2 p-2 self-stretch">
                {project.languages.map((language, langIndex) => (
                  <li
                    key={langIndex}
                    className="text-gray-500 font-sans text-base not-italic font-normal leading-none"
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <div className="flex p-4 flex-col items start gap-4 self-stretch">
                <h1 className="text-white font-sans leading-none text-2xl not-italic font-medium">
                  {project.name}
                </h1>
                <p className="text-gray-500 font-sans text-base not-italic font-normal leading-none">
                  {project.description}
                </p>
                <div className="flex items-start gap-4 w-[244px] h-10">
                  {/* Live Link */}
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex pt-2 pl-2 pb-2 w-[100px] h-10 items-start gap-[10px] border border-solid border-purple-500"
                  >
                    <span className="text-white font-sans text-base not-italic font-medium leading-none">
                      Live &#x21DC;&#x21DD;
                    </span>
                  </a>
                  {/* GitHub Repository Link */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex pt-2 pl-2 pb-2 w-[100px] h-10 items-start gap-[10px] border border-solid border-gray-500"
                  >
                    <span className="text-white font-sans text-base not-italic font-medium leading-none">
                      GitHub &ge;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[1024px] h-[462px]  flex flex-start gap-4">
          {remainingProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-[330px] h-[422px] border"
            >
              <div className="border-b border-solid border-gray-500">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={330.579}
                  height={201}
                />
              </div>
              <ul className="flex items-start gap-2 p-2 self-stretch">
                {project.languages.map((language, langIndex) => (
                  <li
                    key={langIndex}
                    className="text-gray-500 font-sans text-base not-italic font-normal leading-none"
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <div className="flex p-4 flex-col items start gap-4 self-stretch">
                <h1 className="text-white font-sans leading-none text-2xl not-italic font-medium">
                  {project.name}
                </h1>
                <p className="text-gray-500 font-sans text-base not-italic font-normal leading-none">
                  {project.description}
                </p>
                <div className="flex items-start gap-4 w-[244px] h-10">
                  {/* Live Link */}
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex pt-2 pl-2 pb-2  w-[100px] h-10 items-start gap-[10px] border border-solid border-purple-500"
                  >
                    <span className="text-white font-sans text-base not-italic font-medium leading-none">
                      Live &#x21DC;&#x21DD;
                    </span>
                  </a>
                  {/* GitHub Repository Link */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex pt-2 pl-2 pb-2 w-[100px] h-10 items-start gap-[10px] border border-solid border-gray-500"
                  >
                    <span className="text-white font-sans text-base not-italic font-medium leading-none">
                      GitHub &ge;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comprojs;
