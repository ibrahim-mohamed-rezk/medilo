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
      <HeroSection
        data={{
          primarySlider: homeData?.sliders,
          secondarySlider: homeData?.sliders?.map((slider) => slider.image),
        }}
      />
      {/* End Hero Section */}

      {/* Start CTA Section */}
      <Section
        className={
          "cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden"
        }
      >
        <CtaSection />
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
        <About data={homeData.about} />
      </Section>
      {/* End About Section */}

      {/* Start Counter */}
      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection />
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
        <Service cardBg={"cs_gray_bg"} services={homeData.servicetypes} />
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
          doctors={homeData.doctors}
        />
      </Section>
      {/* End Team Section */}

      {/* Start Brand Section */}
      {/* <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider data={brandData} />
      </Section> */}

      {/* End Brand Section */}

      {/* Start Why Choose Us Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_2.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section> */}
      {/* End Why Choose Us Section */}

      {/* Start CTA Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section> */}
      {/* End CTA Section */}

      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection blogs={homeData.blogs} />
      </Section>
      {/* End Blog Solution */}
    </div>
  );
};

export default page;
