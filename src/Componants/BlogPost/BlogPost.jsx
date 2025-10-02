import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = memo(() => {
  const { id } = useParams();

  const blogData = {
    1: {
      title: 'توثيق حسابات تويتر',
      subtitle: 'توثيق حسابات',
      bgColor: '#1DA1F2',
      icon: '🐦',
      content: 'توثيق في أحد أشهر منصات التواصل الاجتماعي في العالم، حيث يستخدمها من قبل الملايين من المستخدمين من الأشخاص العاديين التواصل مع المتابعين بشكل صحيح. المقدمة قام موقع تويتر بإطلاق خاصية جديدة للمستخدمين الذين يملكون على المنصة، فلم تكن بإمكانك إلى التحقق والتحسين النية على مستخدمي تويتر بإطلاق حملة.',
      relatedPosts: [
        { id: 3, title: 'متجر بيع بوزارت تيك توك', subtitle: 'بوزارت تيرة', icon: '🎵', bgColor: '#000000' },
        { id: 2, title: 'متجر بيع بوزارت للانستقرام', subtitle: 'بوزارت للبيع', icon: '📷', bgColor: 'linear-gradient(45deg, #833AB4, #C13584, #E1306C)' },
        { id: 7, title: 'زيادة متابعين تويتر', subtitle: 'زيادة متابعين لحسابك', icon: '🐦', bgColor: '#1DA1F2' }
      ]
    },
    2: {
      title: 'متجر بيع بوزارت للانستقرام',
      subtitle: 'بوزارت للبيع',
      bgColor: 'linear-gradient(45deg, #833AB4, #C13584, #E1306C)',
      icon: '📷',
      content: 'متجر بيع بوزارت انستقرام - أكبر متجر في الشرق الأوسط لبيع الحسابات المميزة بأسعار مناسبة. نوفر لك مجموعة كبيرة من الحسابات الموثقة والحسابات القديمة والحسابات ذات المتابعين الحقيقيين.',
      relatedPosts: [
        { id: 1, title: 'توثيق حسابات تويتر', subtitle: 'توثيق حسابات', icon: '🐦', bgColor: '#1DA1F2' },
        { id: 3, title: 'متجر بيع بوزارت تيك توك', subtitle: 'بوزارت للبيع', icon: '🎵', bgColor: '#000000' },
        { id: 4, title: 'متجر بيع بوزارت سناب شات', subtitle: 'بوزارت للبيع', icon: '👻', bgColor: '#FFFC00' }
      ]
    },
    3: {
      title: 'متجر بيع بوزارت تيك توك',
      subtitle: 'بوزارت للبيع',
      bgColor: '#000000',
      icon: '🎵',
      content: 'متجر بيع تيك توك - أكبر متجر لبيع حسابات تيك توك المميزة. نوفر حسابات موثقة وحسابات بمتابعين حقيقيين وحسابات قديمة لمساعدتك في النجاح على المنصة.',
      relatedPosts: [
        { id: 1, title: 'توثيق حسابات تويتر', subtitle: 'توثيق حسابات', icon: '🐦', bgColor: '#1DA1F2' },
        { id: 2, title: 'متجر بيع بوزارت للانستقرام', subtitle: 'بوزارت للبيع', icon: '📷', bgColor: 'linear-gradient(45deg, #833AB4, #C13584, #E1306C)' },
        { id: 5, title: 'متجر بيع بوزارت تويتر', subtitle: 'بوزارت للبيع', icon: '🐦', bgColor: '#1DA1F2' }
      ]
    }
  };

  const post = blogData[id] || blogData[1];

  return (
    <div className="blog-post">
      <div className="blog-post__container">
        {/* Content Section */}
        <div className="blog-post__content-wrapper">
          {/* Sidebar */}
          <aside className="blog-post__sidebar">
            <h3 className="blog-post__sidebar-title">مقالات ذات صلة</h3>
            <div className="blog-post__related">
              {post.relatedPosts.map((relatedPost) => (
                <a 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.id}`}
                  className="blog-post__related-item"
                >
                  <div 
                    className="blog-post__related-image"
                    style={{ background: relatedPost.bgColor }}
                  >
                    <div className="blog-post__related-logo">
                      <span className="blog-post__related-logo-letter">e</span>
                    </div>
                    <div className="blog-post__related-icon">{relatedPost.icon}</div>
                  </div>
                  <div className="blog-post__related-content">
                    <h4 className="blog-post__related-title">
                      متجر بيع<br />
                      {relatedPost.title.split(' ').slice(-2).join(' ')}
                    </h4>
                    <p className="blog-post__related-subtitle">{relatedPost.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </aside>

          <div className="blog-post__main">
            <h2 className="blog-post__title">{post.title}</h2>

            {/* Small Hero Banner */}
            <div className="blog-post__banner">
              <div 
                className="blog-post__banner-image"
                style={{ background: post.bgColor }}
              >
                <div className="blog-post__banner-logo">
                  <span className="blog-post__banner-logo-letter">e</span>
                </div>
                <div className="blog-post__banner-icon">{post.icon}</div>
                <div className="blog-post__banner-line"></div>
                <h3 className="blog-post__banner-subtitle">{post.subtitle}</h3>
              </div>
            </div>
            
            <div className="blog-post__intro">
              <h3 className="blog-post__intro-title">المقدمة</h3>
              <p className="blog-post__text">{post.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

BlogPost.displayName = 'BlogPost';

export default BlogPost;

