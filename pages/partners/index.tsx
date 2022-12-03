import { logEvent } from "firebase/analytics";
import Link from "next/link";
import React, { useEffect } from "react";
import { partners, photos } from "@public/resources/resources";
import { analytics } from "@utils/firebase";

const AllSponsors = () => {
  useEffect(() => {
    logEvent(analytics, "View partners");
  }, []);
  return (
    <div className="w-full h-auto">
      <div className=" bg-blackX text-white relative h-96">
        <div className="intro-text absolute sm:top-1/2 top-16 right-6 text-right">
          <h1 className="sm:text-4xl text-2xl">Our Sponsors & Partners</h1>
          <p className="sm:text-xl text-md sm:tracking-widest tracking-normal  ">
            At Impala we always welcome new partners and sponsors. <br />
            As a club that thrives on community, we make you feel a part of
            ours.
            <br />
            If you would like to speak to us about partnership opportunities at
            Impala please{" "}
            <a href="#contact" className="text-primaryRed">
              contact
            </a>{" "}
            our team.
          </p>
        </div>
        <img
          src={photos.impalaBamboo?.src}
          alt="Impala Bamboo View"
          className="object-cover h-full w-full"
        />
      </div>
      <div className=" flex flex-col justify-around items-center sm:p-4 p-1">
        {partners.map((partner, index) => (
          <div
            className=" flex justify-between items-center rounded-md border-2 h-48 border-slate-50 sm:w-2/3 w-full my-6 shadow-md hover:shadow-xl"
            key={index}
          >
            <img
              src={partner.img?.src}
              alt="LOGO"
              className="sm:w-3/5 w-2/5 h-full object-contain"
            />
            <div className=" sm:w-2/5 w-3/5 flex flex-col p-2 h-full self-start">
              <h3 className="font-bold sm:text-3xl text-md w-full">
                {partner.name}
              </h3>
              <p className="my-2 sm:text-lg text-md">{partner.tag}</p>
              <Link href={`/partners/${partner.url}`}>
                <a className="rounded-full flex justify-center items-center sm:h-10 h-8 w-24 text-white bg-primaryRed">
                  More
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSponsors;
