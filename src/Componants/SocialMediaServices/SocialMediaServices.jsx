import React, { memo, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import './SocialMediaServices.css';

const SocialMediaServices = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedSort, setSelectedSort] = useState('ترتيب مقترحاتنا');
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      title: 'خدمات سناب شات الشاملة',
      price: '300 ريال',
      category: 'سناب شات',
      icon: '👻',
      badge: '1★'
    },
    {
      id: 2,
      title: 'خدمات انستقرام المتكاملة',
      price: '250 ريال',
      category: 'انستقرام',
      icon: '📷',
      badge: '1★'
    },
    {
      id: 3,
      title: 'خدمات تيك توك المميزة',
      price: '200 ريال',
      category: 'تيك توك',
      icon: '🎵',
      badge: '1★'
    },
    {
      id: 4,
      title: 'خدمات تويتر الاحترافية',
      price: '220 ريال',
      category: 'تويتر',
      icon: '🐦',
      badge: '1★'
    }
  ];

  // Function to get correct product count text
  const getProductCountText = (num) => {
    if (num === 0) return 'لا توجد منتجات';
    if (num === 1) return 'منتج واحد';
    if (num === 2) return 'منتجين';
    if (num >= 3 && num <= 10) return `${num} منتجات`;
    if (num > 10) return `${num} منتج`;
    
    return `${num} منتج`;
  };

  const reviews = [
    {
      id: 1,
      text: "خدمات السوشيال ميديا ممتازة ونتائج سريعة",
      name: "راكان العنزي",
      date: "02/28/2024",
      rating: 5
    },
    {
      id: 2,
      text: "فريق محترف وأسعار مناسبة",
      name: "جود الحربي",
      date: "02/24/2024",
      rating: 5
    },
    {
      id: 3,
      text: "أفضل موقع لخدمات التواصل الاجتماعي",
      name: "ناصر القرشي",
      date: "02/18/2024",
      rating: 5
    }
  ];

  // Products Slider navigation functions
  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToProduct = (index) => {
    setCurrentProductIndex(index);
  };

  // Reviews Slider navigation functions
  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Sort options
  const sortOptions = [
    'ترتيب مقترحاتنا',
    'الأحدث أولاً',
    'الأقدم أولاً',
    'الأقل سعراً',
    'الأعلى سعراً',
    'الأكثر شعبية'
  ];

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="social-media-services">
      {/* Main Content */}
      <main className="social-media-services__main">
        <div className="social-media-services__container">
          <div className="social-media-services__sub-nav">
            <div className="social-media-services__dropdown-container">
              <button 
                className="social-media-services__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="social-media-services__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="social-media-services__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`social-media-services__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="social-media-services__counter">
              <span className="social-media-services__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          {/* Products Slider */}
          <div className="social-media-services__slider-wrapper">
            <button 
              className="social-media-services__products-slider-btn social-media-services__products-slider-btn--prev"
              onClick={prevProduct}
              aria-label="السابق"
            >
              ‹
            </button>
            
            <button 
              className="social-media-services__products-slider-btn social-media-services__products-slider-btn--next"
              onClick={nextProduct}
              aria-label="التالي"
            >
              ›
            </button>

            <div className="social-media-services__products-slider">
              <div 
                className="social-media-services__products-track"
                style={{ transform: `translateX(${currentProductIndex * -100}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="social-media-services__product-card">
                    <div className="social-media-services__product-header">
                      <img
                        src="https://cdn.salla.sa/DQYwE/60e65ac0-11ff-4c02-a51d-1df33680522d-500x375.10584250635-jfWA4k2ZTz1KIraipWtBoxrfuWrIO1Npoq146dPR.jpg"
                        alt="خدمة"
                        className="social-media-services__header-image"
                      />
                    </div>
                    <div className="social-media-services__product-content">
                      <h4 className="social-media-services__product-title">{product.title}</h4>
                      <p className="social-media-services__product-price">{product.price}</p>
                      <div className="social-media-services__product-actions">
                        <button className="social-media-services__favorite-btn">
                          <IoIosHeartEmpty />
                        </button>
                        <button className="social-media-services__add-to-cart">
                          <PiShoppingBag />
                          إضافة للسلة
                        </button>
                        <button className="social-media-services__contact-btn">راسلنا</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicators */}
            <div className="social-media-services__dots">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`social-media-services__dot ${index === currentProductIndex ? 'active' : ''}`}
                  onClick={() => goToProduct(index)}
                  aria-label={`الانتقال للمنتج ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Customer Reviews Section */}
          <section className="social-media-services__reviews">
            <div className="social-media-services__reviews-header">
              <h3 className="social-media-services__reviews-title">آراء العملاء</h3>
            </div>
            
            <div className="social-media-services__reviews-container">
              <button 
                className="social-media-services__slider-btn social-media-services__slider-btn--prev"
                onClick={prevReview}
                aria-label="السابق"
              >
                ‹
              </button>
              
              <button 
                className="social-media-services__slider-btn social-media-services__slider-btn--next"
                onClick={nextReview}
                aria-label="التالي"
              >
                ›
              </button>
              
              <div className="social-media-services__reviews-slider">
                <div 
                  className="social-media-services__reviews-track"
                  style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                >
                  <div className="social-media-services__reviews-grid">
                    {reviews.map((review) => (
                      <div key={review.id} className="social-media-services__review-card">
                        <div className="social-media-services__review-rating">
                          <span className="social-media-services__star">⭐</span>
                          <span className="social-media-services__rating-number">{review.rating}</span>
                        </div>
                        
                        <div className="social-media-services__reviewer">
                          <div className="social-media-services__reviewer-avatar">
                            <div className="social-media-services__avatar-icon">👤</div>
                          </div>
                          <div className="social-media-services__reviewer-info">
                            <h4 className="social-media-services__reviewer-name">{review.name}</h4>
                            <span className="social-media-services__reviewer-date">{review.date}</span>
                          </div>
                        </div>
                        
                        <div className="social-media-services__review-content">
                          <div className="social-media-services__quote-open">"</div>
                          <p className="social-media-services__review-text">{review.text}</p>
                          <div className="social-media-services__quote-close">"</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
});

SocialMediaServices.displayName = 'SocialMediaServices';

export default SocialMediaServices;





