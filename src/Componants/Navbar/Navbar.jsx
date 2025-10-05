import React, { useState, useCallback, memo } from 'react';

const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    setMobileDropdown(null); // إغلاق أي dropdown مفتوح عند فتح/إغلاق القائمة
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setMobileDropdown(null);
  }, []);

  const toggleMobileDropdown = useCallback((dropdownName) => {
    setMobileDropdown(prev => prev === dropdownName ? null : dropdownName);
  }, []);

  const handleMouseEnter = useCallback((dropdownName) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(dropdownName);
  }, [dropdownTimeout]);

  const handleMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // تأخير 300ms قبل إغلاق القائمة
    setDropdownTimeout(timeout);
  }, []);

  const linkClass = "text-[#999999] text-[13px] font-semibold py-[0.4rem] px-0 transition-colors duration-300 no-underline block whitespace-nowrap hover:text-[#ff6b35]";
  const buttonClass = "bg-none border-none text-[#999999] text-[13px] font-semibold cursor-pointer py-[0.4rem] px-0 transition-colors duration-300 whitespace-nowrap hover:text-[#ff6b35]";

  return (
    <nav className="bg-white py-2 relative z-[1000] shadow-[0_4px_15px_rgba(255,107,53,0.15)] border border-[#ff6b35] rounded-xl my-4 mx-4 lg:mx-10 -mb-10">
      <div className="max-w-[900px] mx-auto px-4 flex flex-col gap-1">
        {/* Header: Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between w-full lg:hidden py-2">
          <div className="flex-1">
            <a href="/" className="no-underline flex items-center">
              <img src="/Storage.png" alt="Storage Logo" className="h-[80px] w-auto" />
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="bg-transparent border-none cursor-pointer p-[0.4rem] rounded-md transition-all duration-300 relative hover:bg-[rgba(255,107,53,0.2)]">
              <span className="text-base block grayscale opacity-70">🛒</span>
              <span className="absolute -top-0.5 -right-0.5 bg-[#ff6b35] text-white text-[9px] font-bold py-0.5 px-[5px] rounded-lg min-w-4 text-center">0</span>
            </button>
            <button className="bg-transparent border-none cursor-pointer p-[0.4rem] rounded-md transition-all duration-300 hover:bg-[rgba(255,107,53,0.2)]">
              <span className="text-base block grayscale opacity-70">👤</span>
            </button>
          </div>

          <button
            className={`flex flex-col gap-[5px] bg-none border-none cursor-pointer p-2 transition-all duration-300 ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-[25px] h-[3px] bg-[#ff6b35] rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`w-[25px] h-[3px] bg-[#ff6b35] rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-[25px] h-[3px] bg-[#ff6b35] rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
        <div className="w-full hidden lg:flex flex-col items-center gap-1">
          <ul className="flex items-center justify-center gap-6 list-none m-0 p-0 flex-row-reverse pt-1">
            <li className="relative">
              <a href="/blog" className={linkClass}>المدونة</a>
            </li>

            <li className="relative" onMouseEnter={() => handleMouseEnter('social')} onMouseLeave={handleMouseLeave}>
              <a href="/social-media-services" className={linkClass}>خدمات مواقع التواصل الاجتماعي <span className="text-[8px] mr-1 text-[#bbbbbb]">▼</span></a>
              {openDropdown === 'social' && (
                <div 
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-[0_8px_20px_rgba(255,107,53,0.2)] min-w-[280px] p-3 z-50"
                  onMouseEnter={() => handleMouseEnter('social')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mb-2">
                    <h4 className="text-[#ff6b35] font-bold text-sm mb-3 pb-2 border-b-2 border-[#ff6b35] text-left">سناب شات</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-1">
                      <li>
                        <a href="/social-media-services" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          عرض الكل
                        </a>
                      </li>
                      <li>
                        <a href="/snapchat-capture" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          كابشر سناب شات
                        </a>
                      </li>
                      <li>
                        <a href="/snapchat-points" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          نقاط سناب شات
                        </a>
                      </li>
                      <li>
                        <a href="/snapchat-story-views" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          مشاهدات ستوري سناب شات
                        </a>
                      </li>
                      <li>
                        <a href="/snapchat-followers" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          زيادة متابعين سناب شات
                        </a>
                      </li>
              </ul>
                  </div>
                </div>
              )}
            </li>

            <li className="relative" onMouseEnter={() => handleMouseEnter('sale')} onMouseLeave={handleMouseLeave}>
              <a href="/accounts-for-sale" className={linkClass}>حسابات للبيع <span className="text-[8px] mr-1 text-[#bbbbbb]">▼</span></a>
              
              {/* Dropdown Menu for Sale Accounts */}
              {openDropdown === 'sale' && (
                <div 
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-[0_8px_20px_rgba(255,107,53,0.2)] min-w-[280px] p-3 z-50"
                  onMouseEnter={() => handleMouseEnter('sale')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mb-2">
                    <h4 className="text-[#ff6b35] font-bold text-sm mb-3 pb-2 border-b-2 border-[#ff6b35] text-left">حسابات للبيع</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-1">
                      <li>
                        <a href="/snapchat-accounts" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          حسابات سناب شات
                        </a>
                      </li>
                      <li>
                        <a href="#instagram-accounts" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          حسابات انستقرام
                        </a>
                      </li>
                      <li>
                        <a href="#tiktok-accounts" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          حسابات تيك توك
                        </a>
                      </li>
                      <li>
                        <a href="#twitter-accounts" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          حسابات تويتر
                        </a>
                      </li>
              </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="relative" onMouseEnter={() => handleMouseEnter('ads')} onMouseLeave={handleMouseLeave}>
              <a href="/ads-campaigns-services" className={linkClass}>اداره الحملات الاعلانية <span className="text-[8px] mr-1 text-[#bbbbbb]">▼</span></a>
              
              {/* Dropdown Menu for Ads Campaigns */}
              {openDropdown === 'ads' && (
                <div 
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-[0_8px_20px_rgba(255,107,53,0.2)] min-w-[280px] p-3 z-50"
                  onMouseEnter={() => handleMouseEnter('ads')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mb-2">
                    <h4 className="text-[#ff6b35] font-bold text-sm mb-3 pb-2 border-b-2 border-[#ff6b35] text-left">إدارة الحملات الإعلانية</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-1">
                      <li>
                        <a href="/snapchat-ads" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          إعلانات سناب شات
                        </a>
                      </li>
                      <li>
                        <a href="#instagram-ads" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          إعلانات انستقرام
                        </a>
                      </li>
                      <li>
                        <a href="#tiktok-ads" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          إعلانات تيك توك
                        </a>
                      </li>
                      <li>
                        <a href="#twitter-ads" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          إعلانات تويتر (X)
                        </a>
                      </li>
                      <li>
                        <a href="#facebook-ads" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          إعلانات فيسبوك
                        </a>
                      </li>
                      <li>
                        <a href="#google-ads" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          إعلانات جوجل
                        </a>
                      </li>
              </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="relative" onMouseEnter={() => handleMouseEnter('verification')} onMouseLeave={handleMouseLeave}>
              <a href="/verification-services" className={linkClass}>توثيق حسابات <span className="text-[8px] mr-1 text-[#bbbbbb]">▼</span></a>
            </li>
            <li className="relative" onMouseEnter={() => handleMouseEnter('usernames')} onMouseLeave={handleMouseLeave}>
              <a href="/usernames-services" className={linkClass}>يوزرات <span className="text-[8px] mr-1 text-[#bbbbbb]">▼</span></a>
              
              {/* Dropdown Menu for Usernames */}
              {openDropdown === 'usernames' && (
                <div 
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-[0_8px_20px_rgba(255,107,53,0.2)] min-w-[280px] p-3 z-50"
                  onMouseEnter={() => handleMouseEnter('usernames')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mb-2">
                    <h4 className="text-[#ff6b35] font-bold text-sm mb-3 pb-2 border-b-2 border-[#ff6b35] text-left">يوزرات</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-1">
                      <li>
                        <a href="#snapchat-usernames" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          يوزرات سناب شات
                        </a>
                        <div className="flex flex-col gap-1 mt-1 mr-6">
                          <a href="/username-3char" className="block py-1 px-2 text-[#666666] text-xs font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] text-left bg-[#f8f9fa]">
                            يوزر ثلاثي
                          </a>
                          <a href="/username-4char" className="block py-1 px-2 text-[#666666] text-xs font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] text-left bg-[#f8f9fa]">
                            يوزر رباعي
                          </a>
                        </div>
                      </li>
                      <li>
                        <a href="#instagram-usernames" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          يوزرات انستقرام
                        </a>
                      </li>
                      <li>
                        <a href="#tiktok-usernames" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          يوزرات تيك توك
                        </a>
                      </li>
                      <li>
                        <a href="#twitter-usernames" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          يوزرات تويتر (X)
                        </a>
                      </li>
                      <li>
                        <a href="#discord-usernames" className="block py-2 px-3 text-[#333333] text-sm font-semibold rounded-md transition-all duration-200 hover:bg-[rgba(255,107,53,0.1)] hover:text-[#ff6b35] hover:pl-4 text-left">
                          يوزرات ديسكورد
                        </a>
                      </li>
              </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="relative flex items-center gap-3" onMouseEnter={() => handleMouseEnter('accounts')} onMouseLeave={handleMouseLeave}>
              <button className={buttonClass}>اداره حسابات <span className="text-[8px] mr-1 text-[#bbbbbb]">▼</span></button>
              <div className="flex items-center gap-2">
                <button className="bg-transparent border-none cursor-pointer p-[0.4rem] rounded-md transition-all duration-300 relative hover:bg-[rgba(255,107,53,0.2)]">
                  <span className="text-base block grayscale opacity-70">🛒</span>
                  <span className="absolute -top-0.5 -right-0.5 bg-[#ff6b35] text-white text-[9px] font-bold py-0.5 px-[5px] rounded-lg min-w-4 text-center">0</span>
                </button>
                <button className="bg-transparent border-none cursor-pointer p-[0.4rem] rounded-md transition-all duration-300 hover:bg-[rgba(255,107,53,0.2)]">
                  <span className="text-base block grayscale opacity-70">🌙</span>
                </button>
                <button className="bg-transparent border-none cursor-pointer p-[0.4rem] rounded-md transition-all duration-300 hover:bg-[rgba(255,107,53,0.2)]">
                  <span className="text-base block grayscale opacity-70">👤</span>
                </button>
                <button className="bg-transparent border-none cursor-pointer p-[0.4rem] rounded-md transition-all duration-300 hover:bg-[rgba(255,107,53,0.2)]">
                  <span className="text-base block grayscale opacity-70">🔍</span>
                </button>
              </div>
            </li>
              </ul>

          {/* Second Row */}
          <ul className="flex items-center justify-center gap-6 list-none m-0 p-0 flex-row-reverse pb-1">
            <li className="relative" onMouseEnter={() => handleMouseEnter('design')} onMouseLeave={handleMouseLeave}>
              <button className={buttonClass}>التصميم الجرافيكي <span className="text-[8px] mr-1 text-[#bbbbbb]">▼</span></button>
            </li>
            <li className="relative" onMouseEnter={() => handleMouseEnter('programming')} onMouseLeave={handleMouseLeave}>
              <button className={buttonClass}>برمجة الويب <span className="text-[8px] mr-1 text-[#bbbbbb]">▼</span></button>
            </li>
            <li className="relative">
              <a href="#motion" className={linkClass}>الموشن جرافيك</a>
            </li>
          </ul>
        </div>

        {/* Logo Row - Desktop Only */}
        <div className="hidden lg:flex items-start justify-start w-full pb-1">
          <div className="mr-auto">
            <a href="/" className="no-underline flex items-center">
              <img src="/storagelogo(1)(1).jpg" alt="Storage Logo" className="h-[220px] w-auto -mt-32" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 bg-white border-t border-[rgba(255,107,53,0.2)] ${isMenuOpen ? 'max-h-[1000px] py-4' : 'max-h-0'}`}>
        <ul className="list-none p-0 m-0 max-w-[900px] mx-auto px-4">
          <li className="border-b border-[rgba(255,107,53,0.1)]">
            <a href="/blog" className="block py-3 px-3 text-[#333333] text-sm no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              المدونة
            </a>
          </li>
          
          {/* خدمات السوشيال ميديا مع dropdown */}
          <li className="border-b border-[rgba(255,107,53,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-[#333333] text-sm font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('social')}
            >
              <span className={`text-[10px] transition-transform duration-300 ${mobileDropdown === 'social' ? 'rotate-180' : ''}`}>▼</span>
              <span>خدمات مواقع التواصل الاجتماعي</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'social' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/social-media-services" className="block py-2 px-4 text-[#666666] text-xs no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6" onClick={closeMenu}>
                    عرض الكل
                  </a>
                </li>
                <li>
                  <a href="/snapchat-capture" className="block py-2 px-4 text-[#666666] text-xs no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6" onClick={closeMenu}>
                    كابشر سناب شات
                  </a>
                </li>
                <li>
                  <a href="/snapchat-points" className="block py-2 px-4 text-[#666666] text-xs no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6" onClick={closeMenu}>
                    نقاط سناب شات
                  </a>
                </li>
                <li>
                  <a href="/snapchat-story-views" className="block py-2 px-4 text-[#666666] text-xs no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6" onClick={closeMenu}>
                    مشاهدات ستوري
                  </a>
                </li>
                <li>
                  <a href="/snapchat-followers" className="block py-2 px-4 text-[#666666] text-xs no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6" onClick={closeMenu}>
                    زيادة متابعين
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* حسابات للبيع مع dropdown */}
          <li className="border-b border-[rgba(255,107,53,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-[#333333] text-sm font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('sale')}
            >
              <span className={`text-[10px] transition-transform duration-300 ${mobileDropdown === 'sale' ? 'rotate-180' : ''}`}>▼</span>
              <span>حسابات للبيع</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'sale' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/snapchat-accounts" className="block py-2 px-4 text-[#666666] text-xs no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6" onClick={closeMenu}>
                    حسابات سناب شات
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* إدارة الحملات الإعلانية مع dropdown */}
          <li className="border-b border-[rgba(255,107,53,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-[#333333] text-sm font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('ads')}
            >
              <span className={`text-[10px] transition-transform duration-300 ${mobileDropdown === 'ads' ? 'rotate-180' : ''}`}>▼</span>
              <span>إدارة الحملات الإعلانية</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'ads' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/snapchat-ads" className="block py-2 px-4 text-[#666666] text-xs no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6" onClick={closeMenu}>
                    إعلانات سناب شات
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="border-b border-[rgba(255,107,53,0.1)]">
            <a href="/verification-services" className="block py-3 px-3 text-[#333333] text-sm no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              توثيق حسابات
            </a>
          </li>

          {/* يوزرات مع dropdown */}
          <li className="border-b border-[rgba(255,107,53,0.1)]">
            <button 
              className="w-full flex items-center justify-between py-3 px-3 text-[#333333] text-sm font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] rounded-md bg-transparent border-none cursor-pointer text-right"
              onClick={() => toggleMobileDropdown('usernames')}
            >
              <span className={`text-[10px] transition-transform duration-300 ${mobileDropdown === 'usernames' ? 'rotate-180' : ''}`}>▼</span>
              <span>يوزرات</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === 'usernames' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <ul className="list-none p-0 m-0 bg-[rgba(255,107,53,0.05)] rounded-md mr-4 mb-2">
                <li>
                  <a href="/username-3char" className="block py-2 px-4 text-[#666666] text-xs no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6" onClick={closeMenu}>
                    يوزر ثلاثي
                  </a>
                </li>
                <li>
                  <a href="/username-4char" className="block py-2 px-4 text-[#666666] text-xs no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6" onClick={closeMenu}>
                    يوزر رباعي
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="border-b border-[rgba(255,107,53,0.1)]">
            <a href="#accounts" className="block py-3 px-3 text-[#333333] text-sm no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              إدارة حسابات
            </a>
          </li>

          <li className="border-b border-[rgba(255,107,53,0.1)]">
            <a href="#design" className="block py-3 px-3 text-[#333333] text-sm no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              التصميم الجرافيكي
            </a>
          </li>

          <li className="border-b border-[rgba(255,107,53,0.1)]">
            <a href="#programming" className="block py-3 px-3 text-[#333333] text-sm no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              برمجة الويب
            </a>
          </li>

          <li>
            <a href="#motion" className="block py-3 px-3 text-[#333333] text-sm no-underline font-semibold transition-all duration-300 hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:pr-6 rounded-md" onClick={closeMenu}>
              الموشن جرافيك
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
