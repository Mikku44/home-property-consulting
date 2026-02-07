import { FaFacebook, FaYoutube } from "react-icons/fa";

export const footerLinks = [
  {
    title: "บริการของเรา",
    items: [
      { label: "ซื้อ / ขาย", href: "/buy-sell" },
      { label: "ขายฝาก ดอกเบี้ย 1.25%", href: "/consignment " },
      { label: "เช่า / ให้เช่า", href: "/rent" },
      { label: "ประเมินราคา", href: "/valuation" }
    ]
  },
  {
    title: "ติดต่อ & ข้อมูล",
    items: [
      { label: "เกี่ยวกับเรา", href: "/about" },
      { label: "ติดต่อเรา", href: "/contact" },
      { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" }
    ]
  }
];





export const SOCIAL_LINKS = [
  { 
    Icon: FaFacebook, 
    href: "https://www.facebook.com/HomePropertyAcademy/",
    label: "Facebook"
  },
  { 
    Icon: FaYoutube, 
    href: "https://www.youtube.com/@homepropertyconsulting",
    label: "YouTube"
  }
];

export const APP_MENU = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการของเรา", href: "/services" },
  { label: "บทความ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ติดต่อ", href: "/contact" }
]