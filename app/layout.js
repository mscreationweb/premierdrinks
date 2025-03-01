import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
import "public/assets/css/responsive.css"



import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import {niconne, poppins, tangerine} from '@/lib/font'
export const metadata = {
    title: 'premierdrinks',
    description: 'Premier Drinks offers a premium selection of beverages, including soft drinks, energy drinks, and juices. Committed to quality and taste, it delivers refreshing options for every occasion.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${niconne.variable} ${poppins.variable} ${tangerine.variable}`}>
            <body>{children}</body>
        </html>
    )
}
