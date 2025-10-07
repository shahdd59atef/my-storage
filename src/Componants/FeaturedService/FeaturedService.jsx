import React, { memo } from 'react';
import { FaFireAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './FeaturedService.css';

const FeaturedService = memo(function FeaturedService() {
  return (
    <section className="featured" dir="rtl">
      <div className="featured__container">
        <div className="featured__layout">
          {/* Left Column - Product Details */}
          <div className="featured__product-section">
            <h3 className="featured__name">مشاهدات سناب 100</h3>
            
            <div className="featured__price">75 إ.ل</div>

            <div className="featured__sold" aria-label="تم بيعه أكثر">
              <FaFireAlt className="featured__sold-icon" />
              <span className="featured__sold-text">تم بيعه أكثر من 6 مرات</span>
            </div>

            <p className="featured__desc">
              مشاهدات سناب حقيقي عرب
              <br /> ضع اسم المستخدم الخاص بك في منطقة الرابط
              <br /> 100 مشاهدة قصة لجميع قصصك (حتى 20 قصة)
            </p>

            <p className="featured__instructions">
              يرجى مشاركة لقطة شاشة توضح التاريخ باستخدام prnt.sc وإرسالها إلينا
            </p>

            <div className="featured__input-section">
              <label className="featured__input-label">اليوزر</label>
              <input 
                type="text" 
                placeholder="الرجاء كتابة اليوزر بالشكل الصحيح" 
                className="featured__username-input"
              />
            </div>
          </div>

          {/* Right Column - Promotional Banner */}
          <div className="featured__banner-section">
            <div className="featured__banner">
              <div className="featured__banner-content">
                <div className="featured__banner-logo">عز للخدمات التسويقية</div>
                <h4 className="featured__banner-question">مشاهداتك قليلة؟</h4>
                <p className="featured__banner-text">زودها الآن وخلك حديث السناب</p>
                <p className="featured__banner-service">خدمة زيادة مشاهدات السناب شات</p>
              </div>
              <div className="featured__banner-image">
                <div className="featured__phone-mockup">
                  <div className="featured__phone-screen">
                    <div className="featured__snapchat-ghost"></div>
                    <div className="featured__stories-icon"></div>
                    <div className="featured__chat-text">chat</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="featured__add-to-cart">
              <button className="featured__add-btn">إضافة للسلة</button>
              <div className="featured__quantity">
                <button className="featured__qty-btn"><FaMinus /></button>
                <span className="featured__qty-number">1</span>
                <button className="featured__qty-btn"><FaPlus /></button>
              </div>
              <div className="featured__cart-info">
                <span className="featured__cart-price">75 إ.ل</span>
                <span className="featured__cart-title">مشاهدات سناب 100</span>
              </div>
            </div>

            <button className="featured__whatsapp">
              <FaWhatsapp className="featured__whatsapp-icon" />
              راسلنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FeaturedService;


