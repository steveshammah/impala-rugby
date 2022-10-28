import React, { useState, useEffect } from "react";
import { partners } from "../../../public/resources/resources";
import "./sponsors.scss";

const Partner = ({ match }) => {
  const [partner, setPartner] = useState<any>([]);
  const entity = match.params.partner;
  const getPartner = partners.filter((sponsor) => sponsor.url === entity);

  useEffect(() => {
    setPartner(getPartner);
  }, []);
  return (
    <div className="partner-container">
      {partner.map((detail) => (
        <>
          <div className="left-wrapper">
            <img src={detail.img} alt="" />
          </div>
          <div className="right-wrapper">
            <h1>{detail.name}</h1>
            <h3>{detail.tag}</h3>

            <p>{detail.about}</p>

            <a
              href={`https://www.${detail.website}`}
              target="_blank"
              className="btn"
            >
              Find out more
            </a>
          </div>
        </>
      ))}
    </div>
  );
};

export default Partner;
