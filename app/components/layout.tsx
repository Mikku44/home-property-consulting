import { Outlet } from 'react-router'
import Navbar from './navbar'
import Footer from './footer'
import { footerLinks, socialLinks } from '~/const/app'
import type { Route } from './+types/layout';

export function meta({ }: Route.MetaArgs) {
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
      content: "Home Property Consulting, รับฝากขายคอนโด, เช่าคอนโด, ที่ปรึกษาอสังหาริมทรัพย์, Condo Specialists, ลงทุนคอนโด, คอนโดมือสอง",
    },
    // Open Graph for better social media sharing (Facebook/Line)
    {
      property: "og:title",
      content: "Home Property Consulting | ที่ปรึกษาด้านการลงทุนและตัวแทนอสังหาฯ ครบวงจร",
    },
    {
      property: "og:description",
      content: "ไม่ใช่เพียงแค่ตัวแทนขาย แต่เราคือ Condo Specialists ที่พร้อมคัดสรรสิ่งที่ดีที่สุดให้กับนักลงทุนและผู้อยู่อาศัย",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
}

export default function layout() {
    return (
        <main>

            <Navbar
                logo="logo-black.jpg"
                brandName="HPCCL"
                links={[
                    { label: "หน้าแรก", href: "/" },
                    { label: "บริการของเรา", href: "/services" },
                    { label: "บทความ", href: "/blog" },
                    { label: "เกี่ยวกับเรา", href: "/about" },
                    { label: "ติดต่อ", href: "/contact" }
                ]}
                className='fixed top-0 z-10 bg-transparent shadow-none'
                textColor="text-(--secondary-color)"
                rightContent={
                    <div className="flex gap-3">

                        <button className="px-4 py-2 btn-primary">
                            Get Started
                        </button>
                    </div>
                }
                // backgroundColor="bg-gray-50"
                sticky={true}
            />

            <Outlet />
            <Footer/>
        </main>
    )
}
