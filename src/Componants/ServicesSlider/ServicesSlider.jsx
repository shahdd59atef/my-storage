import React, { memo, useRef, useState, useEffect, useCallback } from 'react';
import './ServicesSlider.css';

const ServicesSlider = memo(function ServicesSlider() {
  // بيانات البطاقات (صورة + عنوان)
  const items = [
    { id: 'exclusive', title: 'يوزرات حصرية', img: 'https://cdn.salla.sa/form-builder/V02YZMlYZ8BtAxcsyHgznb8COwnMQrFfheQHte5h.png' },
    { id: 'dev', title: 'برمجة', img: 'https://cdn.salla.sa/form-builder/0gY5BTTaGdjXFrJdQybAHlmlOfr5Af6nv6pPYGdc.png' },
    { id: 'design', title: 'تصميم', img: 'https://cdn.salla.sa/form-builder/b3bvhoj5FeVY4I2TKbk6iaM9iVejKI1VDG4ChTx4.png' },
    { id: 'marketing', title: 'تسويق', img: 'https://cdn.salla.sa/form-builder/Tahg2y3wrxH9hy2qHNEY43cbOQLzUhMwitbhYDUS.png' },

  ];

  const visible = 5; // عدد البطاقات الظاهرة على الديسكتوب
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visible);
  const goTo = useCallback((i) => setIndex(Math.min(Math.max(i, 0), maxIndex)), [maxIndex]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  // لضبط المؤشر عند تغيير عرض الشاشة
  useEffect(() => {
    const onResize = () => goTo(index);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [goTo, index]);

  return (
    <section className="services" dir="rtl">
      <div className="services__container">
        <h2 className="services__title">خدماتنا</h2>

        <div className="services__slider">
          <div className="services__viewport">
            <div className="services__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
              {items.map((it) => (
                <div key={it.id} className="services__card">
                  <div className="services__media">
                    <img className="services__img" src={it.img} alt={it.title} />
                  </div>
                  <div className="services__label">{it.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="services__controls">
          <button className="services__arrow" onClick={prev} aria-label="السابق">‹</button>
          <div className="services__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} className={`services__dot ${i===index? 'is-active':''}`} onClick={() => goTo(i)} aria-label={`شريحة ${i+1}`} />
            ))}
          </div>
          <button className="services__arrow" onClick={next} aria-label="التالي">›</button>
        </div>
      </div>
    </section>
  );
});

export default ServicesSlider;


