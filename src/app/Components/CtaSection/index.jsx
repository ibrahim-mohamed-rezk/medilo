import { FaAnglesLeft } from "react-icons/fa6";
import Button from "../Buttons";
import Image from "next/image";

const CtaSection = () => {

  return (
    <>
      <div className="container">
        <div className="cs_cta_in">
          <div className="cs_cta_left">
            <div className="cs_cta_thumb" data-aos="fade-right">
              <Image
                src={"/assets/img/cta_img_1.jpg"}
                alt="img"
                width={200}
                height={190}
              />
            </div>
            <div className="cs_cta_info">
              <h2 className="cs_cta_title">قابل فريق الدعم الطبي.</h2>
              <p className="cs_cta_subtitle">
                بالنسبة لنا، لا توجد جوانب ثانوية، لأن الجودة هي الأساس
              </p>
            </div>
          </div>
          <div className="cs_cta_right">
            <Button
              btnText={"احجز الآن"}
              variant={"cs_btn cs_style_1 cs_color_3"}
              btnIcons={<FaAnglesLeft />}
              btnUrl={"/appointments"}
            />
          </div>
        </div>
      </div>
      <div className="cs_cta_shape" />
    </>
  );
};

export default CtaSection;
