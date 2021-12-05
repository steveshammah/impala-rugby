import "./header.scss";
import { logos, navLinks } from "../../resources/resources";
import { Link } from "react-router-dom";

const Header = ({ login, logOut, menuOpen, setMenuOpen }) => {
  return (
    <header>
      {/* LOGO */}
      <div className='logo'>
        <Link to='/'>
          <img src={logos.impalaLogo} alt='LOGO' />
        </Link>{" "}
      </div>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            {" "}
            <Link to={`/${link.url}`}>{link.name}</Link>
          </li>
        ))}
        <li>
          {login ? (
            <Link to='/' onClick={() => logOut(false)}>
              Logout
            </Link>
          ) : (
            <Link to='/'>Login</Link>
          )}
        </li>
      </ul>

      <div className='burger-nav' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
