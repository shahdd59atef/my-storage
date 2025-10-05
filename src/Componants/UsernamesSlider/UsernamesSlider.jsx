import React, { memo, useState, useEffect } from 'react';
import './UsernamesSlider.css';

const UsernamesSlider = memo(function UsernamesSlider() {
  const usernames = [
    {
      id: 1,
      title: 'يوزر تيك توك رباعي',
      background: '#1a1a1a',
      icon: '🎵',
      subtitle: 'يوزرات رباعية',
      price: 25,
      oldPrice: 300,
      saved: 275
    },
    {
      id: 2,
      title: 'يوزر تيك توك ثلاثي',
      background: '#1a1a1a',
      icon: '🎵',
      subtitle: 'يوزرات ثلاثية',
      price: 200,
      oldPrice: 600,
      saved: 400
    },
    {
      id: 3,
      title: 'يوزر انستقرام رباعي',
      background: 'linear-gradient(135deg, #c13584 0%, #833ab4 100%)',
      icon: '📷',
      subtitle: 'يوزرات رباعية',
      price: 120,
      oldPrice: 300,
      saved: 180
    },
    {
      id: 4,
      title: 'يوزر انستقرام ثلاثي',
      background: 'linear-gradient(135deg, #c13584 0%, #833ab4 100%)',
      icon: '📷',
      subtitle: 'يوزرات ثلاثية',
      price: 2500
    },
    {
      id: 5,
      title: 'يوزر تويتر رباعي',
      background: 'linear-gradient(135deg, #1da1f2 0%, #0c7abf 100%)',
      icon: '🐦',
      subtitle: 'يوزرات رباعية',
      price: 150,
      oldPrice: 350,
      saved: 200
    },
    {
      id: 6,
      title: 'يوزر سناب شات رباعي',
      background: 'linear-gradient(135deg, #FFFC00 0%, #FFA500 100%)',
      icon: '👻',
      subtitle: 'يوزرات رباعية',
      price: 300
    }
  ];

  const visible = 4;
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, usernames.length - visible);

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
    <section className="usernames-slider" dir="rtl">
      <div className="usernames-slider__container">
        <h2 className="usernames-slider__title">يوزرات حصرية</h2>

        <div className="usernames-slider__wrapper">
          <div className="usernames-slider__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
            {usernames.map((username) => (
              <div key={username.id} className="usernames-slider__card">
                <div className="usernames-slider__image" style={{ background: username.background }}>
                  <div style={{ textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{username.icon}</div>
                    <h3 style={{ margin: 0, color: '#fff', fontSize: '1.15rem', fontWeight: '700' }}>{username.subtitle}</h3>
                  </div>
                </div>
                <div className="usernames-slider__content">
                  <h4 className="usernames-slider__name">{username.title}</h4>
                  <div className="usernames-slider__pricing">
                    <div className="usernames-slider__price-main">
                      <span className="usernames-slider__price">﷼ {username.price}</span>
                      {username.oldPrice && (
                        <span className="usernames-slider__old-price">﷼ {username.oldPrice}</span>
                      )}
                    </div>
                    {username.saved && (
                      <span className="usernames-slider__saved">وفر {username.saved}.00 ر.س</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="usernames-slider__controls">
          <button className="usernames-slider__arrow" onClick={prevSlide} aria-label="السابق">‹</button>
          <div className="usernames-slider__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} className={`usernames-slider__dot ${i===index? 'is-active':''}`} onClick={() => setIndex(i)} aria-label={`شريحة ${i+1}`} />
            ))}
          </div>
          <button className="usernames-slider__arrow" onClick={nextSlide} aria-label="التالي">›</button>
        </div>
      </div>
    </section>
  );
});

export default UsernamesSlider;










