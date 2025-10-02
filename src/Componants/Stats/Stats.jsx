import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

export default function Stats() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const sectionRef = useRef(null);
  
  const stats = [
    { value: 440, label: 'وقفوا حساباتهم معنا بنجاح' },
    { value: 1000, label: 'يثقون بخدماتنا للتوثيق والنمو' },
    { value: 500, label: 'حساب موثق عبر عز' },
    { value: 670, label: 'حصلوا تفاعل وحضور قوي' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll position relative to the section
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollY(scrollProgress);
      }
      
      // Set scrolling state
      setIsScrolling(true);
      
      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set timeout to detect when scrolling stops
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <section className="stats" dir="rtl" ref={sectionRef}>
      <div className="stats__container">
        <h2 className="stats__title">انضم لآلاف التجار الآن</h2>
        <div className="stats__divider" />
        <div className="stats__grid">
          {stats.map((stat, index) => {
            // Calculate current value based on scroll and scrolling state
            const currentValue = isScrolling 
              ? Math.floor(stat.value * scrollY)
              : stat.value;
            
            return (
              <div key={index} className="stats__item">
                <div className="stats__num">
                  <span className={isScrolling ? 'stats__num--animating' : 'stats__num--stable'}>
                    {currentValue.toLocaleString('en-US')}
                  </span>+
                </div>
                <div className="stats__label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


