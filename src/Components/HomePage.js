import React from 'react'
import SimpleSlider from './Slider'
// import SimpleSlider from './Slider'
// import SimpleImageSlider from 'react-simple-image-slider'
// import Slider from './Slider'

const homePage = () => {

    return (
        <div>
            <section>
                <div className="hero-image">
                    <div className="hero-text">
                        <div className="hero-container">

                            <h1>Your Go-To For<br /> All Things Gaming</h1>
                            <p> Introvert or Extrovert, We All Love Entertainment and Games

                    </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bbb">
                <h1>Coming Soon <br /> on <br /> Freddies Gaming</h1><br />
                <SimpleSlider />
            </section>


        </div>
    )
}
export default homePage;