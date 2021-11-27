import impala_logo from "./images/impala-logo.png";
import impala_logo_1 from "./images/impala-1.jpg";
import impala_logo_2 from "./images/impala-2.jpg";
import profile_picture from "./images/profile-picture.jpg";

import image1 from "./images/DSC_0840.jpg";
import image2 from "./images/DSC_4411.jpg";
import image3 from "./images/DSC_8204.jpg";
import image4 from "./images/DSC_9540.jpg";

// Logo
export const logos = { impala_logo, impala_logo_1, impala_logo_2 };

export const coverPhotos = { image1, image2, image3, image4 };

export const groups = [
  { id: 0, name: "Create Group", members: "", img: "" },
  { id: 1, name: "All Player", members: 178, img: impala_logo },
  { id: 2, name: "Management", members: 6, img: impala_logo },
  { id: 3, name: "Senior Team", members: 55, img: impala_logo_1 },
  { id: 5, name: "Women", members: 40, img: impala_logo_2 },
  { id: 6, name: "U22", members: 60, img: impala_logo_2 },
  { id: 7, name: "Floodies", members: "", img: impala_logo },
  { id: 8, name: "Social Media", members: 4, img: "" },
  { id: 9, name: "Tech Team", members: 1, img: "" },
  { id: 10, name: "Brand Development", members: "", img: "" },
  { id: 11, name: "Social", members: 200, img: impala_logo },
];

export const menuLinks = {
  dashboard: [
    { name: "Home", icon: "home", url: "home" },
    { name: "Training Schedule", icon: "training", url: "training" },
    { name: "Allowance & Payements", icon: "payments", url: "payments" },
    { name: "Sales", icon: "sales", url: "sales" },
  ],
  league: [
    { name: "League", icon: "default", url: "tournament/league" },
    { name: "7s", icon: "default", url: "tournament/sevens" },
    { name: "Floodies", icon: "default", url: "tournament/floodies" },
    { name: "Match Center", icon: "default", url: "matchcenter" },
    { name: "Team Statistics", icon: "default", url: "teamstats" },
  ],
  teams: [
    { name: "Gazelles", icon: "gazelles", url: "teams/gazelles" },
    { name: "Boks", icon: "boks", url: "teams/boks" },
    { name: "Ladies", icon: "ladies", url: "teams/ladies" },
    { name: "Age Grade", icon: "age-grade", url: "teams/agegrade" },
  ],
  website: [
    { name: "Videos", icon: "videos", url: "videos" },
    { name: "Podcasts", icon: "podcasts", url: "podcasts" },
    { name: "Socials", icon: "socials", url: "socials" },
  ],
};

// Nav Links
export const navLinks = [
  { name: "home", url: "home" },
  { name: "home", url: "home" },
  { name: "channel", url: "channel" },
  { name: "groups", url: "groups" },
  { name: "about", url: "about" },
];
export const profile = profile_picture;
