import React, { useMemo } from "react";
import { partners } from "../../public/resources/resources";
import { useRouter } from "next/router";

const Partner = () => {
  const router = useRouter();
  const entity = String(router.query.id);
  const partner = useMemo(
    () => partners.filter((sponsor) => sponsor.url === entity),
    [entity]
  );

  return (
    <div className="flex items-center h-full w-full sm:pt-0 pt-6">
      {partner.map((detail, index) => (
        <div key={index} className="w-full flex flex-col sm:flex-row">
          <div className="left-wrapper flex-1 flex items-center">
            <img
              src={detail.img.src}
              alt="Sponsor Logo"
              className="object-contain w-full aspect-video"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center bg-blackX text-whiteX p-4">
            <h1 className="uppercase sm:text-4xl text-2xl font-black">
              {detail.name}
            </h1>
            <h3 className="sm:text-2xl text-lg uppercase mb-2">{detail.tag}</h3>

            <p className="leading-8 tracking-widest sm:text-base text-sm">
              {detail.about}
            </p>

            <a
              href={`https://www.${detail.website}`}
              target="_blank"
              className="rounded-full p-2 bg-primaryRed w-44 uppercase text-center my-4"
            >
              Find out more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Partner;
