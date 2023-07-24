import * as React from "react";
import { SiGithub } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-0 fixed w-8 gap-2 h-80 left-4 top-0 bg-gray-900 z-50">
      <span className="w-px h-48 bg-gray-500 flex-none order-none flex-grow-0"></span>
      <div className="flex flex-col items-center p-0 w-8 h-24  gap-2 flex-none order-1 flex-grow-0">
        <a>
          <SiGithub
            size={32}
            className="flex-none order-none flex-grow-0 text-gray-500"
          />
        </a>
        <a>
          <AiOutlineLinkedin
            size={32}
            className="flex-none order-1 flex-grow-0 text-gray-500"
          />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
