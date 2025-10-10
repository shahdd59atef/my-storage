import React, { memo } from 'react';
import { MdWhatsapp, MdOutlineMailOutline } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaMobileScreen } from "react-icons/fa6";
import { FaYoutube, FaTiktok, FaSnapchat, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import './Footer.css';

const Footer = memo(() => {
  return (
    <footer className="footer" dir="rtl">
      <div className="footer__container">
        <div className="footer__top">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__logo-wrapper">
              <div className="footer__logo">Z</div>
            </div>
            <h3 className="footer__company-name">عز للخدمات التسويقية</h3>
            <p className="footer__tagline">
              متجر عز احصل على خدمات سوشيال ميديا من متجرنا زود حساباتك بالمتابعين و الإعجابات والمشاهدات متابعين تويتر مشاهدات سناب حسابات تيك توك انطلق نحو النجاح الآن
            </p>
            
            {/* Social Media Icons */}
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <FaYoutube />
              </a>
              <a href="#" className="footer__social-link">
                <FaTiktok />
              </a>
              <a href="#" className="footer__social-link">
                <FaSnapchat />
              </a>
              <a href="#" className="footer__social-link">
                <FaTwitter />
              </a>
              <a href="#" className="footer__social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer__contact-section">
            <h4 className="footer__section-title">تواصل معنا</h4>
            <div className="footer__contact-grid">
              <div className="footer__contact-item">
                <span className="footer__contact-text">+966561950225</span>
                <span className="footer__contact-icon">
                  <FaMobileScreen />
                </span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-text">+966561950225</span>
                <span className="footer__contact-icon">
                  <MdWhatsapp />
                </span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-text">ez_mar</span>
                <span className="footer__contact-icon">
                  <FaTelegramPlane />
                </span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-text">0561950225</span>
                <span className="footer__contact-icon">
                  <BsTelephone />
                </span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-text">info@ezzmar.com</span>
                <span className="footer__contact-icon">
                  <MdOutlineMailOutline />
                </span>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="footer__links-section">
            <h4 className="footer__section-title">روابط مهمة</h4>
            <div className="footer__links-grid">
              <a href="/blog" className="footer__link">
                <span className="footer__link-text">المدونة</span>
                <span className="footer__link-icon">
                  <HiLink />
                </span>
              </a>
              <a href="#return" className="footer__link">
                <span className="footer__link-text">سياسة الاستبدال و الإسترجاع</span>
                <span className="footer__link-icon">
                  <HiLink />
                </span>
              </a>
              <a href="#privacy" className="footer__link">
                <span className="footer__link-text">سياسة الاستخدام والخصوصية</span>
                <span className="footer__link-icon">
                  <HiLink />
                </span>
              </a>
              <a href="#faq" className="footer__link">
                <span className="footer__link-text">الأسئلة المتكررة</span>
                <span className="footer__link-icon">
                  <HiLink />
                </span>
              </a>
              <a href="#how-to-order" className="footer__link">
                <span className="footer__link-text">كيفية الطلب</span>
                <span className="footer__link-icon">
                  <HiLink />
                </span>
              </a>
              <a href="#terms" className="footer__link">
                <span className="footer__link-text">الشروط والأحكام</span>
                <span className="footer__link-icon">
                  <HiLink />
                </span>
              </a>
              <a href="#contact" className="footer__link">
                <span className="footer__link-text">اتصل بنا</span>
                <span className="footer__link-icon">
                  <HiLink />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Business Verification */}
        <div className="footer__verification">
          <div className="footer__verification-icon">⭐</div>
          <p className="footer__verification-text">موثق لدى منصة الاعمال</p>
        </div>

        {/* Payment Methods */}
        <div className="footer__payment-methods">
          <img src="https://cdn.salla.network/images/payment/apple_pay_mini.png?v=2.0.5" alt="Apple Pay" className="footer__payment-logo" />
          <img src="https://cdn.salla.network/images/payment/stc_pay_mini.png?v=2.0.5" alt="STC Pay" className="footer__payment-logo" />
          <img src="https://cdn.salla.network/images/payment/mada_mini.png?v=2.0.5" alt="Mada" className="footer__payment-logo" />
          <img src="https://cdn.salla.network/images/payment/visa_mini.png?v=2.0.5" alt="Visa" className="footer__payment-logo" />
          <img src="https://cdn.salla.network/images/payment/mastercard_mini.png?v=2.0.5" alt="MasterCard" className="footer__payment-logo" />
          <img src="https://cdn.salla.network/images/payment/amex_mini.png?v=2.0.5" alt="American Express" className="footer__payment-logo" />
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <p>الحقوق محفوظة | 2025 متجر عز</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;