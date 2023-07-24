import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

type Props = {};

const gprojects: React.FC<Props> = (props) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      {/*<h1>HAPPY BIRTHDAY AKELE!!!</h1>*/}
    </div>
  );
};

export default gprojects;
