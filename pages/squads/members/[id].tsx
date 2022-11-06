import React, { useEffect } from "react";

import MemberAbout from "../../../components/MemberAbout";
import MemberGallery from "../../../components/MemberGallery";

import { useRouter } from "next/router";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import MoreStories from "../../../components/LandingPage/MoreStories";
import { useTeamStore } from "../../../contexts/teamsStore";
import { logos } from "../../../public/resources/resources";

const MemberProfile = () => {
  const router = useRouter();
  const memberId = String(router.query.id);

  const getMember = useTeamStore((state) => state.getMember);
  const member = useTeamStore((state) => state.member);

  useEffect(() => {
    memberId && getMember(memberId);
  }, [memberId]);

  const socialLinks = [
    {
      platform: "Twitter",
      link: "https://www.twitter.com",
      icon: FaTwitter,
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com",
      icon: FaInstagram,
    },
    {
      platform: "Facebook",
      link: "https://www.facebook.com",
      icon: FaFacebook,
    },
    {
      platform: "Youtube",
      link: "https://www.youtube.com",
      icon: FaYoutube,
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col-reverse sm:flex-row justify-between p-5 h-auto">
        <div className="flex">
          <div className="flex flex-col">
            <MemberAbout member={member} />
          </div>
        </div>
        <div className="flex flex-col  bg-blackX rounded-md h-full w-full">
          <div className="flex sm:w-auto w-full flex-col items-center h-full">
            <div className="flex h-2/3 flex-1">
              <img
                src={member?.img ? member?.img?.src : logos.impalaLogo.src}
                alt="User profile"
                className="h-4/5 w-full rounded-t-md object-contain"
              />
            </div>
            <div className=" items-center flex flex-col relative w-full">
              <h2 className="text-2xl text-whiteX capitalize">
                {member?.firstname} {member?.lastname}
              </h2>
              <h5 className="font-thin text-xs text-primaryRed absolute top-0 right-2 capitalize">
                {" "}
                {member?.team}
              </h5>
            </div>
            <div className="flex w-2/5 my-2 justify-between ">
              {socialLinks.map((social, index) => (
                <Link href={social.link} key={index}>
                  <social.icon
                    className="text-xl text-whiteX hover:text-primaryRed cursor-pointer transition-all ease-in"
                    title={social.platform}
                  />
                </Link>
              ))}
            </div>
            <h5 className="text-whiteX font-extralight text-sm py-2">
              One Team. One Dream
            </h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <MemberGallery member={member} />
        <MoreStories />
      </div>
    </section>
  );
};

export default MemberProfile;