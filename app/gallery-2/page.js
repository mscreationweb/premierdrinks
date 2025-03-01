
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {

    return (
        <>
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Gallery">
        
    
        {/* Gallery Page Section */}
        <section className="gallery-page-section-two">
            <div className="auto-container">
                <div className="row clearfix">
                
                    {/* Gallery Block Two */}
                    <div className="gallery-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <img src="assets/images/gallery/31.jpg" alt="" />
                                <div className="overlay-box">
                                    <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                    <div className="title">Us percipit urbanitas referrentur ea.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="gallery-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <img src="assets/images/gallery/32.jpg" alt="" />
                                <div className="overlay-box">
                                    <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                    <div className="title">Us percipit urbanitas referrentur ea.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="gallery-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <img src="assets/images/gallery/33.jpg" alt="" />
                                <div className="overlay-box">
                                    <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                    <div className="title">Us percipit urbanitas referrentur ea.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="gallery-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <img src="assets/images/gallery/34.jpg" alt="" />
                                <div className="overlay-box">
                                    <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                    <div className="title">Us percipit urbanitas referrentur ea.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="gallery-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <img src="assets/images/gallery/35.jpg" alt="" />
                                <div className="overlay-box">
                                    <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                    <div className="title">Us percipit urbanitas referrentur ea.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="gallery-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image-box">
                                <img src="assets/images/gallery/36.jpg" alt="" />
                                <div className="overlay-box">
                                    <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                    <div className="title">Us percipit urbanitas referrentur ea.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End Gallery Page Section */}
	
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