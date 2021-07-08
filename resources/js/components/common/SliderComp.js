import React from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import bmx1 from "../../../img/bmx1.jpg";
import bmx2 from "../../../img/bmx2.jpg";
import bmx3 from "../../../img/bmx3.jpg";

class SliderComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const settings = {
            dots: false,
            fade: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            // <div className="container-fluid">
            //     <div className="row">
            //         <div className="col">
            <Slider {...settings}>
                <div className="indexImg1"></div>
                <div className="indexImg2"></div>
                <div className="indexImg3"></div>
            </Slider>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default SliderComp;
