import React, { memo, useState, useEffect } from 'react';
import './ReviewsSlider.css';

const ReviewsSlider = memo(function ReviewsSlider() {
  const reviews = [
    {
      id: 1,
      name: 'Osama Aljohani',
      date: '08/16/2024',
      rating: 5,
      avatar: '👨',
      comment: 'خدمة ممتازة جدا سريعة ومصداقية في التعامل جزاكم الله خيرا'
    },
    {
      id: 2,
      name: 'نورة لافي',
      date: '09/07/2023',
      rating: 5,
      avatar: '👩',
      comment: 'صامل و سريع و مصداقيية . ووقوفهم موثوق يفتح التقيبير'
    },
    {
      id: 3,
      name: 'Aboubakr Abdellah',
      date: '05/13/2024',
      rating: 5,
      avatar: '👨',
      comment: 'متعتكوون ودا جدا سريع ومصداقية في التعامل جزاكم الله خيرا'
    },
    {
      id: 4,
      name: 'سارة محمد',
      date: '07/20/2024',
      rating: 5,
      avatar: '👩',
      comment: 'خدمة رائعة وسريعة جداً، أنصح بالتعامل معهم بشدة'
    },
    {
      id: 5,
      name: 'Ahmed Ali',
      date: '06/15/2024',
      rating: 5,
      avatar: '👨',
      comment: 'ممتاز جدا والله يعطيهم العافية على الخدمة المميزة'
    }
  ];

  const visible = 3;
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, reviews.length - visible);

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
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="reviews-slider" dir="rtl">
      <div className="reviews-slider__container">
        <div className="reviews-slider__header">
          <h2 className="reviews-slider__title">آراء العملاء</h2>
          <a href="/all-reviews" className="reviews-slider__view-all">عرض المزيد</a>
        </div>

        <div className="reviews-slider__wrapper">
          <div className="reviews-slider__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
            {reviews.map((review) => (
              <div key={review.id} className="reviews-slider__card">
                <div className="reviews-slider__top">
                  <div className="reviews-slider__user">
                    <div className="reviews-slider__avatar">{review.avatar}</div>
                    <div className="reviews-slider__info">
                      <h4 className="reviews-slider__name">{review.name}</h4>
                      <span className="reviews-slider__date">{review.date}</span>
                    </div>
                  </div>
                  <div className="reviews-slider__rating">
                    {review.rating} <span className="reviews-slider__star">⭐</span>
                  </div>
                </div>
                <div className="reviews-slider__quote">"</div>
                <p className="reviews-slider__comment">{review.comment}</p>
                <div className="reviews-slider__quote-end">"</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-slider__controls">
          <button className="reviews-slider__arrow" onClick={prevSlide} aria-label="السابق">‹</button>
          <div className="reviews-slider__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} className={`reviews-slider__dot ${i===index? 'is-active':''}`} onClick={() => setIndex(i)} aria-label={`شريحة ${i+1}`} />
            ))}
          </div>
          <button className="reviews-slider__arrow" onClick={nextSlide} aria-label="التالي">›</button>
        </div>
      </div>
    </section>
  );
});

export default ReviewsSlider;
