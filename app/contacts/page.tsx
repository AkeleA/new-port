import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
import Top from "./top";
import Contactme from "./contactme";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-auto h-[790px]">
      <Sidebar />
      <Navbar />
      <Top />
      <Contactme />
      <Footer />
    </div>
  );
};

export default page;
