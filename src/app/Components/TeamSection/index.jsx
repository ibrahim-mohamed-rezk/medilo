'use client';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import Slider from "react-slick";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Link from "next/link";
import Image from "next/image";
import { homeDocorsData } from "@/libs/data/data";

const TeamSection = ({ doctors = [], bgColor, variant = "cs_pagination cs_style_1", hr }) => {
  const settings = {
    dots: true,
    infinite: doctors?.length > 3,
    speed: 1000,
    slidesToShow: Math.min(3, doctors?.length || 1),
    slidesToScroll: 1,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: variant,
    rtl: true,
    arrows: doctors?.length > 3,
    horizontal: true,
    vertical: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: Math.min(3, doctors?.length || 1),
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: Math.min(2, doctors?.length || 1),
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  if (!doctors || doctors.length === 0) {
    return null;
  }

  return (
    <div className="about-team">
      <div className="container">
        <SectionHeading
          SectionSubtitle={homeDocorsData?.subtitle || "Our Team"}
          SectionTitle={homeDocorsData?.title || "Meet Our Doctors"}
          variant={"text-center"}
        />

        <div className="cs_height_50 cs_height_lg_50" />
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Slider {...settings}>
                {doctors.map((item, index) => (
                  <div className="cs_slide" key={index}>
                    <div
                      className={`cs_team cs_style_1 ${
                        bgColor ? "cs_accent_bg" : "cs_blue_bg"
                      } `}
                    >
                      <div
                        className={`cs_team_shape ${
                          bgColor ? "cs_blue_bg" : "cs_accent_bg "
                        }`}
                      />
                      <Link href={item?.slug || "#"} className="cs_team_thumbnail">
                        {item?.image && (
                          <Image
                            src={typeof item.image === 'string' && 
                              /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(item.image) 
                              ? item.image : '/assets/img/team_1.jpg'}
                            alt={item.name || "Doctor"}
                            width={306}
                            height={429}
                          />
                        )}
                      </Link>
                      <div className="cs_team_bio">
                        <h3 className="cs_team_title cs_extra_bold mb-0">
                          <Link href={item?.slug || "#"}>{item?.name || `Doctor ${index + 1}`}</Link>
                        </h3>
                        <p className="cs_team_subtitle">{item?.professional || "Specialist"}</p>
                        {item?.showSocial && (
                          <div className="cs_social_btns cs_style_1">
                            {item?.facebook && (
                              <Link href={item.facebook} className="cs_center">
                                <i>
                                  <FaFacebookF />
                                </i>
                              </Link>
                            )}
                            {item?.pinterest && (
                              <Link href={item.pinterest} className="cs_center">
                                <i>
                                  <FaPinterestP />
                                </i>
                              </Link>
                            )}
                            {item?.twitter && (
                              <Link href={item.twitter} className="cs_center">
                                <i>
                                  <FaTwitter />
                                </i>
                              </Link>
                            )}
                            {item?.instagram && (
                              <Link href={item.instagram} className="cs_center">
                                <i>
                                  <FaInstagram />
                                </i>
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {bgColor && (
        <div className="cs_team_bg_dark cs_blue_bg">
          <div className="cs_team_bg_white cs_white_bg" />
        </div>
      )}
      <Spacing lg={80} md={120} />

      {hr && <hr />}
    </div>
  );
};

export default TeamSection;
