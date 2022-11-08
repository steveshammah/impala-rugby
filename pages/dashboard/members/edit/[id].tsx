import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Shell from "../../../../components/Layouts/DashboardShell";
import { Member, useTeamStore } from "../../../../stores/teamsStore";
import MemberForm from "../MemberForm";
import { MdArrowBackIos, MdDocumentScanner } from "react-icons/md";
import { IFB } from "../../../../stores/articleStore";

const EditMember = () => {
  const router = useRouter();
  const memberId = String(router?.query?.id);
  const [toEditMember, setToEditMember] = useState<Member | IFB>();
  const member = useTeamStore((state) => state.member);
  const getMember = useTeamStore((state) => state.getMember);
  const edtiMember = useTeamStore((state) => state.editMember);

  useEffect(() => {
    getMember(memberId);
    setToEditMember(member);
    return () => {
      setToEditMember(undefined);
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
