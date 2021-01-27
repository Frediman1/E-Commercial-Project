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

                            <h1>Your Go To For<br /> All Things Gaming</h1>
                            <p> Introvert or Extrovert we all love Entertainment and Games

                    </p>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <SimpleSlider />
            </section>


        </div>
    )
}
export default homePage;