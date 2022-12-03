import { useState } from "react";
import Shell from "@components/Layouts/DashboardShell";

import { useTeamStore } from "@stores/teamsStore";
import MemberForm from "../MemberForm";

const AddMember = () => {
  const [member, setMember] = useState({});
  const addMember = useTeamStore((state) => state.addMember);

  return (
    <Shell>
      <MemberForm
        member={member}
        setMember={setMember}
        submitHandler={addMember}
        label={"Add Member"}
      />
    </Shell>
  );
};

export default AddMember;
