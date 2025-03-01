'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'


export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/* Video Section */}
        <section className="video-section">
            <div className="image-layer" style={{ backgroundImage: 'url(assets/images/background/5.jpg)' }} ></div>
            <div className="auto-container">
                <div className="inner-container">
                    {/* Video Box */}
                    <div className="video-box">
                        <figure className="video-image">
                            <img src="assets/images/resource/video-image.jpg" alt=""/>
                        </figure>
                        <a onClick={() => setOpen(true)} className="lightbox-image overlay-box"><span className="flaticon-play-arrow"><i className="ripple"></i></span></a>
                    </div>
                    <div className="lower-content">
                        <h6>New Recipes video</h6>
                        <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae <br/> intellegam.</div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Video Section */}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
