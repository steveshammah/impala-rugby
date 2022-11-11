import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { useAppStore } from "../../stores/appStore";
import SideBar from "../SideBar/SideBar";
import SubHeader from "./SubHeader";

interface Props {
  children: ReactNode;
  links?: any;
}
const Shell = ({ children, links }: Props) => {
  const router = useRouter();
  const isAuth = useAppStore((state) => state.isAuth);
  useEffect(() => {
    if (!isAuth) {
      router.push("/auth");
    }
  }, []);
  if (isAuth) {
    return (
      <div className=" flex flex-col">
        <div className="flex w-full">
          <div className="relative ">
            <SideBar />
          </div>{" "}
          <div className="flex flex-col relative w-full h-full flex-1">
            {links && <SubHeader links={links} />}
            {children}
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Shell;
