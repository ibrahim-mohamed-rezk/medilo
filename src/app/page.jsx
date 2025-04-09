import React from "react";
import HeroSection from "./Components/HeroSection";
import Section from "./Components/Section";
import CtaSection from "./Components/CtaSection";
import CtaSection1 from "./Components/CtaSection/CtaSection1";
import About from "./Components/About";
import CounterSection from "./Components/FunSection/CounterSection";
import Service from "./Components/Service";
import TeamSection from "./Components/TeamSection";
import BrandsSlider from "./Components/BrandsSection";
import ChooseUs from "./Components/ChooseUs";
import BlogSection from "./Components/BlogsSection";
import { getData } from "@/libs/axios/server";



const ctaData = {
  imageUrl: "/assets/img/cta_img_1.jpg",
  title: "Meet The Team Support Medical Service.",
  subtitle: "For us, there are no minor aspects, because a quality",
  buttonUrl: "/appointments",
  buttonText: "Booking Now",
};

const aboutData = {
  sectionSubtitle: "OUR ABOUT US",
  sectionTitle: "More Than 26+ Years About Provide Medical.",
  aboutText:
    "We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.",
  service:
    "There are many variations of pass available this medical service the team <a href='#''>READ MORE +</a>",
  experienceYears: "26+",
  experienceTitle: "Experience",
  videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
  videoText: "How We Work",
  iconboxes: [
    {
      imgUrl: "/assets/img/icons/about_icon_1.png",
      title: "Client Support",
      subtitle: "But must explain to you medical of and pain was.",
    },
    {
      imgUrl: "/assets/img/icons/about_icon_2.png",
      title: "Doctor Support",
      subtitle: "But must explain to you medical of and pain was.",
    },
  ],

  btnUrl: "/about",
  btnText: "About More",
  sectionImgUrl: "/assets/img/about_section_img_1.png",
  headImgUrl: "/assets/img/about_img_1.jpg",
};

const countersData = [
  {
    iconUrl: "/assets/img/icons/counter_icon_1.png",
    number: "567+",
    title: "Active Clients",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_2.png",
    number: "23K+",
    title: "Team Support",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_3.png",
    number: "241+",
    title: "Projects Complete",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_4.png",
    number: "16K+",
    title: "Award Winner",
  },
];

const serviceData = {
  subtitle: "OUR BEST SERVICE",
  title: "High-Quality Services This Doctor",
  description:
    "We are privileged to work with hundreds of future-thinking medial,<br> including many of the world’s top hardware, software, and<br> brands, feel safe and comfortable in establishing.",
  services: [
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_1.png",
      index: "01",
      title: "Pharmacology",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_2.png",
      index: "02",
      title: "Orthopedic",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_3.png",
      index: "03",
      title: "Hematology",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_4.png",
      index: "04",
      title: "Plastic Surgery",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_5.png",
      index: "05",
      title: "Neurology",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_6.png",
      index: "06",
      title: "Ophthalmology",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_7.png",
      index: "07",
      title: "Dental Care",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_8.png",
      index: "08",
      title: "Cardiology",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
  ],
  footerIcon: "/assets/img/icons/service_footer_icon_1.png",
  footerText:
    "Delivering tomorrow’s health care for your family.<br>medical this View",
  footerLink: "/",
  footerLinkText: "SEE MORE",
};

const teamData = {
  subtitle: "OUR TEAM MEMBER",
  title: "Meet Our Specialist This <br />Doctor Meeting",
  sliderData: [
    {
      name: "Dr. Norma Pedric",
      profession: "Neurologist",
      imageUrl: "/assets/img/team_1.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Dr. James Lewis",
      profession: "Neurologist",
      imageUrl: "/assets/img/team_3.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Dr. Sophia Anderson",
      profession: "Neurologist",
      imageUrl: "/assets/img/team_8.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Dr. Michael Thompson",
      profession: "Neurologist",
      imageUrl: "/assets/img/team_5.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Dr. David Wilson",
      profession: "Neurologist",
      imageUrl: "/assets/img/team_6.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
  ],
};

const brandData = [
  { image: "/assets/img/envato-logo.png", altText: "Brand 1" },
  { image: "/assets/img/envato-logo.png", altText: "Brand 2" },
  { image: "/assets/img/envato-logo.png", altText: "Brand 3" },
  { image: "/assets/img/envato-logo.png", altText: "Brand 4" },
  { image: "/assets/img/envato-logo.png", altText: "Brand 5" },
  { image: "/assets/img/envato-logo.png", altText: "Brand 6" },
];

const sectionData = {
  subtitle: "WHY CHOOSE US",
  title: "Medical Ready To Get This <br /> Health Solution.",
  services: [
    {
      iconUrl: "/assets/img/icons/service_icon_9.png",
      title: "Expert Care",
      subtitle: "Medical competitor research startup to financial",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_10.png",
      title: "Emergency Help",
      subtitle: "Medical competitor research startup to financial",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_11.png",
      title: "Qualified Doctors",
      subtitle: "Medical competitor research startup to financial",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_12.png",
      title: "Medical Advices",
      subtitle: "Medical competitor research startup to financial",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_13.png",
      title: "Medical Research",
      subtitle: "Medical competitor research startup to financial",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_14.png",
      title: "Affordable Prices",
      subtitle: "Medical competitor research startup to financial",
    },
  ],
};

const ctaData1 = {
  videoLink: "https://www.youtube.com/embed/rRid6GCJtgc",
  videoButtonText: "WATCH VIDEO",
  subtitle: "OUR WATCH VIDEO",
  title: "Professional Medical Care Measure Medical.",
  description:
    "We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.",
  buttonLink: "/contact",
  buttonText: "Video More",
  brandImage: "/assets/img/medical_brand.png",
};


const blogsData = {
  sectionTitle: "OUR LARGEST BLOG",
  sectionSubtitle: "Latest Posts &amp; Articles",
  postsData: [
    {
      title: "Medical Of This Working Health Blog",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      date: "May 02",
      category: "Medical",
      author: "Admin",
      thumbnail: "/assets/img/post_1.jpeg",
      btnText: "Read More",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "There Is Only One Thing That Is Hospital.",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      date: "May 02",
      category: "Medical",
      author: "Admin",
      thumbnail: "/assets/img/post_2.jpeg",
      btnText: "Read More",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "This Working World and Infection Prevention.",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      date: "May 02",
      category: "Medical",
      author: "Admin",
      thumbnail: "/assets/img/post_3.jpeg",
      btnText: "Read More",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "Medical Of This Working Health Blog",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      date: "May 02",
      category: "Medical",
      author: "Admin",
      thumbnail: "/assets/img/post_1.jpeg",
      btnText: "Read More",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
  ],
};

const page = async () => {

  const feachData = async () => {
    try {
      const response = await getData('home', {}, {});
      return response.data;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
  
  const homeData = await feachData()

  console.log(homeData)

  return (
    <div>
      {/* Start Hero Section */}
      <HeroSection data={{primarySlider:homeData?.sliders, secondarySlider:homeData?.sliders?.map((slider) => slider.image)}} />
      {/* End Hero Section */}

      {/* Start CTA Section */}
      <Section
        className={
          "cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden"
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      {/* End CTA Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter */}
      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>
      {/* End Counter */}

      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_gray_bg"}
      >
        <Service cardBg={"cs_gray_bg"} data={serviceData} />
      </Section>
      {/* End Service Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={"cs_team_section position-relative"}
      >
        <TeamSection
          hr={true}
          variant={"cs_pagination cs_style_2"}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}

      {/* Start Brand Section */}
      <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider data={brandData} />
      </Section>

      {/* End Brand Section */}

      {/* Start Why Choose Us Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_2.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section>
      {/* End Why Choose Us Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>
      {/* End CTA Section */}



      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section>
      {/* End Blog Solution */}
    </div>
  );
};

export default page;
