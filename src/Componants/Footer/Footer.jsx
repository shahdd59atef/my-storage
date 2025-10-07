import React, { memo } from 'react';
import { MdWhatsapp, MdOutlineMailOutline } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaMobileScreen } from "react-icons/fa6";
import './Footer.css';

const Footer = memo(() => {
  return (
    <footer className="footer" dir="rtl">
      <div className="footer__container">
        <div className="footer__top">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__logo-wrapper">
              <img src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/DQYwE/wyWnbCpitH0YrIqGM6cmhukxXFJX8zWn8RnN3DLW.png" alt="Storage Logo" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">
              متجر عز احصل على خدمات سوشيال ميديا من تنازل زود حساباتك بالمتابعين و الإعجابات والمشاهدات<br/>
              تتابعين توفير مشاهدات سناب حسابات تيك توك اتطلق نحو النجاح الآن
            </p>
            
            {/* Links and Contact Sections */}
            <div className="footer__sections">
              {/* Links Section */}
              <div className="footer__links">
                <h4 className="footer__title">روابط مهمة</h4>
                <ul className="footer__list footer__links-grid">
                  <li><a href="/blog">المدونة</a></li>
                  <li><a href="#how-to-order">كيفية الطلب</a></li>
                  <li><a href="#privacy">سياسة الاستخدام والخصوصية</a></li>
                  <li><a href="#return">سياسة الاستبدال والاسترجاع</a></li>
                  <li><a href="#terms">الشروط والأحكام</a></li>
                  <li><a href="#contact">اتصل بنا</a></li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="footer__contact">
                <h4 className="footer__title">تواصل معنا</h4>
                <ul className="footer__list footer__contact-grid">
                  <li className="footer__contact-item">
                    <span className="footer__icon">
                      <BsTelephone />
                    </span>
                    <span>0561950225</span>
                  </li>
                  <li className="footer__contact-item">
                    <span className="footer__icon">
                      <MdWhatsapp />
                    </span>
                    <span>+966561950225</span>
                  </li>
                  <li className="footer__contact-item">
                    <span className="footer__icon">
                      <FaTelegramPlane />
                    </span>
                    <span>+966561950225</span>
                  </li>
                  <li className="footer__contact-item">
                    <span className="footer__icon">
                      <FaMobileScreen />
                    </span>
                    <span>+966561950225</span>
                  </li>
                  <li className="footer__contact-item">
                    <span className="footer__icon">
                      <MdOutlineMailOutline />
                    </span>
                    <a href="mailto:info@ezzmar.com">info@ezzmar.com</a>
                  </li>
                  <li className="footer__contact-item">
                    <span className="footer__icon">✈️</span>
                    <a href="#">ez_mar</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p className="footer__copyright">© متجر عز 2025 | الحقوق محفوظة</p>
            {/* Payment Methods Small */}
            <div className="footer__payments-small">
              <img src="https://cdn.salla.network/images/payment/mada_mini.png?v=2.0.5" alt="Mada" className="footer__pay-small" />
              <img src="https://cdn.salla.network/images/payment/credit_card_mini.png?v=2.0.5" alt="Credit Card" className="footer__pay-small" />
              <img src="https://cdn.salla.network/images/payment/paypal_mini.png?v=2.0.5" alt="PayPal" className="footer__pay-small" />
              <img src="https://cdn.salla.network/images/payment/bank_mini.png?v=2.0.5" alt="Bank Transfer" className="footer__pay-small" />
              <img src="https://cdn.salla.network/images/payment/stc_pay_mini.png?v=2.0.5" alt="STC Pay" className="footer__pay-small" />
              <img src="https://cdn.salla.network/images/payment/apple_pay_mini.png?v=2.0.5" alt="Apple Pay" className="footer__pay-small" />
            </div>
          </div>
          <div className="footer__trust">
            <img src="https://cdn.salla.network/images/sbc.png?v=2.0.5" alt="SBC" className="footer__sbc-logo" />
            <span className="footer__trust-badge">موثّق لدى منصة الأعمال</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;