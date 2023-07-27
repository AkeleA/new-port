import React from "react";
import Image from "next/image";
import projData from "./uproj.json";

const Uncomprojs: React.FC = () => {
  return (
    <div className="w-[1025px] h-[828px] absolute left-[171px] top-[1259px]">
      <div>
        {projData.map((project, index) => (
          <div key={index}>
            <Image
              src={project.image}
              alt={project.name}
              width={330}
              height={250}
            />
            <ul>
              {project.languages.map((language, langIndex) => (
                <li key={langIndex}>{language}</li>
              ))}
            </ul>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uncomprojs;
