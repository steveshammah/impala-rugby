import React from "react";
import MemberStatistics from "./MemberStatistics";

interface Props {
  member: any[];
}
const MemberAbout = ({ member }: any) => {
  return (
    <section className="member-about p-2 flex flex-col items-center ">
      <h2 className="font-bold text-2xl">Biography</h2>
      <div className="member-about-text sm:w-2/3 w-full flex items-center  p-2 border-slate-100 border-2 shadow-md">
        <p className="leading-8 tracking-widest ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          cupiditate, modi numquam ad illum voluptatem incidunt ut impedit
          similique sed eaque eum consectetur nihil ipsa facilis ipsum officia
          maiores ea expedita accusamus aut odit. Velit sapiente ipsum quia aut
          temporibus autem rerum omnis exercitationem nostrum et, saepe nobis
          sint totam ea hic neque sit fuga voluptates consequuntur. Voluptates,
          minima facere! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Aspernatur numquam tempora iusto voluptates cum praesentium
          obcaecati sint dolorem. Omnis, eius?
        </p>
      </div>
      <MemberStatistics member={member} />
    </section>
  );
};

export default MemberAbout;
