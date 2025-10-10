import React, { memo, useState, useCallback } from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import './ServicesSlider.css';

const ServicesSlider = memo(function ServicesSlider() {
  // بيانات البطاقات (صورة + عنوان + رابط)
  const items = [
    { id: 'social', title: 'خدمات التواصل الإجتماعي', img: 'https://cdn.salla.sa/form-builder/wQpsBmml66COkI01vSIjWfiTSUI8sCX7tuFssmYN.png', link: '/social-media-services' },
    { id: 'sale', title: 'حسابات للبيع', img: 'https://cdn.salla.sa/form-builder/RSKdJKJz4pshenKIdXj8P4VW3tz2JkAbHFLHfAFK.png', link: '/accounts-for-sale' },
    { id: 'followers', title: 'زيادة متابعين', img: 'https://cdn.salla.sa/form-builder/WQw3Fo3kqhEsZ6YefCVHWeosifusMWp0wj6Fde6t.png', link: '/snapchat-followers' },
    { id: 'verify', title: 'توثيق حسابات', img: 'https://cdn.salla.sa/form-builder/EVXgJ9IAquPE5nyRK1cLCk0BRWIFITOqWKq4Y6uo.png', link: '/verification-services' },
    { id: 'ads', title: 'حملات إعلانات ممولة', img: 'https://cdn.salla.sa/form-builder/Tahg2y3wrxH9hy2qHNEY43cbOQLzUhMwitbhYDUS.png', link: '/ads-campaigns-services' },
    { id: 'dev', title: 'برمجة', img: 'https://cdn.salla.sa/form-builder/0gY5BTTaGdjXFrJdQybAHlmlOfr5Af6nv6pPYGdc.png', link: '/web-apps' },
    { id: 'exclusive', title: 'يوزرات حصرية', img: 'https://cdn.salla.sa/form-builder/V02YZMlYZ8BtAxcsyHgznb8COwnMQrFfheQHte5h.png', link: '/usernames-services' },
  ];

  const visible = 6; // عدد الكروت المرئية
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visible);

  const next = useCallback(() => {
    setIndex((prevIndex) => {
      const nextIndex = prevIndex + visible;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  }, [maxIndex, visible]);

  const prev = useCallback(() => {
    setIndex((prevIndex) => {
      const nextIndex = prevIndex - visible;
      return nextIndex < 0 ? maxIndex : nextIndex;
    });
  }, [maxIndex, visible]);

  const goTo = useCallback((i) => {
    setIndex(Math.min(Math.max(i * visible, 0), maxIndex));
  }, [maxIndex, visible]);

  const currentPage = Math.floor(index / visible);
  const totalPages = Math.ceil(items.length / visible);

  return (
    <section className="services" dir="rtl">
      <div className="services__container">
        <h2 className="services__title">خدماتنا</h2>

        <div className="services__slider">
          <div className="services__viewport">
            <div className="services__track" style={{ transform: `translateX(-${index * (100/visible)}%)` }}>
              {items.map((it) => (
                <a key={it.id} href={it.link} className="services__item">
                  <div className="services__card">
                    <img className="services__img" src={it.img} alt={it.title} />
                  </div>
                  <div className="services__label">{it.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="services__controls">
          <button className="services__arrow" onClick={next} aria-label="التالي">
            <HiArrowSmallRight />
          </button>
          <div className="services__dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} className={`services__dot ${i===currentPage? 'is-active':''}`} onClick={() => goTo(i)} aria-label={`صفحة ${i+1}`} />
            ))}
          </div>
          <button className="services__arrow" onClick={prev} aria-label="السابق">
            <HiArrowSmallLeft />
          </button>
        </div>
      </div>
    </section>
  );
});

export default ServicesSlider;
