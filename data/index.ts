import { format } from "date-fns";

export const profile = {
  titleCommon: `Đào Tiến Thành \n Sales Manager FPT Smart Cloud`,
  email: "thanhdt66@fpt.com",
  subjectEmail: "Booking meeting for product",
  contentEmail: `Hello, I would like to book a product meeting on ${format(new Date(), "dd-MM-yyyy")}`,
  phoneNumber: "0396814752",
};

export const videos = [
  {
    id: 1,
    title: "Giới thiệu FPT Smart Cloud",
    src: "https://www.youtube.com/embed/cclk7hUFSbs?si=lsu3_txhdYCl2hGp&autoplay=1",
  },
  {
    id: 2,
    title: "Hệ thống giáo dục trực tuyến VioEdu bắt tay cùng FPT Cloud trên hành trình tăng trưởng thần tốc",
    src: "https://www.youtube.com/embed/PbsWzCyGknM?si=rIlTAEgDnHpZJp9r&autoplay=1",
  },
  {
    id: 3,
    title: "FPT Cloud giải quyết bài toán tăng trưởng của chuỗi 600 nhà thuốc Long Châu",
    src: "https://www.youtube.com/embed/5fV_8ThcrKQ?si=mroWU0qYdIcB5HkI&autoplay=1",
  },
  {
    id: 4,
    title: "FPT GPU Server - Tăng tốc ứng dụng yêu cầu hiệu năng cao bằng bộ xử lý GPU chuyên dụng",
    src: "https://www.youtube.com/embed/6nS4W-5St8k?si=6s9rsWmkg_7TYKhV&autoplay=1",
  },
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
    title: "Hồ sơ năng lực",
    desc: "FPT Cloud sở hữu +80 dịch vụ Hạ tầng (IaaS) tới Nền tảng (PaaS), đồng thời mang đến cho khách hàng hệ sinh thái đa dạng ứng dụng  từ FPT và đối tác.",
    className: "md:col-span-2",
    thumbnail: "/img/pd_1.png",
    href: "https://s3-sgn09.fptcloud.com/public/shared/CapacityCloud_Vie__view_1.2.pdf",
  },
  {
    id: 2,
    title: "Câu chuyện thành công",
    desc: "FPT Cloud là đối tác tin cậy, đồng hành cùng +3000 doanh nghiệp Việt trên hành trình chuyển đổi số bền vững.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/img/pd_2.png",
    href: "https://s3-sgn09.fptcloud.com/public/shared/FPT_Cloud_-_Case_Study.pdf",
  },
  {
    id: 3,
    title: "Tờ rơi",
    desc: "Chúng tôi hợp tác cùng những đối tác hàng đầu để mang đến cho khách hàng những dịch vụ\n" + "ưu việt.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/img/pd_3.png",
    href: "https://fptsmartcloud.vn/1m6n1",
  },
  {
    id: 4,
    title: "Website",
    desc: "Nền tảng FPT Cloud đạt chứng nhận cao nhất về các tiêu chuẩn chất lượng & an toàn thông tin.",
    className: "md:col-span-2",
    thumbnail: "/img/pd_4.png",
    href: "https://fptcloud.com/",
  },
];

export const productsInterest = [
  {
    id: "pd_interest_1",
    label: "FPT Cloud Server",
    value: "FPT Cloud Server",
  },
  {
    id: "pd_interest_2",
    label: "FPT Network",
    value: "FPT Network",
  },
  {
    id: "pd_interest_3",
    label: "FPT Cloud Backup & DR",
    value: "FPT Cloud Backup & DR",
  },
  {
    id: "pd_interest_4",
    label: "FPT Storage",
    value: "FPT Storage",
  },
  {
    id: "pd_interest_5",
    label: "FPT Security",
    value: "FPT Security",
  },
  {
    id: "pd_interest_6",
    label: "FPT Database",
    value: "FPT Database",
  },
  {
    id: "pd_interest_7",
    label: "FPT Container",
    value: "FPT Container",
  },
  {
    id: "pd_interest_8",
    label: "FPT Monitoring",
    value: "FPT Monitoring",
  },
  {
    id: "pd_interest_9",
    label: "FPT Integration",
    value: "FPT Integration",
  },
];
