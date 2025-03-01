
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {

    return (
        <>
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Gallery">
        
        {/* Gallery Page Section */}
        <section className="gallery-page-section">
            <div className="outer-container">
                <div className="masonry-items-container row no-gutters clearfix">
                    
                
                    {/* Gallery Block Two */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/25.jpg" alt="" />
                                    <div className="overlay-box">
                                        <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                        <div className="title">Us percipit urbanitas referrentur ea.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/26.jpg" alt="" />
                                    <div className="overlay-box">
                                        <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                        <div className="title">Us percipit urbanitas referrentur ea.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/29.jpg" alt="" />
                                    <div className="overlay-box">
                                        <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                        <div className="title">Us percipit urbanitas referrentur ea.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="gallery-block-two masonry-item">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/27.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="gallery-block-two masonry-item">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/28.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="gallery-block-two masonry-item">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/30.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
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