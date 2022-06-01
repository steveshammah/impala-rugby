import {
  Email,
  Facebook,
  Instagram,
  Phone,
  PinDrop,
  Twitter,
} from "@material-ui/icons";

// import { logos } from "/resources/resources";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logos">
        <a href="/partners-sponsors/resolution">
          {/* <img src={logos.resolutionLogo} alt="" /> */}
        </a>
        <a href="/partners-sponsors/stanchart">
          {/* <img src={logos.stanchartLogo} alt="" /> */}
        </a>

        <a href="/partners-sponsors/blaze">
          {/* <img src={logos.blazeLogo} alt="" /> */}
        </a>

        <a href="/partners-sponsors/saracens">
          {/* <img src={logos.saracensLogo} alt="" /> */}
        </a>

        <a href="/partners-sponsors">
          {/* <img src={logos.resolutionLogo} alt="" /> */}
        </a>

        <a href="/partners-sponsors">
          {/* <img src={logos.impalaLogo} alt="" /> */}
        </a>

        <a href="/partners-sponsors/stanchart">
          {/* <img src={logos.stanchartLogo} alt="" /> */}
        </a>

        <a href="/partners-sponsors/blaze">
          {/* <img src={logos.blazeLogo} alt="" /> */}
        </a>
      </div>
      <div className="footer-list-wrapper">
        <div className="footer-list">
          <h2>SITEMAP</h2>
          <ul>
            <li>
              <a href="/feed/stories">News</a>
            </li>
            <li>
              <a href="/match-center">Fixtures</a>
            </li>
            <li>
              <a href="/squads">Squads</a>
            </li>
            <li>
              <a href="/partners-sponsors">Partners & Sponsors</a>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <h2>CONTACT US</h2>
          <ul>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#support">Support Forum</a>
            </li>
            <li>
              <a href="/store">Store</a>
            </li>
          </ul>
        </div>

        <div className="contacts-container">
          <div className="contacts-text">
            <span>
              <Phone /> <i>+254 712 345 678</i>
            </span>
            <span>
              <Email /> <i>supportservices@impalarugby.co</i>
            </span>
            <span>
              <PinDrop /> <i>Impala Sports Club, Ngong Road.</i>
            </span>
          </div>
          <div className="contacts-image">
            {/* <img src={logos.impalaLogo} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="socials">
        <ul>
          <li>Privacy policy</li>
          <li>Cookies</li>
          <li>Contact Us</li>
          <li>Terms of Use</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className="icons">
          <Instagram /> <Twitter /> <Facebook />
        </div>
        <span>&copy;2022 Impala Rugby</span>
      </div>
    </footer>
  );
};

export default Footer;
