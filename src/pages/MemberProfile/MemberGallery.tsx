import { useState } from "react";
import ImageViewer from "./ImageViewer";

const MemberGallery = ({ member, activeWindow }) => {
  const display = activeWindow === "gallery" ? true : false;

  const [activeImage, setActiveImage] = useState("");

  const handleClick = (img) => {
    setActiveImage(img);
  };

  return (
    <section
      className='images-container'
      style={{ display: display ? "block" : "none" }}>
      {/* <h2>{member.name}'s Gallery</h2> */}

      <div className='images-wrapper'>
        <div className='image'>
          <img
            src={member.img}
            alt=''
            onClick={() => handleClick(member.img)}
          />
        </div>
        <div className='image'>
          <img
            src={member.img}
            alt=''
            onClick={() => handleClick(member.img)}
          />
        </div>
        <div className='image'>
          <img
            src={member.img}
            alt=''
            onClick={() => handleClick(member.img)}
          />
        </div>
        <div className='image'>
          <img
            src={member.img}
            alt=''
            onClick={() => handleClick(member.img)}
          />
        </div>
        <div className='image'>
          <img
            src={member.img}
            alt=''
            onClick={() => handleClick(member.img)}
          />
        </div>
      </div>

      <ImageViewer img={activeImage} setActiveImage={setActiveImage} />
    </section>
  );
};

export default MemberGallery;
