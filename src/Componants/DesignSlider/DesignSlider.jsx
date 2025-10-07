import React, { memo, useState, useEffect } from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import './DesignSlider.css';

const DesignSlider = memo(function DesignSlider() {
  const designs = [
    {
      id: 1,
      title: 'تصميم هوية بصرية شاملة',
      subtitle: 'لوقو وهوية بصرية',
      price: 800,
      description: 'تصميم هوية بصرية شاملة',
      highlight: '5 أيام عمل'
    },
    {
      id: 2,
      title: 'تصاميم سوشيال ميديا',
      subtitle: 'تصاميم السوشيال ميديا',
      price: 300,
      description: 'تصاميم السوشيال ميديا',
      highlight: '3 أيام عمل'
    },
    {
      id: 3,
      title: 'بوسترات إعلانية',
      subtitle: 'تصاميم المطبوعات',
      price: 150,
      description: 'بوسترات إعلانية احترافية',
      highlight: 'يومين عمل'
    },
    {
      id: 4,
      title: 'تصاميم متجر إلكتروني',
      subtitle: 'تصاميم التجارة الإلكترونية',
      price: 600,
      description: 'تصاميم متجر إلكتروني',
      highlight: 'اسبوع عمل'
    }
  ];

  const visible = 4;
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, designs.length - visible);

  // Manual navigation functions
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="design-slider" dir="rtl">
      <div className="design-slider__container">
        <h2 className="design-slider__title">التصميم الجرافيكي</h2>

        <div className="design-slider__wrapper">
          <div className="design-slider__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
            {designs.map((design) => (
              <div key={design.id} className="design-slider__card">
                <div className="design-slider__header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/60e65ac0-11ff-4c02-a51d-1df33680522d-500x375.10584250635-jfWA4k2ZTz1KIraipWtBoxrfuWrIO1Npoq146dPR.jpg"
                    alt="خدمة"
                    className="design-slider__header-image"
                  />
                </div>
                <div className="design-slider__content">
                  <h4 className="design-slider__description">{design.subtitle}</h4>
                  <div className="design-slider__pricing">
                    <span className="design-slider__price">{design.price}</span>
                    <span className="design-slider__price-unit">إلى</span>
                  </div>
                  <div className="design-slider__actions">
                    <button className="design-slider__favorite-btn">
                      <CiHeart />
                    </button>
                    <button className="design-slider__add-to-cart">
                      <TbShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="design-slider__controls">
          <button className="design-slider__arrow" onClick={prevSlide} aria-label="السابق">
            <HiArrowSmallRight />
          </button>
          <div className="design-slider__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} className={`design-slider__dot ${i===index? 'is-active':''}`} onClick={() => setIndex(i)} aria-label={`شريحة ${i+1}`} />
            ))}
          </div>
          <button className="design-slider__arrow" onClick={nextSlide} aria-label="التالي">
            <HiArrowSmallLeft />
          </button>
        </div>
      </div>
    </section>
  );
});

export default DesignSlider;
