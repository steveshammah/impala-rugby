import React from "react";
import Link from "next/link";
import { logos, partners } from "../../public/resources/resources";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { MdPhone, MdMail, MdPinDrop } from "react-icons/md";

const Footer = () => {
  const footerLinks = [
    {
      label: "News",
      url: "stories",
      to: "sitemap",
    },
    {
      label: "Fixtures",
      url: "fixtures",
      to: "sitemap",
    },
    {
      label: "Squad",
      url: "squads",
      to: "sitemap",
    },
    {
      label: "Partners & Sponsors",
      url: "partners",
      to: "sitemap",
    },
    {
      label: "Contact",
      url: "contact",
      to: "contacts",
    },
    {
      label: "About",
      url: "about",
      to: "contacts",
    },
    {
      label: "Support Forum",
      url: "support",
      to: "contacts",
    },
    {
      label: "Store",
      url: "store",
      to: "contacts",
    },
    {
      label: "Match Day",
      url: "match_day_policy",
      to: "policy",
    },
    {
      label: "Privacy Policy",
      url: "privacy_policy",
      to: "policy",
    },
    {
      label: "Cookies",
      url: "cookie_policy",
      to: "policy",
    },
    {
      label: "Terms and Conditions",
      url: "terms_and_conditions",
      to: "policy",
    },
  ];
  const socialLinks = [
    {
      platform: "Twitter",
      link: "https://www.twitter.com/ImpalaSaracens",
      icon: FaTwitter,
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/ImpalaSaracens",
      icon: FaInstagram,
    },
    {
      platform: "Facebook",
      link: "https://www.facebook.com/ImpalaSaracens",
      icon: FaFacebook,
    },
    {
      platform: "Youtube",
      link: "https://www.youtube.com/channel/UCIv7m_fThZmVQz-UHgo6Epg",
      icon: FaYoutube,
    },
  ];
  return (
    <footer className="flex flex-col justify-center items-center align-middle w-full mt-5">
      <div className="flex flex-wrap sm:h-72 h-auto items-center sm:w-8/12 w-full justify-around">
        {partners.map((partner, index) => (
          <Link href={`/partners/${partner.url}`} key={index}>
            <a className="h-16 sm:w-48 w-2/5 my-2 shadow-lg shadow-black">
              <img
                src={partner.img.src}
                className="h-full w-full object-contain"
                alt=""
              />
            </a>
          </Link>
        ))}
        {partners.map((partner, index) => (
          <Link href={`/partners/${partner.url}`} key={index}>
            <a className="h-16  sm:w-48 w-2/5 my-2 shadow-lg shadow-black">
              <img
                src={partner.img.src}
                className="h-full w-full object-contain"
                alt=""
              />
            </a>
          </Link>
        ))}
      </div>
      <div className="p-4 flex justify-between flex-wrap w-full flex-2 bg-blackX text-whiteX">
        <div className="footer-list flex flex-col flex-1 m-2">
          <h2 className="font-bold sm:text-lg text-sm flex-1 flex items-end pb-2">
            SITEMAP
          </h2>
          <ul className="flex flex-col flex-grow w-full justify-around">
            {footerLinks.map(
              (siteLink, index) =>
                siteLink.to === "sitemap" && (
                  <li
                    className="cursor-pointer hover:text-primaryRed transition-all ease-out sm:text-md text-sm"
                    key={index}
                  >
                    <Link href={`/${siteLink.url}`}>
                      <a>{siteLink.label}</a>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="flex flex-col flex-1 m-2">
          <h2 className="font-bold sm:text-xl text-sm flex-1 flex items-end pb-2">
            CONTACT US
          </h2>
          <ul className="flex flex-col flex-grow w-full justify-around">
            {footerLinks.map(
              (siteLink, index) =>
                siteLink.to === "contacts" && (
                  <li
                    className="cursor-pointer hover:text-primaryRed transition-all ease-out text-sm"
                    key={index}
                  >
                    <Link href="/stories">
                      <a>{siteLink.label}</a>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="flex flex-col flex-1 m-2">
          <h2 className="font-bold sm:text-xl text-sm  flex-1 flex items-end pb-2">
            POLICY
          </h2>
          <ul className="flex flex-col flex-grow w-full justify-around">
            {footerLinks.map(
              (siteLink, index) =>
                siteLink.to === "policy" && (
                  <li
                    className="cursor-pointer hover:text-primaryRed transition-all ease-out text-sm"
                    key={index}
                  >
                    <Link href="/stories">
                      <a>{siteLink.label}</a>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>

        <div className="flex items-center justify-around">
          <div className="contacts-text flex flex-col justify-evenly h-3/4  items-start">
            <span className="flex items-center justify-start cursor-pointer w-full">
              <MdPhone className="text-2xl mr-2" />
              <i>+254 712 345 678</i>
            </span>
            <span className="flex items-center justify-start cursor-pointer w-full">
              <MdMail className="text-2xl mr-2" />
              <i>impalarugbyke@gmail.com</i>
            </span>
            <span className="flex items-center justify-start cursor-pointer w-full">
              <MdPinDrop className="text-2xl mr-2" />
              <i>Impala Sports Club, Ngong Road.</i>
            </span>
          </div>
          <div className="h-56 w-56 p-8">
            <img
              src={logos.impalaLogo.src}
              alt="Default_Logo"
              className="h-3/4 w-full object-fill sm:block hidden"
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:h-10 h-auto flex   justify-between items-center bg-blackX text-whiteX text-xs">
        <div className="flex flex-1 justify-around cursor-pointer p-1 ">
          {socialLinks.map((social, index) => (
            <Link href={social.link} key={index} target="_blank">
              <a target={"_blank"}>
                <social.icon
                  className="text-xl hover:text-primaryRed transition-all ease-in"
                  title={social.platform}
                />
              </a>
            </Link>
          ))}
        </div>
        <span className="p-1 flex-1 text-right">
          &copy;
          <a href="https://steveshammah.netlify.app" target={"_blank"}>
            2022 Takeover
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
