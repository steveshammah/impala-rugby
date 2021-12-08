import { Email, Phone, PinDrop } from "@material-ui/icons";
import "./footer.scss";
import { logos } from "../../resources/resources";

const Footer = () => {
  return (
    <footer>
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
            <li>Jobs at Impala Club</li>
          </ul>
        </div>
        <div className='footer-list'>
          <h2>CLUB POLICIES</h2>
          <ul>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
            <li>Season ticket FAQs</li>
            <li>Membership</li>
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

      <div className='footer-logos'>
        <div className='sponsor-footer'>
          <img src={logos.resolutionLogo} alt='' />
        </div>
        <div className='sponsor-footer'>
          <img src={logos.stanchartLogo} alt='' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
