import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { useTeamStore } from "@stores/teamsStore";
import MemberAbout from "@components/MemberProfile/MemberAbout";
import MemberGallery from "@components/MemberProfile/MemberGallery";
import MoreStories from "@components/LandingPage/MoreStories";
import Image from "@components/Image";
import { eventLogger } from "@utils/utils";

const MemberProfile = () => {
  const router = useRouter();
  const memberId = String(router.query.id);

  const getMember = useTeamStore((state) => state.getMember);
  const member = useTeamStore((state) => state.member);

  useEffect(() => {
    memberId && getMember(memberId);

    eventLogger({
      event: `View member: ${memberId}`,
    });
  }, [memberId]);

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
    <section className="w-full">
      <div className="flex flex-col-reverse sm:flex-row justify-between p-5 h-auto">
        <div className="flex flex-1">
          <div className="flex flex-1 flex-col">
            <MemberAbout member={member} />
          </div>
        </div>
        <div className="flex flex-col  bg-blackX rounded-md h-full flex-1">
          <div className="flex sm:w-auto w-full flex-col items-center h-full">
            <div className="h-[400px] w-full rounded-t-md">
              <Image
                src={member?.firstname ? member.firstname : "impalaLogo"}
                alt="User profile"
                className="h-full w-full rounded-t-md object-contain"
              />
            </div>
            <div className=" items-center flex flex-1 flex-col relative w-full pt-4">
              <h2 className="text-2xl text-whiteX capitalize">
                {member?.firstname} {member?.lastname}
              </h2>
              <h5 className="font-thin text-xs text-primaryRed absolute top-0 right-2 capitalize ">
                {" "}
                {member?.team?.replace(/-/, " ")}
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
