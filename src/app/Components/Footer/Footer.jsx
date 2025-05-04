import Image from 'next/image';
import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPinterestP,
  FaRegClock,
} from 'react-icons/fa6';

const data = {
  backgroundImage: 'assets/img/footer_bg.jpg',
  logo: '/assets/img/footer_logo.svg',
  contact: [
    {
      icon: 'fa-regular fa-clock',
      text: 'ساعات عمل الحكومة: <br /> الاثنين - الجمعة: 8.00 صباحًا - 6.00 مساءً.',
    },
    {
      icon: 'fa-solid fa-location-dot',
      text: '13/أ، ميراندا حليم سيتي.',
    },
    {
      icon: 'fa-solid fa-phone',
      text: '099 695 695 35',
    },
  ],
  socialLinks: [
    { href: '#', icon: 'fa-brands fa-facebook-f' },
    { href: '#', icon: 'fa-brands fa-pinterest-p' },
    { href: '#', icon: 'fa-brands fa-twitter' },
    { href: '#', icon: 'fa-brands fa-instagram' },
  ],
  widgets: [
    {
      title: 'الخدمات',
      links: [
        { href: '#', text: 'لماذا تختارنا' },
        { href: '#', text: 'حلولنا' },
        { href: '#', text: 'شركاؤنا' },
        { href: '#', text: 'قيمنا الأساسية' },
        { href: '#', text: 'مشاريعنا' },
      ],
    },
    {
      title: 'روابط سريعة',
      links: [
        { href: '#', text: 'المقيمين' },
        { href: '#', text: 'الأعمال' },
        { href: '#', text: 'الخدمة عبر الإنترنت' },
        { href: '#', text: 'الزيارة' },
        { href: '#', text: 'التوظيف' },
      ],
    },
  ],
  recentPosts: [
    {
      href: '/blog/blog-details',
      image: 'assets/img/recent_post_1.png',
      date: '23 يونيو 2024',
      title: 'نقدم حلول شاملة لمدونة يورك',
    },
    {
      href: '/blog/blog-details',
      image: 'assets/img/recent_post_2.png',
      date: '20 يونيو 2024',
      title: 'الطب في هذه الصحة العملية',
    },
  ],
  copyrightText: 'حقوق النشر © 2024 ميديلو، جميع الحقوق محفوظة.',
  footerMenu: [
    { href: 'about.html', text: 'من نحن' },
    { href: '#', text: 'الفعاليات' },
    { href: 'blog.html', text: 'الأخبار' },
    { href: 'service.html', text: 'الخدمات' },
  ],
};

const Footer = () => {
  const data = {
    backgroundImage: '/assets/img/footer_bg.jpg',
    logo: '/assets/img/footer_logo.svg',
    contactText:
      'ساعات عمل الحكومة: <br /> الاثنين - الجمعة: 8.00 صباحًا - 6.00 مساءً.',
    contactText2: '13/أ، ميراندا حليم سيتي.',
    contactText3: '099 695 695 35',
    facebookHref: '/',
    pinterestHref: '/',
    twitterHref: '/',
    instagramHref: '/',
    widgets: [
      {
        title: 'الخدمات',
        links: [
          { href: '/service/service-details', text: 'جراحة التجميل' },
          { href: '/service/service-details', text: 'علم الأدوية' },
          { href: '/service/service-details', text: 'رعاية الأسنان' },
          { href: '/service/service-details', text: 'رعاية الأسنان' },
          { href: '/service/service-details', text: 'جراحة العظام' },
        ],
      },
      {
        title: 'روابط سريعة',
        links: [
          { href: '/', text: 'الرئيسية' },
          { href: '/about', text: 'من نحن' },
          { href: '/service', text: 'خدماتنا' },
          { href: '/portfolio', text: 'أعمالنا' },
          { href: '/contact', text: 'اتصل بنا' },
        ],
      },
    ],
    recentPosts: [
      {
        href: '/blog/blog-details',
        image: '/assets/img/recent_post_1.png',
        date: '23 يونيو 2024',
        title: 'نقدم حلول شاملة لمدونة يورك',
      },
      {
        href: '/blog/blog-details',
        image: '/assets/img/recent_post_2.png',
        date: '20 يونيو 2024',
        title: 'الطب في هذه الصحة العملية',
      },
    ],
    copyrightText: 'حقوق النشر © 2024 ميديلو، جميع الحقوق محفوظة.',
    footerMenu: [
      { href: '/about', text: 'من نحن' },
      { href: '/', text: 'الفعاليات' },
      { href: '/blog', text: 'الأخبار' },
      { href: '/service', text: 'الخدمات' },
    ],
  };

  return (
    <footer
      className="cs_footer cs_blue_bg cs_bg_filed cs_white_color"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_accent_bg">
              <div className="cs_footer_logo">
              <Image src={data.logo} alt="img" width={205} height={53}   />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaRegClock />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaLocationDot />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaPhoneAlt />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                  />
                </li>
              </ul>
              <div className="cs_social_btns cs_style_1">
                <Link href={data.facebookHref} className="cs_center">
                  <i>
                    <FaFacebookF />
                  </i>
                </Link>
                <Link href={data.pinterestHref} className="cs_center">
                  <i>
                    <FaPinterestP />
                  </i>
                </Link>
                <Link href={data.twitterHref} className="cs_center">
                  <i>
                    <BsTwitter />
                  </i>
                </Link>
                <Link href={data.instagramHref} className="cs_center">
                  <i>
                    <FaInstagram />
                  </i>
                </Link>
              </div>
            </div>
          </div>

          {data.widgets.map((widget, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title">{widget.title}</h2>
                <ul className="cs_footer_widget_nav_list cs_mp_0">
                  {widget.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">المنشورات الأخيرة</h2>
              <ul className="cs_recent_post_list cs_mp_0">
                {data.recentPosts.map((post, index) => (
                  <li key={index}>
                    <div className="cs_recent_post">
                      <Link href={post.href} className="cs_recent_post_thumb">
                      <Image src={post.image} alt="img" width={85} height={85}   />
                      </Link>
                      <div className="cs_recent_post_right">
                        <p>{post.date}</p>
                        <h3 className="cs_recent_post_title">
                          <Link href={post.href}>{post.title}</Link>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_footer_bottom cs_primary_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">{data.copyrightText}</p>
            <ul className="cs_footer_menu cs_mp_0">
              {data.footerMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
