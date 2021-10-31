import "./header.scss";
import impalaLogo from "../../Resources/impala-logo.png";
import { Link } from "react-router-dom";

export const Header = ({ login, logOut, menuOpen, setMenuOpen }) => {
  const navItems = [
    { name: "home", url: "" },
    { name: "channel", url: "channel" },
    { name: "groups", url: "groups" },
    { name: "about", url: "about" },
  ];
  return (
    <header>
      {/* LOGO */}
      <div className='logo'>
        <img src={impalaLogo} alt='LOGO' />
      </div>
      <ul>
        {navItems.map((item) => (
          <li>
            {" "}
            <Link to={`/${item.url}`}>{item.name}</Link>
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
