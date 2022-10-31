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

interface IBottomNav {
  menuOpen: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  navLinks: any[];
}

const MainNav = ({ menuOpen, toggleMenu, navLinks }: IBottomNav) => {
  const [activeLink, setActiveLink] = useState("");
  const burgerNav = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
    console.log({ router });
    return () => {
      setActiveLink("");
    };
  }, [router]);

  return (
    <div className="h-nav flex bg-primaryRed justify-between w-full pr-2 items-center uppercase">
      <div className="h-4/5 aspect-video ml-2 cursor-pointer">
        <Link href="/">
          <img
            src={logos.impalaLogo.src}
            alt=""
            className="w-full h-full object-cover"
          />
        </Link>{" "}
      </div>
      <ul
        className={`${
          !menuOpen ? "flex" : "hidden"
        } sm:justify-around  top-20 justify-evenly items-center sm:flex-row sm:w-2/4 absolute sm:relative sm:top-0  w-full h-full flex-col z-10`}
      >
        {navLinks.map((link) => (
          <li>
            <Link href={link.url}>
              <a
                className={`transition-all ease-in-out duration-200 p-2  ${
                  activeLink.includes(link.url) && "border-b-4"
                }  text-white hover:border-b-4 hover:border-b-white hover:text-whiteX  w-full text-sm`}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={
          "sm:hidden flex flex-col justify-between h-4 self-center cursor-pointer z-50"
        }
        onClick={() => toggleMenu(!menuOpen)}
        ref={burgerNav}
      >
        <span className="bg-white h-1 w-10 rounded-sm"></span>
        <span className="bg-white h-1 w-10 rounded-sm"></span>
      </div>
    </div>
  );
};

export default MainNav;
