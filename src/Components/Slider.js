import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
    {
        url: "https://thedirect.s3.amazonaws.com/media/article_full/hm3_720.jpg",
        name: "Photo 1"
    },
    {
        url: "https://outriders.square-enix-games.com/static/188f535406586f2cf8ca273662f2151a/metadata.jpg",
        name: "Photo 2"
    },
    { url: "https://i.ytimg.com/vi/jziktWnfJcA/maxresdefault.jpg", name: "Photo 1" },
    {
        url: "https://asia.playstation.com/content/dam/pscom/hk/latest-news/2019/20191031-nioh2/nioh2.jpg",
        name: "Photo 3"
    },
    {
        url: "https://blog.playstation.com/tachyon/2020/09/50383822476_93da479b4d_k.jpg?resize=1088,612&crop_strategy=smart",
        name: "Photo 4"
    },
    { url: "https://news.otakukart.com/wp-content/uploads/2020/01/Yajuza-7.jpg" },
    {
        url: "https://i0.wp.com/theplaystationbrahs.com/wp-content/uploads/2020/09/returnal-ps5.jpg?fit=1337%2C762&ssl=1",
        name: "Photo 5"
    }
];

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: "slides",
        autoplay: true

    };
    return (
        <div className="App2"  >
            <Slider {...settings}>
                {images.map((image) => {
                    return (
                        <img width="100%" src={image.url} alt="" />
                    )
                })}
                {/* <div>
                <h3>1</h3>


            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div> */}
            </Slider>
        </ div>
    );
}