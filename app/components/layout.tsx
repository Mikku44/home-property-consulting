import { Outlet } from 'react-router'
import Navbar from './navbar'
import Footer from './footer'
import { footerLinks, socialLinks } from '~/const/app'

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
