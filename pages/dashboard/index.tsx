import Summary from "@components/Summary/Summary";
import WidgetBg from "@components/Widgets/WidgetBg";
import React from "react";
import Shell from "@components/Layouts/DashboardShell";
import { MdHome, MdNotificationImportant, MdSettings } from "react-icons/md";

const Dashboard = () => {
  const links = [
    {
      label: "Home",
      url: "#",
      icon: MdHome,
    },
    {
      label: "Notification",
      url: "?notifications",
      icon: MdNotificationImportant,
    },
    {
      label: "Settings",
      url: "?settings",
      icon: MdSettings,
    },
  ];
  return (
    <Shell links={links}>
      <Summary />

      <div className="flex flex-col">
        <div className="p-2 flex flex-col justify-start">
          <WidgetBg />
        </div>
      </div>
    </Shell>
  );
};

export default Dashboard;
