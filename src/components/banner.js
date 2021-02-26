import React from 'react'

const Banner = () => {

    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-columns">

                        <div className="grid-child-elem"></div>
                        <div className="grid-child-elem"></div>
                        
                        <div className="grid-child-elem">
                            <div className="banner-text">
                                <p className="left-super-text" data-aos="fade-up" data-aos-duration="3000" >
                                    <span>Por</span>
                                </p>
                                <h1 data-aos="fade-up" data-aos-duration="2000" >
                                    Segunda
                                </h1>
                                <p className="right-sub-text" data-aos="fade-up" data-aos-duration="3000" >
                                    <span>Vez</span>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;