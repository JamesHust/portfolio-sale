import { format } from "date-fns";

export const profile = {
  titleCommon: `I'm Nguyen Van A \n Sales Manager at FPT Smart Cloud`,
  email: "thanhdt66@fpt.com",
  subjectEmail: "Booking meeting for product",
  contentEmail: `Hello, I would like to book a product meeting on ${format(new Date(), "dd-MM-yyyy")}`,
  phoneNumber: "0396814752",
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Partners", link: "#partners" },
  { name: "Products", link: "#products" },
  { name: "Contact", link: "#contact" },
];

export const certificatesPartners = [
  {
    id: 1,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/ISO-27001.jpg",
    name: "ISO/IEC 27001:2013",
  },
  {
    id: 2,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2023/02/logo_chung_chi_2018.png",
    name: "ISO/IEC 27018:2019",
  },
  {
    id: 3,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/ISO-27017-scaled.jpg",
    name: "ISO/IEC 27017:2015",
  },
  {
    id: 4,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/pci-dss_2x.png",
    name: "PCI DSS",
  },
  {
    id: 5,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/MicrosoftTeams-image-4.png",
    name: "ISO/IEC 9001 2015",
  },
  {
    id: 6,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/05/logo-ccafee.png",
    name: "McAfee",
  },
  {
    id: 7,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/05/logo-net-app.png",
    name: "NetApp",
  },
  {
    id: 8,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/Vmware-e1658977050261.png",
    name: "VMware Cloud Verified",
  },
  {
    id: 9,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/Dell-e1658977121623.png",
    name: "Dell",
  },
  {
    id: 10,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/05/logo-red-hat.png",
    name: "ISO/IEC 27001:2013",
  },
  {
    id: 11,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/Veeam-e1658977082937.png",
    name: "Veeam",
  },
  {
    id: 12,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/BeyondTrust-e1658977145363.png",
    name: "BeyoundTrust",
  },
  {
    id: 13,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/Checkpoint.png",
    name: "Check Point",
  },
  {
    id: 14,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/Juniper-e1658977169951.png",
    name: "Juniper Networks",
  },
  {
    id: 15,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/BeyondTrust-e1658977145363.png",
    name: "BeyoundTrust",
  },
  {
    id: 16,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/Imperva-e1658977204853.png",
    name: "Imperva",
  },
  {
    id: 17,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/07/Microsoft.png",
    name: "Microsoft Gold Partner",
  },
  {
    id: 18,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2022/12/MicrosoftTeams-image-39.png",
    name: "Google Cloud Premier Partner",
  },
  {
    id: 19,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2023/04/1331x392.png",
    name: "CyRadar",
  },
  {
    id: 20,
    imgUrl: "https://fptcloud.com/wp-content/uploads/2024/01/CloudGO-logo-vertical.png",
    name: "CloudGO",
  },
];

export const productsList = [
  {
    id: 1,
    title: "Product 1",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    className: "md:col-span-2",
    thumbnail: "/img/exp1.svg",
  },
  {
    id: 2,
    title: "Product 2",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/img/exp2.svg",
  },
  {
    id: 3,
    title: "Product 3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/img/exp3.svg",
  },
  {
    id: 4,
    title: "Product 4",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    className: "md:col-span-2",
    thumbnail: "/img/exp4.svg",
  },
];
