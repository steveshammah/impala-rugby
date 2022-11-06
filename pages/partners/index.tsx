import React from "react";
import { partners, photos } from "../../public/resources/resources";

const AllSponsors = () => {
  return (
    <div className="sponsors w-full h-auto">
      <div className="landing-section bg-blackX text-white relative h-96">
        <div className="intro-text absolute top-1/2 right-6 text-right">
          <h1 className="text-4xl">Our Sponsors & Partners</h1>
          <p className="text-xl tracking-widest  ">
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
          className="object-fill h-full w-full"
        />
      </div>
      <div className="partners flex flex-col justify-around items-center p-4">
        {partners.map((partner, index) => (
          <div
            className="partner flex justify-between h-full items-center rounded-md border-2 border-slate-50 sm:w-2/3 w-full my-4 shadow-md hover:shadow-xl"
            key={index}
          >
            <img
              src={partner.img?.src}
              alt="LOGO"
              className="w-3/5 h-60 object-contain"
            />
            <div className="partner-about w-2/5 flex flex-col p-2 h-full self-start">
              <h3 className="font-bold text-3xl">{partner.name}</h3>
              <p className="my-2 text-lg">{partner.tag}</p>
              <a
                href={`/partners/${partner.url}`}
                className="rounded-full flex justify-center items-center h-10 w-24 text-white bg-primaryRed"
              >
                More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSponsors;
