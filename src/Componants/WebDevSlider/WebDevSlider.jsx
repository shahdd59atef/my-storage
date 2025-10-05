import React, { memo, useState, useEffect } from 'react';
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
                <div className="webdev-slider__image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="webdev-slider__content">
                  <h4 className="webdev-slider__name">{service.title}</h4>
                  <div className="webdev-slider__pricing">
                    <div className="webdev-slider__price-main">
                      <span className="webdev-slider__price">﷼ {service.price}</span>
                      {service.oldPrice && (
                        <span className="webdev-slider__old-price">﷼ {service.oldPrice}</span>
                      )}
                    </div>
                    {service.saved && (
                      <span className="webdev-slider__saved">وفر {service.saved}.00 ر.س</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="webdev-slider__controls">
          <button className="webdev-slider__arrow" onClick={prevSlide} aria-label="السابق">‹</button>
          <div className="webdev-slider__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} className={`webdev-slider__dot ${i===index? 'is-active':''}`} onClick={() => setIndex(i)} aria-label={`شريحة ${i+1}`} />
            ))}
          </div>
          <button className="webdev-slider__arrow" onClick={nextSlide} aria-label="التالي">›</button>
        </div>
      </div>
    </section>
  );
});

export default WebDevSlider;
