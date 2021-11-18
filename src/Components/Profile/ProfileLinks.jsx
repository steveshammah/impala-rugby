import "./profile.scss";
import {actions} from '../../resources/resources'

export const ProfileLinks = ({ active, setActive }) => {
 
  return (
    <div className='profile-links'>
      <ul>
        {actions.map((action) => (
          <a href={`#${action.link}`} key={action.link}>
            <li
              onClick={() => setActive(action.link)}
              className={action.link === active ? "active" : ""}>
              {action.name}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};
