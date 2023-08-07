import React from "react";
import projData from "./uproj.json";

const Uncomprojs: React.FC = () => {
  return (
    <div className="w-[1025px] h-[828px] absolute left-[171px] top-[1339px]">
      <h2 className="w-[289px] h-[42px] inline-flex items-start">
        <span className="text-purple-400 font-sans text-3xl not-italic font-medium leading-none">
          #
        </span>
        <span className="text-white font-sans text-3xl not-italic font-medium leading-none">
          incomplete-apps
        </span>
      </h2>
      <div className="inline-flex flex-col items-start mt-[90px] w-[1025px] h-[738px] gap-4">
        {projData.map((project, index) => (
          <div
            key={index}
            className="flex w-[331px] h-[232px] flex-col items-start border border-solid border-gray-500"
          >
            <ul className="flex p-2 items-start gap-2 self-stretch w-[315px] h-[30px] border-b border-solid border-gray-500">
              {project.languages.map((language, langIndex) => (
                <li
                  key={langIndex}
                  className="text-gray-500 font-sans text-base not-italic font-normal leading-none"
                >
                  {language}
                </li>
              ))}
            </ul>
            <div className="flex p-4 flex-col items-start gap-4 self-stretch border-t border-solid border-gray-500">
              <h1 className="text-white font-sans text-2xl not-italic font-medium leading-none">
                {project.name}
              </h1>
              <p className="text-gray-500 font-sans text-base not-italic font-normal leading-none">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex pt-2 pr-4 pl-2 gap-[10px] w-24 h-8 border border-solid border-purple-500"
              >
                <span className="text-white font-sans leading-none text-base not-italic font-medium">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uncomprojs;
