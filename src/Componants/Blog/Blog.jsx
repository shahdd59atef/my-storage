import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = memo(() => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: 'توثيق حسابات تويتر',
      description: 'المصداقية وهي واحدة من أهم منصات التواصل الاجتماعي في العالم، حيث يستخدمها من ملايين المستخدمين من المشاهير، السياسيين، الصحفيين، والشركات.',
      buttonText: 'اقرأ المزيد',
      bgColor: '#1DA1F2',
      icon: '🐦',
      platform: 'twitter'
    },
    {
      id: 2,
      title: 'متجر بيع بوزارت للانستقرام',
      description: 'متجر بيع بوزارت انستقرام - أكبر متجركة من الحسابات المتوفرة بأسعار مناسبة',
      buttonText: 'اقرأ المزيد',
      bgColor: 'linear-gradient(45deg, #833AB4, #C13584, #E1306C)',
      icon: '📷',
      platform: 'instagram'
    },
    {
      id: 3,
      title: 'متجر بيع بوزارت تيك توك',
      description: 'متجر بيع تيك توك. أكبر توفر واختلك منصات التواصل الاجتماعي استخداماً في الوقت الحالي حيث يشهد تطوراً سريعاً ومتواصلاً متميزة',
      buttonText: 'اقرأ المزيد',
      bgColor: '#000000',
      icon: '🎵',
      platform: 'tiktok'
    },
    {
      id: 4,
      title: 'متجر بيع بوزارت سناب شات',
      description: 'متجر بيع بوزارت سناب شات',
      buttonText: 'اقرأ المزيد',
      bgColor: '#FFFC00',
      icon: '👻',
      platform: 'snapchat'
    },
    {
      id: 5,
      title: 'متجر بيع بوزارت تويتر',
      description: 'متجر بيع بوزارت تويتر',
      buttonText: 'اقرأ المزيد',
      bgColor: '#1DA1F2',
      icon: '🐦',
      platform: 'twitter'
    },
    {
      id: 6,
      title: 'متجر بيع بوزارت فيسبوك',
      description: 'متجر بيع بوزارت فيسبوك',
      buttonText: 'اقرأ المزيد',
      bgColor: '#1877F2',
      icon: '👍',
      platform: 'facebook'
    },
    {
      id: 7,
      title: 'خدمات زيادة المتابعين',
      description: 'نوفر لك أفضل خدمات زيادة المتابعين الحقيقيين على جميع منصات التواصل الاجتماعي بأسعار تنافسية',
      buttonText: 'اقرأ المزيد',
      bgColor: '#ff6b35',
      icon: '👥',
      platform: 'followers'
    },
    {
      id: 8,
      title: 'إدارة حسابات سوشيال ميديا',
      description: 'فريق محترف لإدارة حساباتك على مواقع التواصل الاجتماعي وزيادة التفاعل والوصول',
      buttonText: 'اقرأ المزيد',
      bgColor: '#9b59b6',
      icon: '📊',
      platform: 'management'
    },
    {
      id: 9,
      title: 'تصميم محتوى احترافي',
      description: 'تصميمات احترافية وجذابة لمنشوراتك على السوشيال ميديا تزيد من تفاعل الجمهور',
      buttonText: 'اقرأ المزيد',
      bgColor: '#e74c3c',
      icon: '🎨',
      platform: 'design'
    },
    {
      id: 10,
      title: 'خدمات الإعلانات الممولة',
      description: 'إدارة الحملات الإعلانية على جميع منصات التواصل بكفاءة عالية ونتائج مضمونة',
      buttonText: 'اقرأ المزيد',
      bgColor: '#3498db',
      icon: '📢',
      platform: 'ads'
    },
    {
      id: 11,
      title: 'استشارات التسويق الرقمي',
      description: 'نقدم استشارات متخصصة في التسويق الرقمي لتطوير استراتيجيتك التسويقية',
      buttonText: 'اقرأ المزيد',
      bgColor: '#2ecc71',
      icon: '💡',
      platform: 'consulting'
    },
    {
      id: 12,
      title: 'خدمات تحليل البيانات',
      description: 'تحليل شامل لأداء حساباتك ووضع خطط تحسين فعالة بناءً على البيانات',
      buttonText: 'اقرأ المزيد',
      bgColor: '#f39c12',
      icon: '📈',
      platform: 'analytics'
    }
  ];

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <div className="blog">
      <div className="blog__header">
        <h1 className="blog__title">المدونة</h1>
        <div className="blog__title-underline"></div>
      </div>

      <div className="blog__grid">
        {blogPosts.slice(0, visiblePosts).map((post) => (
          <div key={post.id} className="blog__card">
            <div 
              className="blog__card-image"
              style={{ background: post.bgColor }}
            >
              <div className="blog__card-logo">
                <span className="blog__card-logo-letter">e</span>
              </div>
              <div className="blog__card-icon">{post.icon}</div>
              <div className="blog__card-line"></div>
              <h3 className="blog__card-platform-title">{post.title.includes('توثيق') ? 'توثيق حسابات' : 'بوزارت للبيع'}</h3>
            </div>
            <div className="blog__card-content">
              <h4 className="blog__card-title">{post.title}</h4>
              <p className="blog__card-description">{post.description}</p>
              <button 
                className="blog__card-button"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                {post.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {visiblePosts < blogPosts.length && (
        <div className="blog__load-more">
          <button className="blog__load-more-btn" onClick={handleLoadMore}>
            تحميل المزيد
          </button>
        </div>
      )}
    </div>
  );
});

Blog.displayName = 'Blog';

export default Blog;

