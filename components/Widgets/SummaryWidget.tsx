import React from "react";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdAttachMoney,
  MdPeopleOutline,
  MdPerson,
} from "react-icons/md";

const SummaryWidget = () => {
  return (
    <div className="summary flex w-2/3">
      <div className="summary-meta flex flex-col shadow-lg rounded-md h-30 p-2 w-60 mx-4">
        <h3 className="text-xl font-semibold">Training</h3>
        <div className="flex p-2 items-center flex-1">
          <MdPerson className="icon text-4xl " />
          <i className="font-medium text-sm">+10</i>
          <MdArrowUpward className="icon text-green-700 text-2xl" />
        </div>
        <span>Compared to last Month</span>
      </div>
      <div className="summary-meta flex flex-col shadow-lg rounded-md h-30 p-2 w-60 mx-4">
        <h3 className="text-xl font-semibold">Socials</h3>
        <div className="flex p-2 items-center flex-1">
          <MdPeopleOutline className="icon text-4xl " /> 54,000
          <MdArrowUpward className="icon text-green-700 text-2xl" />
        </div>
        <span>Compared to last week</span>
      </div>

      <div className="summary-meta flex flex-col shadow-lg rounded-md h-30 p-2 w-60 mx-4">
        <h3 className="text-xl font-semibold">Tickets</h3>
        <div className="flex p-2 items-center flex-1">
          <MdAttachMoney className="icon text-4xl " /> +3000
          <MdArrowUpward className="icon text-green-700 text-2xl" />
        </div>
        <span>Compared to last month</span>
      </div>

      <div className="summary-meta flex flex-col shadow-lg rounded-md h-30 p-2 w-60 mx-4">
        <h3 className="text-xl font-semibold">Merchandise</h3>
        <div className="flex p-2 items-center flex-1">
          <MdAttachMoney className="icon text-4xl " /> -1000
          <MdArrowDownward className="icon text-red-700 text-2xl" />
        </div>
        <span>Compared to last month</span>
      </div>
    </div>
  );
};

export default SummaryWidget;
