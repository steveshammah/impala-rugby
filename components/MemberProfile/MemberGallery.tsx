import React, { useState } from "react";
import ImageViewer from "./ImageViewer";

const MemberGallery = ({ member }: any) => {
  const [activeImage, setActiveImage] = useState<any>("");

  const handleClick = (img: string) => {
    setActiveImage(img);
  };

  return (
    <section className="images-container flex flex-col w-full border-y-2 border-y-stone-100 text-whiteX p-2  items-center justify-center relative">
      <h2 className="font-bold text-2xl text-left w-full ml-3">
        {member?.lastname}'s Gallery
      </h2>

      <div className="flex justify-evenly w-full py-2">
        <div className="rounded-md h-96">
          <img
            src={member?.img?.src}
            alt={member?.name}
            className="rounded-md h-full w-80 object-cover aspect-video cursor-pointer"
            onClick={() => handleClick(member?.img)}
          />
        </div>
        <div className="rounded-md h-96">
          <img
            src={member?.img?.src}
            alt={member?.name}
            className="rounded-md h-full w-80 object-cover aspect-video cursor-pointer"
            onClick={() => handleClick(member?.img)}
          />
        </div>
        <div className="rounded-md h-96">
          <img
            src={member?.img?.src}
            alt={member?.name}
            className="rounded-md h-full w-80 object-cover aspect-video cursor-pointer"
            onClick={() => handleClick(member?.img)}
          />
        </div>
      </div>

      <ImageViewer img={activeImage} setActiveImage={setActiveImage} />
    </section>
  );
};

export default MemberGallery;
