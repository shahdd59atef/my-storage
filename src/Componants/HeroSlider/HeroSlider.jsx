import React, { useEffect, useRef, useState, useCallback, memo } from 'react';
import './HeroSlider.css';

const AUTO_INTERVAL_MS = 5000;

const HeroSlider = memo(function HeroSlider({ images = [], height = 420 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const goTo = useCallback((i) => {
    if (images.length === 0) return;
    const safe = ((i % images.length) + images.length) % images.length;
    setIndex(safe);
  }, [images.length]);

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  const pause = useCallback(() => { if (timerRef.current) clearInterval(timerRef.current); }, []);
  const resume = useCallback(() => {
    if (images.length <= 1) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % images.length), AUTO_INTERVAL_MS);
  }, [images.length]);

  // keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  // touch swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    const onTouchStart = (e) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) prev();
      if (dx < -50) next();
    };
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev]);

  return (
    <div className="hero-slider" style={{ height }} onMouseEnter={pause} onMouseLeave={resume} ref={containerRef}>
      <div className="hero-slider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div className="hero-slider__slide" key={i} aria-hidden={i !== index}>
            <img src={src} alt={`slide-${i + 1}`} className="hero-slider__img" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="hero-slider__btn hero-slider__btn--prev" onClick={prev} aria-label="السابق">‹</button>
          <button className="hero-slider__btn hero-slider__btn--next" onClick={next} aria-label="التالي">›</button>
          <div className="hero-slider__dots">
            {images.map((_, i) => (
              <button key={i} className={`hero-slider__dot ${i === index ? 'is-active' : ''}`} onClick={() => goTo(i)} aria-label={`اذهب إلى الشريحة ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
});

export default HeroSlider;


