import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import AkeleProf from "./bio";

type Props = {};

const Biography = (props: Props) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Footer />
      <AkeleProf />
    </div>
  );
};

export default Biography;
