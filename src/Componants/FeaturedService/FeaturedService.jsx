import React, { memo } from 'react';
import './FeaturedService.css';

const FeaturedService = memo(function FeaturedService() {
  return (
    <section className="featured" dir="rtl">
      <div className="featured__container">
        <h2 className="featured__title">الخدمة المميزة</h2>
        <div className="featured__divider" />

        <div className="featured__card">
          <div className="featured__right">
            <div className="featured__image-wrap">
              <img className="featured__image" src="https://cdn.salla.sa/DQYwE/40c6b05a-e635-47e1-87ea-ac765b6e3f40-400x500-QGuJ4XmWyyOvg1ZUcOmY28x7RGEIk9PLWpHWXHtd.jpg" alt="مشاهدات سناب" />
            </div>
          </div>

          <div className="featured__left">
            <div className="featured__toolbar">
              <button className="featured__icon" aria-label="المفضلة">♡</button>
              <button className="featured__icon" aria-label="مشاركة">⇪</button>
            </div>

            <h3 className="featured__name">مشاهدات سناب 100</h3>
            <div className="featured__price">﷼ 75</div>

            <p className="featured__desc">
              مشاهدات سناب ستوري عرب
              <br /> ضع اسم المستخدم الخاص بك في منطقة الرابط
              <br /> الحد الأدنى لقيمة الطلب لاصمد قصصك (20 قصة)
            </p>

            <button className="featured__cta">اضافه للسله</button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FeaturedService;


