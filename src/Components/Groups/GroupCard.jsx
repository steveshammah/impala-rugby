import "./Groups.scss";
import impala from "../../Resources/impala-1.jpg";
import impala_2 from "../../Resources/impala-2.jpg";
import impala_logo from "../../Resources/impala-logo.png";
import { AddCircle } from "@material-ui/icons";

export const GroupCard = () => {
  const groups = [
    { id: 0, name: "Create Group", members: "", img: "" },
    { id: 1, name: "All Player", members: 178, img: impala_logo },
    { id: 2, name: "Management", members: 6, img: impala_logo },
    { id: 3, name: "Senior Team", members: 55, img: impala },
    { id: 5, name: "Women", members: 40, img: impala_2 },
    { id: 6, name: "U22", members: 60, img: impala_2 },
    { id: 7, name: "Floodies", members: "", img: impala_logo },
    { id: 8, name: "Social Media", members: 4, img: "" },
    { id: 9, name: "Tech Team", members: 1, img: "" },
    { id: 10, name: "Brand Development", members: "", img: "" },
    { id: 11, name: "Social", members: 200, img: impala_logo },
  ];
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
                src={group.img ? group.img : impala_2}
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
