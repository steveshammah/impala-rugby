// import React from "react";
import {  partners, photos } from "../../../public/resources/resources";
import "./sponsors.scss";

const AllSponsors = () => {
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
        {partners.map((partner) => (
          <div className='partner'>
            <img src={partner.img} alt='LOGO' />
            <div className='partner-about'>
              <h3>{partner.name}</h3>
              <p>{partner.tag}</p>
              <a href={`/partners-sponsors/${partner.url}`} className='btn'>
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
