import React, { memo, useState, useEffect } from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import './WebDevSlider.css';

const WebDevSlider = memo(function WebDevSlider() {
  const services = [
    {
      id: 1,
      title: 'برمجة تطبيقات الأندرويد',
      image: '/service-2.png',
      price: 8000
    },
    {
      id: 2,
      title: 'برمجة تطبيقات سلة ووَرد API',
      image: '/service-2.png',
      price: 1450,
      oldPrice: 1500,
      saved: 50
    },
    {
      id: 3,
      title: 'برمجة مواقع الويب Backend',
      image: '/service-2.png',
      price: 5999
    },
    {
      id: 4,
      title: 'برمجة مواقع الويب Laravel',
      image: '/service-2.png',
      price: 5999,
      oldPrice: 6500,
      saved: 501
    },
    {
      id: 5,
      title: 'برمجة تطبيقات iOS',
      image: '/service-2.png',
      price: 9000
    },
    {
      id: 6,
      title: 'برمجة متاجر إلكترونية',
      image: '/service-2.png',
      price: 7500,
      oldPrice: 8000,
      saved: 500
    }
  ];

  const visible = 4;
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, services.length - visible);

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
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="webdev-slider" dir="rtl">
      <div className="webdev-slider__container">
        <h2 className="webdev-slider__title">برمجة الويب</h2>

        <div className="webdev-slider__wrapper">
          <div className="webdev-slider__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
            {services.map((service) => (
              <div key={service.id} className="webdev-slider__card">
                <div className="webdev-slider__header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/60e65ac0-11ff-4c02-a51d-1df33680522d-500x375.10584250635-jfWA4k2ZTz1KIraipWtBoxrfuWrIO1Npoq146dPR.jpg"
                    alt="خدمة"
                    className="webdev-slider__header-image"
                  />
                </div>
                <div className="webdev-slider__content">
                  <h4 className="webdev-slider__description">برمجة مواقع الويب</h4>
                  <div className="webdev-slider__pricing">
                    <span className="webdev-slider__price">{service.price}</span>
                    <span className="webdev-slider__price-unit">إلى</span>
                  </div>
                  <div className="webdev-slider__actions">
                    <button className="webdev-slider__favorite-btn">
                      <CiHeart />
                    </button>
                    <button className="webdev-slider__add-to-cart">
                      <TbShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="webdev-slider__controls">
          <button className="webdev-slider__arrow" onClick={prevSlide} aria-label="السابق">
            <HiArrowSmallRight />
          </button>
          <div className="webdev-slider__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} className={`webdev-slider__dot ${i===index? 'is-active':''}`} onClick={() => setIndex(i)} aria-label={`شريحة ${i+1}`} />
            ))}
          </div>
          <button className="webdev-slider__arrow" onClick={nextSlide} aria-label="التالي">
            <HiArrowSmallLeft />
          </button>
        </div>
      </div>
    </section>
  );
});

export default WebDevSlider;
