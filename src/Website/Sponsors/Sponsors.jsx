// import React from "react";
import { logos, photos } from "../../resources/resources";
import "./sponsors.scss";

const Sponsors = () => {
  return (
    <div className='sponsors'>
      <div className='landing-section'>
        <div className='intro-text'>
          <h1>Our Sponsors & Partners</h1>
          <p>
            At Impala we always welcome new partners and sponsors. <br />
            As a club that thrives on community, we make you feel a part of
            ours.
            <br />
            If you would like to speak to us about partnership opportunities at
            Impala please <a href='#contact'>contact</a> our team.
          </p>
        </div>
        <img src={photos.impalaBamboo} alt='' />
      </div>
      <div className='partners'>
        <div className='partner'>
          <img src={logos.resolutionLogo} alt='' />
          <div className='partner-about'>
            <h3>Resolution Insurance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              fuga?
            </p>
            <button className='btn'>More</button>
          </div>
        </div>

        <div className='partner'>
          <img src={logos.stanchartLogo} alt='' />
          <div className='partner-about'>
            <h3>Standard Chartered Bank</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              fuga?
            </p>
            <button className='btn'>More</button>
          </div>
        </div>

        <div className='partner'>
          <img src={logos.saracensLogo} alt='' />
          <div className='partner-about'>
            <h3>Saracens Official</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              fuga?
            </p>
            <button className='btn'>More</button>
          </div>
        </div>
        <div className='partner'>
          <img src={logos.blazeLogo} alt='' />
          <div className='partner-about'>
            <h3>Blaze</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              fuga?
            </p>
            <button className='btn'>More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
