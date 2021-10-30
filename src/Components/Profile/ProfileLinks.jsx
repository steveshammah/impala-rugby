import "./Profile.scss";

export const ProfileLinks = () => {
  const actions = [
    "Management",
    "Training Schedule",
    "Allowance Allocation",
    "Senior Team",
    "Ladies",
    "Swaras",
    "Fixtures",
  ];
  return (
    <div className='profile-links'>
      <ul>
        {actions.map((action) => (
          <a href=''>
            <li>{action}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};
