import React, { memo, useState, useEffect } from 'react';
import './PackagesSlider.css';

const PackagesSlider = memo(function PackagesSlider() {
  const packages = [
    {
      id: 1,
      title: 'إدارة حساب تويتر | باقة برونزية',
      background: 'linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%)',
      icon: '🐦',
      subtitle: 'إدارة حسابات تويتر',
      price: 600,
      oldPrice: 1000,
      saved: 400
    },
    {
      id: 2,
      title: 'إدارة حساب تويتر | باقة فضية',
      background: 'linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%)',
      icon: '🐦',
      subtitle: 'إدارة حسابات تويتر',
      price: 1200,
      oldPrice: 2000,
      saved: 800
    },
    {
      id: 3,
      title: 'باقة التسويق لإدارة حسابات التواصل الاجتماعي',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #334155 100%)',
      icon: '📢',
      subtitle: 'باقة التسويق',
      price: 1300
    },
    {
      id: 4,
      title: 'باقة تصميم المتجر والتسويق',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #334155 100%)',
      icon: '🏪',
      subtitle: 'إنشاء متجر الكتروني احترافي سعودي رقمي',
      price: 2309
    }
  ];

  const visible = 4;
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, packages.length - visible);

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
    }, 3500);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="packages-slider" dir="rtl">
      <div className="packages-slider__container">
        <h2 className="packages-slider__title">باقات مميزة</h2>

        <div className="packages-slider__wrapper">
          <button 
            className="packages-slider__nav-btn packages-slider__nav-btn--prev"
            onClick={prevSlide}
            aria-label="السابق"
          >
            ‹
          </button>
          
          <button 
            className="packages-slider__nav-btn packages-slider__nav-btn--next"
            onClick={nextSlide}
            aria-label="التالي"
          >
            ›
          </button>

          <div className="packages-slider__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
            {packages.map((pkg) => (
              <div key={pkg.id} className="packages-slider__card">
                <div className="packages-slider__image" style={{ background: pkg.background }}>
                  <div style={{ textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{pkg.icon}</div>
                    <h3 style={{ margin: 0, color: '#fff', fontSize: '1.15rem', fontWeight: '700' }}>{pkg.subtitle}</h3>
                  </div>
                </div>
                <div className="packages-slider__content">
                  <h4 className="packages-slider__name">{pkg.title}</h4>
                  <div className="packages-slider__pricing">
                    <div className="packages-slider__price-main">
                      <span className="packages-slider__price">﷼ {pkg.price}</span>
                      {pkg.oldPrice && (
                        <span className="packages-slider__old-price">﷼ {pkg.oldPrice}</span>
                      )}
                    </div>
                    {pkg.saved && (
                      <span className="packages-slider__saved">وفر {pkg.saved}.00 ر.س</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default PackagesSlider;
