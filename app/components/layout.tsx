import { Outlet } from 'react-router'
import Navbar from './navbar'
import Footer from './footer'
import { footerLinks, socialLinks } from '~/const/app'

export default function layout() {
    return (
        <main>

            <Navbar
                logo="/logo-blue.jpg"
                brandName="HPCCL"
                links={[
                    { label: "ซื้อ / ขาย", href: "/buy-sell" },
                    { label: "เช่า", href: "/rent" },
                    { label: "ทรัพย์ทั้งหมด", href: "/properties" },
                    { label: "เกี่ยวกับเรา", href: "/about" },
                    { label: "ติดต่อ", href: "/contact" }
                ]}
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
            <Footer
                companyName="HPCCL"
                year={2026}
                links={footerLinks}
                socialLinks={socialLinks}
                backgroundColor="bg-slate-900"
                textColor="text-gray-100"
            />
        </main>
    )
}
