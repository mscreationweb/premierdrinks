
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"

import Gallery from "@/components/sections/home2/Gallery"
import History from "@/components/sections/home2/History"
import Location from "@/components/sections/home2/Location"
import Menus from "@/components/sections/home2/Menus"
import Specials from "@/components/sections/home2/Specials"
import Contact from "@/components/sections/home2/Contact"


export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Specials />
                <Location />
                <Menus />
                <History />
                <Gallery />
                <Contact />
                
                

                
                
                
                
            </Layout>
        </>
    )
}