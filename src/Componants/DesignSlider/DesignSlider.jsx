import React, { memo, useState, useEffect } from 'react';
import './DesignSlider.css';

const DesignSlider = memo(function DesignSlider() {
  const designs = [
    {
      id: 1,
      title: 'تصميم الشعارات والهوية البصرية',
      subtitle: 'تصميم شعار بجودة بصريّة ومتميزك بها ساعاتها',
      image: '/service-3.png',
      price: 650,
      oldPrice: 1200,
      saved: 550
    },
    {
      id: 2,
      title: 'تصميم بوسترات إعلانية',
      image: '/service-3.png',
      price: 50
    },
    {
      id: 3,
      title: 'تصميم لوقو',
      subtitle: 'تصميم لوقو احترافي ريشيك واتـ ـــي',
      image: '/service-3.png',
      price: 300
    },
    {
      id: 4,
      title: 'تصميم سوشيال ميديا',
      subtitle: 'خدمات تصميم بصمية إبداعا في كل دقيقة الأجل',
      image: '/service-3.png',
      price: 25
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
          <button 
            className="design-slider__nav-btn design-slider__nav-btn--prev"
            onClick={prevSlide}
            aria-label="السابق"
          >
            ‹
          </button>
          
          <button 
            className="design-slider__nav-btn design-slider__nav-btn--next"
            onClick={nextSlide}
            aria-label="التالي"
          >
            ›
          </button>

          <div className="design-slider__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
            {designs.map((design) => (
              <div key={design.id} className="design-slider__card">
                <div className="design-slider__image">
                  <img src={design.image} alt={design.title} />
                </div>
                <div className="design-slider__content">
                  <h4 className="design-slider__name">{design.title}</h4>
                  {design.subtitle && (
                    <p className="design-slider__subtitle">{design.subtitle}</p>
                  )}
                  <div className="design-slider__pricing">
                    <div className="design-slider__price-main">
                      <span className="design-slider__price">﷼ {design.price}</span>
                      {design.oldPrice && (
                        <span className="design-slider__old-price">﷼ {design.oldPrice}</span>
                      )}
                    </div>
                    {design.saved && (
                      <span className="design-slider__saved">وفر {design.saved}.00 ر.س</span>
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

export default DesignSlider;
