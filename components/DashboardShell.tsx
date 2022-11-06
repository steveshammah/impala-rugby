import React, { ReactNode } from "react";
import SideBar from "./SideBar/SideBar";
import SubHeader from "./SubHeader";

interface Props {
  children: ReactNode;
  links?: any;
}
const Shell = ({ children, links }: Props) => {
  return (
    <div className=" flex flex-col">
      <div className="flex w-full">
        <SideBar />
        <div className="flex flex-col relative w-full h-full flex-1">
          {links && <SubHeader links={links} />}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Shell;
