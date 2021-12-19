import {
  Email,
  Facebook,
  Instagram,
  Phone,
  PinDrop,
  Twitter,
} from "@material-ui/icons";
import "./footer.scss";
import { logos } from "../../resources/resources";

const Footer = () => {
  return (
    <footer>
      <div className='footer-logos'>
        <img src={logos.resolutionLogo} alt='' />

        <img src={logos.stanchartLogo} alt='' />

        <img src={logos.resolutionLogo} alt='' />

        <img src={logos.stanchartLogo} alt='' />

        <img src={logos.resolutionLogo} alt='' />

        <img src={logos.stanchartLogo} alt='' />

        <img src={logos.resolutionLogo} alt='' />

        <img src={logos.stanchartLogo} alt='' />

        <img src={logos.stanchartLogo} alt='' />
      </div>
      <div className='footer-list-wrapper'>
        <div className='footer-list'>
          <h2>SITEMAP</h2>
          <ul>
            <li>News</li>
            <li>Fixtures</li>
            <li>Tickets</li>
            <li>Membership</li>
          </ul>
        </div>
        <div className='footer-list'>
          <h2>CONTACT US</h2>
          <ul>
            <li>Contact</li>
            <li>How to find us</li>
            <li>Support Forum</li>
            <li>Jobs & Careers</li>
          </ul>
        </div>

        <div className='contacts-container'>
          <div className='contacts-text'>
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
          <div className='contacts-image'>
            <img src={logos.impalaLogo} alt='' />
          </div>
        </div>
      </div>
      <div className='socials'>
        <ul>
          <li>Privacy policy</li>
          <li>Cookies</li>
          <li>Contact Us</li>
          <li>Terms of Use</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className='icons'>
          <Instagram /> <Twitter /> <Facebook />
        </div>
        <span>&copy;2022 Impala Rugby</span>
      </div>
    </footer>
  );
};

export default Footer;
