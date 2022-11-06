import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Shell from "../../../../components/DashboardShell";
import { useTeamStore } from "../../../../contexts/teamsStore";
import MemberForm from "../MemberForm";
import { MdArrowBackIos, MdDocumentScanner } from "react-icons/md";

const EditMember = () => {
  const router = useRouter();
  const memberId = String(router?.query?.id);
  const [toEditMember, setToEditMember] = useState({});
  const member = useTeamStore((state) => state.member);
  const getMember = useTeamStore((state) => state.getMember);
  const edtiMember = useTeamStore((state) => state.editMember);

  useEffect(() => {
    getMember(memberId);
    setToEditMember(member);
    return () => {
      setToEditMember({});
    };
  }, [member.contacts]);

  const links = [
    {
      label: "Back",
      url: "/dashboard/members",
      icon: MdArrowBackIos,
    },
    {
      label: "Editing...",
      url: "#",
      icon: MdDocumentScanner,
    },
  ];
  return (
    <Shell links={links}>
      <MemberForm
        member={toEditMember}
        setMember={setToEditMember}
        submitHandler={edtiMember}
        label={"Edit Member"}
      />
    </Shell>
  );
};

export default EditMember;
