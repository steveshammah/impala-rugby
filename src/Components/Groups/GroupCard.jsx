import "./groups.scss";
import { AddCircle } from "@material-ui/icons";
import { groups, logos } from "../../resources/resources";

export const GroupCard = () => {
  return (
    <>
      {groups.map((group) => (
        <div className='group'>
          {group.members && <span className='active'></span>}

          <div className='image'>
            {group.id === 0 ? (
              <AddCircle className='group-logo' />
            ) : (
              <img
                src={group.img ? group.img : logos.impala_logo_2}
                alt='GROUP LOGO'
                className='group-logo'
              />
            )}
          </div>

          <div className='group-text'>
            <strong>{group.name}</strong>
            {group.members && <small>{group.members} Members</small>}
          </div>
        </div>
      ))}
    </>
  );
};
