import React, {
  useEffect,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import Link from "next/link";
import { logos } from "../../public/resources/resources";
import { useRouter } from "next/router";
import { useAppStore } from "../../stores/appStore";

interface IBottomNav {
  menuOpen: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  navLinks: any[];
}

const MainNav = ({ menuOpen, toggleMenu, navLinks }: IBottomNav) => {
  const [activeLink, setActiveLink] = useState("");
  const isAuth = useAppStore((state) => state.isAuth);

  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);

    return () => {
      setActiveLink("");
    };
  }, [router]);

  return (
    <nav className="relative select-none bg-grey bg-primaryRed lg:flex lg:items-stretch w-full ">
      <div className="flex flex-no-shrink items-stretch h-14">
        <Link href="/">
          <img
            src={logos.impalaLogo.src}
            alt=""
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
      <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow flex-1 ">
        <ul
          className={`${
            !menuOpen && "hidden"
          } lg:flex h-full lg:items-stretch lg:justify-end ml-auto flex-1`}
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                !isAuth && link.private && "hidden"
              } h-full items-baseline flex mx-10`}
              onClick={() => toggleMenu(!menuOpen)}
            >
              <Link href={link.url}>
                <a
                  className={`transition-all ease-in-out duration-200 p-2  ${
                    activeLink.includes(link.url) && "border-b-4"
                  }  text-white hover:border-b-4  hover:border-b-white hover:text-whiteX  w-full text-lg h-full flex items-baseline justify-center`}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
