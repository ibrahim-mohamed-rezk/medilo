"use client";
import { useState } from "react";
import { FaAnglesLeft, FaRegCircleCheck } from "react-icons/fa6";
import Button from "../Buttons";
import SectionHeading from "../SectionHeading";
import VideoModal from "../VideoSection/Modal";
import Image from "next/image";
import { aboutData } from "@/libs/data/data";

const About = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const handelClick = () => {
    setIframeSrc(`${data.videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  
  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6 order-lg-2">
            <div className="cs_about_thumb">
              <div className="cs_about_thumb_1">
                <Image
                  src={aboutData.headImgUrl}
                  alt="img"
                  width={444}
                  height={505}
                />
                <a
                  className="cs_about_player_btn cs_video_open"
                  onClick={handelClick}
                >
                  <span className="cs_player_btn cs_center">
                    <span />
                  </span>
                  <span className="cs_about_play_btn_text">كيف نعمل</span>
                </a>
              </div>
              <div className="cs_about_thumb_2">
                <Image
                  src="/assets/img/about_img_2.jpg"
                  alt="img"
                  width={372}
                  height={289}
                />
                <Image
                  src="/assets/img/icons/about_shape_1.png"
                  className="cs_about_thumb_shape_2"
                  alt="img"
                  width={129}
                  height={128}
                />
              </div>
              <div className="cs_experience_box cs_center" data-aos="zoom-in">
                <p className="cs_experience_box_number">+26</p>
                <p className="cs_experience_box_title">خبرة</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1" data-aos="fade-right">
            <div className="cs_about_content" dir="rtl">
              <SectionHeading
                SectionSubtitle={"من نحن"}
                SectionTitle={"أكثر من 26+ عامًا من تقديم الخدمات الطبية"}
              />

              <p className="cs_about_text">
                نحن محظوظون بالعمل مع مئات المؤسسات الطبية المتطلعة للمستقبل،
                بما في ذلك العديد من أفضل الأجهزة والبرمجيات والعلامات التجارية
                في العالم، مما يجعلهم يشعرون بالأمان والراحة في التعامل معنا.
              </p>
              <div className="row cs_gap_y_30">
                {aboutData.iconboxes.map((box, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="cs_iconbox cs_style_1">
                      <div className="cs_iconbox_head">
                        <div className="cs_iconbox_icon cs_center">
                          <Image
                            src={box.imgUrl}
                            alt="img"
                            width={26}
                            height={26}
                          />
                        </div>
                        <h3 className="cs_iconbox_title m-0">{box.title}</h3>
                      </div>
                      <p className="cs_iconbox_subtitle mb-0">{box.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cs_about_iconbox">
                <div className="cs_about_iconbox_icon cs_center">
                  <i>
                    <FaRegCircleCheck />
                  </i>
                </div>
                <p
                  className="cs_about_iconbox_subtitle"
                  dangerouslySetInnerHTML={{ __html: aboutData.service }}
                />
              </div>
              <Button
                btnText={aboutData.btnText}
                variant={"cs_btn cs_style_1 cs_color_1"}
                btnIcons={<FaAnglesLeft />}
                btnUrl={aboutData.btnText}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_section_img">
        <Image
          src={aboutData.sectionImgUrl}
          alt="img"
          width={228}
          height={494}
        />
      </div>
      {/* Video Modal  */}
      <VideoModal
        isTrue={toggle}
        iframeSrc={data.video}
        handelClose={handelClose}
      />
    </>
  );
};

export default About;
