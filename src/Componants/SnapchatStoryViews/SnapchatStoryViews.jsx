import React, { memo, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import './SnapchatStoryViews.css';

const SnapchatStoryViews = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedSort, setSelectedSort] = useState('ترتيب مقترحاتنا');
  
  const products = [
    {
      id: 1,
      title: 'مشاهدات ستوري سناب 1000 - 5000',
      price: '150 ريال',
      range: '1000 - 5000',
      badge: '1★'
    },
    {
      id: 2,
      title: 'مشاهدات ستوري سناب 500 - 2000',
      price: '80 ريال',
      range: '500 - 2000',
      badge: '1★'
    },
    {
      id: 3,
      title: 'مشاهدات ستوري سناب 2000 - 10000',
      price: '250 ريال',
      range: '2000 - 10000',
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
      text: "خدمة ممتازة وسريعة",
      name: "أحمد محمد",
      date: "12/15/2023",
      rating: 5
    },
    {
      id: 2,
      text: "النتائج ظهرت خلال ساعات قليلة",
      name: "فاطمة السعدي",
      date: "11/28/2023",
      rating: 5
    },
    {
      id: 3,
      text: "خدمة موثوقة ومضمونة",
      name: "خالد العتيبي",
      date: "10/10/2023",
      rating: 5
    }
  ];

  // Slider navigation functions
  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentReviewIndex(index);
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
    <div className="snapchat-story-views">
      {/* Main Content */}
      <main className="snapchat-story-views__main">
        <div className="snapchat-story-views__container">
          <div className="snapchat-story-views__sub-nav">
            <div className="snapchat-story-views__dropdown-container">
              <button 
                className="snapchat-story-views__sort-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedSort}
                <span className="snapchat-story-views__dropdown-arrow">
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className="snapchat-story-views__dropdown-menu">
                  {sortOptions.map((option, index) => (
                    <button 
                      key={index}
                      className={`snapchat-story-views__dropdown-item ${option === selectedSort ? 'selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="snapchat-story-views__counter">
              <span className="snapchat-story-views__counter-text">
                عرض {getProductCountText(products.length)}
              </span>
            </div>
          </div>
          
          <div className="snapchat-story-views__products">
            {products.map((product) => (
              <div key={product.id} className="snapchat-story-views__product-card">
                <div className="snapchat-story-views__product-header">
                  <img
                    src="https://cdn.salla.sa/DQYwE/M5rnE6RQieGwxLbKyl4EpAHD9Y3OkeObgnKbtYTB.jpg"
                    alt="خدمة"
                    className="snapchat-story-views__product-header-image"
                  />
                </div>
                <div className="snapchat-story-views__product-content">
                  <h4 className="snapchat-story-views__product-title">{product.title}</h4>
                  <p className="snapchat-story-views__product-price">{product.price}</p>
                  <div className="snapchat-story-views__product-actions">
                    <button className="snapchat-story-views__favorite-btn">
                      <IoIosHeartEmpty />
                    </button>
                    <button className="snapchat-story-views__add-to-cart">
                      <PiShoppingBag />
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Customer Reviews Section */}
          <section className="snapchat-story-views__reviews">
            <div className="snapchat-story-views__reviews-header">
              <h3 className="snapchat-story-views__reviews-title">آراء العملاء</h3>
            </div>
            
            <div className="snapchat-story-views__reviews-container">
              <button 
                className="snapchat-story-views__slider-btn snapchat-story-views__slider-btn--prev"
                onClick={prevReview}
                aria-label="السابق"
              >
                ‹
              </button>
              
              <button 
                className="snapchat-story-views__slider-btn snapchat-story-views__slider-btn--next"
                onClick={nextReview}
                aria-label="التالي"
              >
                ›
              </button>
              
              <div className="snapchat-story-views__reviews-slider">
                <div 
                  className="snapchat-story-views__reviews-track"
                  style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                >
                  <div className="snapchat-story-views__reviews-grid">
                    {reviews.map((review) => (
                      <div key={review.id} className="snapchat-story-views__review-card">
                        <div className="snapchat-story-views__review-rating">
                          <span className="snapchat-story-views__star">⭐</span>
                          <span className="snapchat-story-views__rating-number">{review.rating}</span>
                        </div>
                        
                        <div className="snapchat-story-views__reviewer">
                          <div className="snapchat-story-views__reviewer-avatar">
                            <div className="snapchat-story-views__avatar-icon">👤</div>
                          </div>
                          <div className="snapchat-story-views__reviewer-info">
                            <h4 className="snapchat-story-views__reviewer-name">{review.name}</h4>
                            <span className="snapchat-story-views__reviewer-date">{review.date}</span>
                          </div>
                        </div>
                        
                        <div className="snapchat-story-views__review-content">
                          <div className="snapchat-story-views__quote-open">"</div>
                          <p className="snapchat-story-views__review-text">{review.text}</p>
                          <div className="snapchat-story-views__quote-close">"</div>
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

SnapchatStoryViews.displayName = 'SnapchatStoryViews';

export default SnapchatStoryViews;










