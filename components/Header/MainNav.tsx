import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppStore } from "@stores/appStore";
import Image from "@components/Image";

interface IBottomNav {
  menuOpen: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  navLinks: any[];
}

const MainNav = ({ menuOpen, toggleMenu, navLinks }: IBottomNav) => {
  const [activeLink, setActiveLink] = useState("");
  const user = useAppStore((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);

    return () => {
      setActiveLink("");
    };
  }, [router, user]);

  return (
    <nav className="relative select-none bg-grey bg-primaryRed lg:flex items-center w-full pl-4 h-[65px]">
      <div className="flex flex-no-shrink items-stretch h-14">
        <Link href="/">
          <Image
            src="impalaLogo"
            alt="Impala Logo"
            className="w-full h-full object-contain"
          />
        </Link>
        <button
          className={`block lg:hidden cursor-pointer ml-auto relative w-14 h-12 p-4`}
          onClick={() => toggleMenu(!menuOpen)}
        >
          {/* Burger Nav */}
          <svg
            className={`${
              !menuOpen ? "block" : "hidden"
            } fill-current text-white text-lg`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={() => toggleMenu(true)}
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>

          {/* Close Menu */}
          <svg
            className={`${
              menuOpen ? "block" : "hidden"
            } fill-current text-white text-lg`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={() => toggleMenu(false)}
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div className="lg:flex lg:flex-no-shrink lg:flex-grow flex-1 h-full ">
        <ul
          className={`${
            !menuOpen && "hidden"
          } lg:flex justify-end items-center flex-1`}
        >
          {/* !user?.isAuth && */}
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                link.private ? "hidden" : ""
              } h-full flex mx-10 min-w-[8ch]`}
              onClick={() => toggleMenu(!menuOpen)}
            >
              <Link
                href={link.url}
                className={`flex items-center transition-all ease-in-out duration-200 h-full  ${
                  activeLink.includes(link.url) && "border-b-4"
                }  text-white hover:border-b-4  hover:border-b-white hover:text-whiteX  w-full text-lg h-full flex justify-center`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
