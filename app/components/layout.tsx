import { Link, Outlet } from 'react-router'
import Navbar from './navbar'
import Footer from './footer'
import { APP_MENU, } from '~/const/app'
import type { Route } from './+types/layout';
import FloatingContact from './FloatingButton';
import { ArrowRight } from 'lucide-react';
import Loading from './LoadingScreen';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Home Property Consulting | Condo Specialists & Investment Experts",
    },
    {
      name: "description",
      content:
        "โฮม พร็อพเพอร์ตี้ คอนซัลติ้ง ตัวแทนอสังหาริมทรัพย์ระดับแนวหน้า บริการรับฝากขาย-เช่า คอนโดแบบครบวงจร โดยทีมงาน Condo Specialists ประสบการณ์สูง เพื่อความคุ้มค่าของการลงทุน",
    },
    {
      name: "keywords",
      content:
        "Home Property Consulting, รับฝากขายคอนโด, เช่าคอนโด, ที่ปรึกษาอสังหาริมทรัพย์, Condo Specialists, ลงทุนคอนโด, คอนโดมือสอง",
    },

    // Open Graph
    {
      property: "og:title",
      content:
        "Home Property Consulting | ที่ปรึกษาด้านการลงทุนและตัวแทนอสังหาฯ ครบวงจร",
    },
    {
      property: "og:description",
      content:
        "ไม่ใช่เพียงแค่ตัวแทนขาย แต่เราคือ Condo Specialists ที่พร้อมคัดสรรสิ่งที่ดีที่สุดให้กับนักลงทุนและผู้อยู่อาศัย",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: "https://www.homepropertyconsultinglimited.com/hero2.png",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:alt",
      content: "Home Property Consulting",
    },
  ];
}


export default function layout() {
  return (
    <main>
      
      <Navbar
        logo="/logo-black.jpg"
        brandName="Home Property Consulting Company Limited"
        links={APP_MENU}
        onLogoClick={() => window.location.href = "/"}
        className='fixed top-0 z-10'

        rightContent={
          <div className="flex gap-3">

            <Link
              to="/contact#contact"
              className="group relative flex items-center gap-4 bg-white px-10 py-5 overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-black text-[12px] font-bold uppercase tracking-[0.1em] group-hover:text-white transition-colors">
                รับคำปรึกษา
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 text-black group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        }
        // backgroundColor="bg-gray-50"
        sticky={true}
      />
      <FloatingContact />

      <Outlet />
      <Footer />
    </main>
  )
}
