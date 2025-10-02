import React, { memo, useRef, useState, useEffect, useCallback } from 'react';
import './ProductsSlider.css';

const ProductsSlider = memo(function ProductsSlider() {
  const products = [
    {
      id: 1,
      title: 'حساب تيك توك 170k',
      background: '#1a1a1a',
      icon: '🎵',
      subtitle: 'حسابات تيك توك',
      price: 750,
      oldPrice: 1000
    },
    {
      id: 2,
      title: 'متابعين جاكو سعوديين | 50',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '👥',
      subtitle: 'جاكو',
      price: 25,
      oldPrice: 50
    },
    {
      id: 3,
      title: 'حساب جاكو | 1000 متابع',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '📱',
      subtitle: 'حسابات',
      price: 70,
      oldPrice: 120
    },
    {
      id: 4,
      title: 'حساب انستجرام بدون متابعين | إنشاء 2016',
      background: 'linear-gradient(135deg, #c13584 0%, #833ab4 100%)',
      icon: '📷',
      subtitle: 'حسابات انستجرام',
      price: 24
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
                <div className="products-slider__image" style={{ background: product.background }}>
                  <div style={{ textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{product.icon}</div>
                    <h3 style={{ margin: 0, color: '#fff' }}>{product.subtitle}</h3>
                  </div>
                </div>
                <div className="products-slider__content">
                  <h4 className="products-slider__name">{product.title}</h4>
                  <div className="products-slider__pricing">
                    <span className="products-slider__price">﷼ {product.price}</span>
                    {product.oldPrice && (
                      <span className="products-slider__old-price">﷼ {product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="products-slider__controls">
          <button className="products-slider__arrow" onClick={prev} aria-label="السابق">‹</button>
          <div className="products-slider__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} className={`products-slider__dot ${i===index? 'is-active':''}`} onClick={() => goTo(i)} aria-label={`شريحة ${i+1}`} />
            ))}
          </div>
          <button className="products-slider__arrow" onClick={next} aria-label="التالي">›</button>
        </div>
      </div>
    </section>
  );
});

export default ProductsSlider;
