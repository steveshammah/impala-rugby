import impala_logo from "./images/impala-logo.png";
import impala_logo_1 from "./images/impala-1.jpg";
import impala_logo_2 from "./images/impala-2.jpg";

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
    { name: "Home", icon: "home" },
    { name: "Training Schedule", icon: "training" },
  ],
  sales: [
    { name: "Allowance & Payements", icon: "payments" },
    { name: "Sales", icon: "sales" },
    { name: "Tickets", icon: "tickets" },
  ],
  teams: [
    { name: "Gazelles", icon: "gazelles" },
    { name: "Boks", icon: "boks" },
    { name: "Ladies", icon: "ladies" },
    { name: "Swaras", icon: "swaras" },
    { name: "Age Grade", icon: "age-grade" },
  ],
  website: [
    { name: "Videos", icon: "videos" },
    { name: "Podcasts", icon: "podcasts" },
    { name: "Socials", icon: "socials" },
  ],
};
