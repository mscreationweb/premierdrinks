import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Blog from "@/components/sections/home1/Blog"

import Testimonial from "@/components/sections/home1/Testimonial"
import Gallery from "@/components/sections/home1/Gallery"
import Juice from "@/components/sections/home1/Juice"
import Beverage from "@/components/sections/home1/Beverage"
import Deal from "@/components/sections/home1/Deal"
import Recipe from "@/components/sections/home1/Recipe"
import Fluid from "@/components/sections/home1/Fluid"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3}>
                <Banner />
                <Juice/>
                {/* <Fluid/> */}
                <Beverage/>
                <Deal/>
                {/* <Recipe/> */}
                {/* <Fluid/> */}
                {/* <Testimonial /> */}
                {/* <Blog /> */}
                {/* <Gallery /> */}

                
                
            </Layout>

        </>
    )
}