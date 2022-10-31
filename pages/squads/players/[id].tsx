import React, { useState } from "react";
import { team } from "../../../public/resources/resources";

// import { teamContext } from "../../../contexts/team-context";
import MemberAbout from "../../../components/MemberAbout";
import MemberGallery from "../../../components/MemberGallery";
import MemberStatistics from "../../../components/MemberStatistics";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import MoreStories from "../../../components/LandingPage/MoreStories";

const MemberProfile = () => {
  // const { team } = useContext(teamContext);
  const [value, setValue] = useState<any>(0);
  const [activeWindow, setActiveWindow] = useState("about");
  const router = useRouter();
  const memberId = router && parseInt(router.query.id);

  const member = team.filter((user) => user.id === memberId)[0];

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
                src={member?.img.src}
                alt="User profile"
                // className="h-4/5 w-full rounded-t-md object-contain"
              />
            </div>
            <div className=" items-center flex flex-col relative w-full">
              <h2 className="text-2xl text-whiteX">{member?.name}</h2>
              <h5 className="font-thin text-xs text-primaryRed absolute top-0 right-2">
                {" "}
                {member?.team}
              </h5>
            </div>
            <div className="flex w-2/5 my-2 justify-between ">
              {socialLinks.map((social) => (
                <Link href={social.link}>
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
