"use client";
import { useEffect, useRef, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Slider from "react-slick";
import Button from "../Buttons";
import Image from "next/image";
const HeroSection = ({ data }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    fade: false,
    swipeToSlide: true,
    direction: "rtl",
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    fade: false,
    swipeToSlide: true,
    vertical: true,
    arrows: false,
  };

  return (
    <>
      <section className="position-relative">
        <div className="cs_hero_slider_thumb slick-slider">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
          >
            {data?.primarySlider.map((items, index) => (
              <div className="cs_hero_slider_thumb_item" key={index}>
                <div
                  className="cs_hero cs_style_1 cs_center cs_bg_filed"
                  style={{
                    backgroundImage: `url(${items.image})`,
                  }}
                >
                  <div dir="rtl" className="container">
                    <div className="cs_hero_text">
                      <div className="cs_hero_text_in">
                        <h1
                          className="cs_hero_title"
                          dangerouslySetInnerHTML={{ __html: items.title }}
                        />
                        <p
                          className="cs_hero_subtitle"
                          dangerouslySetInnerHTML={{
                            __html: items.description,
                          }}
                        />
                        <div className="cs_hero_info">
                          <h3
                            dangerouslySetInnerHTML={{
                              __html: items.contactTitle,
                            }}
                          />
                          <p>Call Us at: +2 56 54 1453</p>
                        </div>
                        <div className="cs_hero_btns">
                          <Button
                            btnText={"Contact Now"}
                            variant={"cs_btn cs_style_1 cs_color_1"}
                            btnIcons={<FaAnglesRight />}
                            btnUrl={"/contact"}
                          />
                          <Button
                            btnText={"Discover More"}
                            variant={"cs_btn cs_style_1 cs_color_2"}
                            btnIcons={<FaAnglesRight />}
                            btnUrl={"/services"}
                          />
                        </div>
                      </div>
                      <div className="cs_hero_shape">
                        <Image
                          src={items.iconImgUrl}
                          className="cs_spinner_img"
                          alt="img"
                          width={142}
                          height={190}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="cs_hero_slider_nav slick-slider">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            {...settings2}
          >
            {data?.secondarySlider?.map((items, index) => (
              <div className="cs_hero_slider_thumb_mini" key={index}>
                <Image src={items} alt="img" width={90} height={92} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
