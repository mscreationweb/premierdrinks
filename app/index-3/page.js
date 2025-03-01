
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Blog from "@/components/sections/home3/Blog"
import Video from "@/components/sections/home3/video"
import Newsletter from "@/components/sections/home3/Newsletter"
import Recipe from "@/components/sections/home3/Recipe"
import Fluid from "@/components/sections/home3/Fluid"
import Recipe2 from "@/components/sections/home3/Recipe2"
import Instagram from "@/components/sections/home3/Instagram"
import PopularRecipe from "@/components/sections/home3/PopularRecipe"
import Blog2 from "@/components/sections/home3/Blog2"
import AboutNews from "@/components/sections/home3/AboutNews"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <Newsletter />
                <Recipe />
                <Fluid />
                <Recipe2 />
                <Instagram />
                <Instagram />
                <Blog />
                <Video />
                <AboutNews />
                <AboutNews />
                <PopularRecipe />
                <Blog2 />

                
                
            </Layout>
        </>
    )
}