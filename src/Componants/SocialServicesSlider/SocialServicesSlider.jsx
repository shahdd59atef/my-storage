import React, { memo, useState, useEffect } from 'react';
import './SocialServicesSlider.css';

const SocialServicesSlider = memo(function SocialServicesSlider() {
  const services = [
    {
      id: 1,
      title: 'حساب انستقرام | 12k',
      background: 'linear-gradient(135deg, #c13584 0%, #833ab4 100%)',
      icon: '📷',
      platform: 'حساب انستقرام',
      price: 550,
      oldPrice: 700,
      saved: 150
    },
    {
      id: 2,
      title: 'اشتراك شهري تغريدات | لايك - ريتويت',
      subtitle: 'اشتراك شهري لخدمات تويتر',
      background: 'linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%)',
      icon: '🐦',
      platform: 'اشتراك شهري',
      price: 350,
      oldPrice: 400,
      saved: 50
    },
    {
      id: 3,
      title: 'اشتراك أسبوعي تغريدات | لايك - ريتويت',
      background: 'linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%)',
      icon: '🐦',
      platform: 'اشتراك أسبوعي',
      price: 150,
      oldPrice: 200,
      saved: 50
    }
  ];

  const visible = 3;
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
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="social-services" dir="rtl">
      <div className="social-services__container">
        <div className="social-services__header">
          <h2 className="social-services__title">خدمات السوشيال ميديا</h2>
          <a href="/social-media-services" className="social-services__view-all">عرض الكل</a>
        </div>

        <div className="social-services__wrapper">
          <button 
            className="social-services__nav-btn social-services__nav-btn--prev"
            onClick={prevSlide}
            aria-label="السابق"
          >
            ‹
          </button>
          
          <button 
            className="social-services__nav-btn social-services__nav-btn--next"
            onClick={nextSlide}
            aria-label="التالي"
          >
            ›
          </button>

          <div className="social-services__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
            {services.map((service) => (
              <div key={service.id} className="social-services__card">
                <div className="social-services__image" style={{ background: service.background }}>
                  <div style={{ textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{service.icon}</div>
                    <h3 style={{ margin: 0, color: '#fff', fontSize: '1.3rem', fontWeight: '800' }}>{service.platform}</h3>
                  </div>
                </div>
                <div className="social-services__content">
                  <h4 className="social-services__name">{service.title}</h4>
                  {service.subtitle && (
                    <p className="social-services__subtitle">{service.subtitle}</p>
                  )}
                  <div className="social-services__pricing">
                    <div className="social-services__price-main">
                      <span className="social-services__price">﷼ {service.price}</span>
                      <span className="social-services__old-price">﷼ {service.oldPrice}</span>
                    </div>
                    <span className="social-services__saved">وفر {service.saved}.00 ر.س</span>
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

export default SocialServicesSlider;
