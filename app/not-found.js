'use client'
import Link from "next/link"
import GallerySlider1 from '@/components/slider/GallerySlider1'
import Layout from "@/components/layout/Layout"


export default function Error404() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Error">
                {/* Error Section */}
                <section className="error-section">
                    <div className="auto-container">
                        <div className="image">
                            <img src="assets/images/resource/error.png" alt="" />
                        </div>
                        <h2>Page Not Found</h2>
                        <Link href="/" className="theme-btn btn-style-two clearfix"><span className="icon"></span>Return To Home</Link>
                    </div>
                </section>
                {/* End Error Section */}
                {/* Gallery Section */}
                <section className="gallery-section">
                    <div className="outer-container">
                        <GallerySlider1/>
                    </div>
                </section>
                {/* End Gallery Section */}

            </Layout>

        </>
    )
}
