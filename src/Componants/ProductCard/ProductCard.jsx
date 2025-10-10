import React from "react";
import { TbShoppingBag } from "react-icons/tb";
import './ProductCard.css';

const ProductCard = () => {
  const graphicDesignServices = [
    {
      id: 1,
      title: "تصميم لوقو",
      price: "300",
      image: "https://cdn.salla.sa/DQYwE/60e65ac0-11ff-4c02-a51d-1df33680522d-500x375.10584250635-jfWA4k2ZTz1KIraipWtBoxrfuWrIO1Npoq146dPR.jpg",
      description: "تصميم لوقو احترافي"
    },
    {
      id: 2,
      title: "تصميم سوشيال ميديا",
      price: "25",
      image: "https://cdn.salla.sa/DQYwE/60e65ac0-11ff-4c02-a51d-1df33680522d-500x375.10584250635-jfWA4k2ZTz1KIraipWtBoxrfuWrIO1Npoq146dPR.jpg",
      description: "تصميم محتوى السوشيال ميديا"
    }
  ];

  return (
    <section className="graphic-design-section" dir="rtl">
      <div className="graphic-design-container">
        <h2 className="graphic-design-title">التصميم الجرافيكي</h2>
        
        <div className="graphic-design-cards">
          {graphicDesignServices.map((service) => (
            <div key={service.id} className="graphic-design-card">
              <div className="graphic-design-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="graphic-design-content">
                <h3 className="graphic-design-service-title">{service.title}</h3>
                <div className="graphic-design-price">
                  <span className="price-number">{service.price}</span>
                  <span className="price-currency">﷼</span>
                </div>
                <button className="graphic-design-add-to-cart">
                  <TbShoppingBag />
                  إضافة للسلة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
