import "./menu.scss";
import { photos } from "../../resources/resources";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    "Tickets",
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
      <div
        className={
          menuOpen ? "left-container active" : "left-container inactive"
        }>
        <ul>
          {menuItems.map((item) => (
            <a href={`/${item}`} onClick={() => setMenuOpen(false)} key={item}>
              <li>{item}</li>
            </a>
          ))}
        </ul>
      </div>

      <div
        className={
          menuOpen ? "right-container active" : "right-container inactive"
        }>
        <div className='menu-story'>
          <h2>Latest On Impala Saracens</h2>

          <div className='image-container'>
            <img src={photos.ajo} alt='STORY' />
          </div>
          <div className='text-container'>
            <h3>Catchy Headline</h3>
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

export default Menu;
