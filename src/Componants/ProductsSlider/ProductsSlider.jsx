import React, { memo, useRef, useState, useEffect, useCallback } from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import './ProductsSlider.css';

const ProductsSlider = memo(function ProductsSlider() {
  const products = [
    {
      id: 1,
      title: 'إنشاء موقع ووردبرس',
      subtitle: 'برمجة مواقع الويب WordPress',
      price: 1500,
      description: 'إنشاء موقع ووردبرس احترافي',
      highlight: 'اسبوع عمل فقط'
    },
    {
      id: 2,
      title: 'تطوير تطبيقات الجوال',
      subtitle: 'برمجة تطبيقات الأندرويد',
      price: 2500,
      description: 'تطوير تطبيقات الجوال',
      highlight: 'اسبوعين عمل'
    },
    {
      id: 3,
      title: 'تصميم هوية بصرية',
      subtitle: 'لوقو وهوية بصرية',
      price: 800,
      description: 'تصميم هوية بصرية شاملة',
      highlight: '5 أيام عمل'
    },
    {
      id: 4,
      title: 'تسويق رقمي',
      subtitle: 'إدارة الحملات الإعلانية',
      price: 1200,
      description: 'تسويق رقمي احترافي',
      highlight: 'اسبوع عمل'
    }
  ];

  const visible = 4;
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, products.length - visible);
  const goTo = useCallback((i) => setIndex(Math.min(Math.max(i, 0), maxIndex)), [maxIndex]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    const onResize = () => goTo(index);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [goTo, index]);

  return (
    <section className="products-slider" dir="rtl">
      <div className="products-slider__container">
        <h2 className="products-slider__title">زود متابعينك</h2>

        <div className="products-slider__wrapper">
          <div className="products-slider__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
            {products.map((product) => (
              <div key={product.id} className="products-slider__card">
                <div className="products-slider__header">
                  <img 
                    src="https://cdn.salla.sa/DQYwE/60e65ac0-11ff-4c02-a51d-1df33680522d-500x375.10584250635-jfWA4k2ZTz1KIraipWtBoxrfuWrIO1Npoq146dPR.jpg" 
                    alt="خدمة" 
                    className="products-slider__header-image"
                  />
                </div>
                <div className="products-slider__content">
                  <h4 className="products-slider__description">{product.subtitle}</h4>
                  <div className="products-slider__pricing">
                    <span className="products-slider__price">{product.price}</span>
                    <span className="products-slider__price-unit">إلى</span>
                  </div>
                  <div className="products-slider__actions">
                    <button className="products-slider__favorite-btn">
                      <CiHeart />
                    </button>
                    <button className="products-slider__add-to-cart">
                      <TbShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="products-slider__controls">
          <button className="products-slider__arrow" onClick={prev} aria-label="السابق">
            <HiArrowSmallRight />
          </button>
          <div className="products-slider__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} className={`products-slider__dot ${i===index? 'is-active':''}`} onClick={() => goTo(i)} aria-label={`شريحة ${i+1}`} />
            ))}
          </div>
          <button className="products-slider__arrow" onClick={next} aria-label="التالي">
            <HiArrowSmallLeft />
          </button>
        </div>
      </div>
    </section>
  );
});

export default ProductsSlider;
