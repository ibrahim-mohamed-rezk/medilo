"use client"
import Slider from "react-slick";
import Button from "../Buttons";
import { FaAngleRight } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { homeBlogsData } from "@/libs/data/data";

const BlogSection = ({ blogs = [] }) => {
  const settings = {
    dots: true,
    infinite: blogs?.length > 3,
    speed: 1000,
    slidesToShow: 4,
    fade: false,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: "cs_pagination cs_style_2",
    rtl: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: Math.min(2, blogs?.length || 1),
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

  if (!blogs || blogs.length === 0) {
    return null;
  }

  const isValidImage = (url) => {
    return typeof url === 'string' && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
  };

  return (
    <>
      <div className="container">
        <SectionHeading
          SectionSubtitle={homeBlogsData.sectionTitle}
          SectionTitle={homeBlogsData.sectionSubtitle}
          variant={"text-center"}
        />

        <div className="cs_height_50 cs_height_lg_50" />
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Slider {...settings}>
                {blogs.map((post, index) => (
                  <div key={index} className="cs_slide">
                    <article className="cs_post cs_style_1">
                      <Link
                        href={post.slug || "#"}
                        className="cs_post_thumbnail position-relative"
                        style={{
                          width:"100%",
                        }}
                      >
                        <Image
                          src={
                            isValidImage(post.image)
                              ? post.image
                              : "/assets/img/post_1.jpeg"
                          }
                          alt={post.title || "Blog post image"}
                          width={525}
                          height={371}
                        />
                        <div className="cs_post_category position-absolute">
                          {post.service_type || "General"}
                        </div>
                      </Link>
                      <div className="cs_post_content position-relative">
                        <div className="cs_post_meta_wrapper">
                          <div className="cs_posted_by cs_center position-absolute">
                            {post.user.updated_at
                              ? new Date(post.user.updated_at).toLocaleString(
                                  "default",
                                  { month: "short" }
                                ) +
                                " " +
                                new Date(post.user.updated_at).getDate()
                              : "No date"}
                          </div>
                          <div className="cs_post_meta_item">
                            <Image
                              src={
                                isValidImage(post.user?.image)
                                  ? post.user.image
                                  : "/assets/img/icons/post_user_icon.png"
                              }
                              alt="User avatar"
                              width={15}
                              height={14}
                            />
                            <span>By: {post.user?.name || "Anonymous"}</span>
                          </div>
                          <div className="cs_post_meta_item">
                            <Image
                              src={
                                isValidImage(post.comment_icon)
                                  ? post.comment_icon
                                  : "/assets/img/icons/post_comment_icon.png"
                              }
                              alt="Comment icon"
                              width={14}
                              height={13}
                            />
                            <span>Comment</span>
                          </div>
                        </div>
                        <h3 className="cs_post_title">
                          <Link href={post.slug || "#"}>
                            {post.title || "Untitled Post"}
                          </Link>
                        </h3>
                        <p className="cs_post_subtitle">
                          {post.description || "No description available"}
                        </p>

                        <Button
                          variant={"cs_post_btn"}
                          btnIcons={<FaAngleRight />}
                          btnUrl={post.slug || "#"}
                          btnText={"اقراء المزيد"}
                        />

                        <div className="cs_post_shape position-absolute" />
                      </div>
                    </article>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
