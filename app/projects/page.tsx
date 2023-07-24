import React from "react";
import Navbar from "@/components/Navbar";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Top from "./top";
import Comprojs from "./comprojs";

type Props = {};

const gprojects: React.FC<Props> = (props) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Top />
      <Comprojs />
    </div>
  );
};

export default gprojects;
