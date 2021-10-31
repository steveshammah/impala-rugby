import "./Profile.scss";

export const ProfileLinks = ({ active, setActive }) => {
  const actions = [
    { name: "Management", link: "management" },
    { name: "Training Schedule", link: "training" },
    { name: "Allowance Allocation", link: "allowance" },
    { name: "Gazelles", link: "gazelles" },
    { name: "Boks", link: "boks" },
    { name: "Ladies", link: "ladies" },
    { name: "Swaras", link: "swaras" },
    { name: "Fixtures", link: "fixtures" },
  ];
  return (
    <div className='profile-links'>
      <ul>
        {actions.map((action) => (
          <a href={`#${action.link}`}>
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
