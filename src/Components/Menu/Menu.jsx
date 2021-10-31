import "./menu.scss";
// import { Link } from "react-router-dom";
// import image from "../../Resources/DSC_0840.jpg";
// import image from "../../Resources/DSC_4411.jpg";
import image from "../../Resources/DSC_8204.jpg";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    "Competitions",
    "Official Membership",
    "Supporters's Club",
    "Jobs & Career",
  ];
  return (
    <div
      className={
        menuOpen ? "menu-container active" : "menu-container inactive"
      }>
      <div className='left-container'>
        <ul>
          {menuItems.map((item) => (
            <a onClick={() => setMenuOpen(false)}>
              <li>{item}</li>
            </a>
          ))}
        </ul>
      </div>

      <div className='right-container'>
        <div className='menu-story'>
          <h2>Latest On Impala Saracens</h2>

          <div className='image-container'>
            <img src={image} alt='STORY IMAGE' />
          </div>
          <div className='text-container'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              vero ab a totam fuga reiciendis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolor at, accusantium adipisci
              magnam excepturi ratione?
            </p>
            <span>2h | Read</span>
          </div>
        </div>
      </div>
    </div>
  );
};
