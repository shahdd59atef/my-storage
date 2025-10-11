import React from 'react';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingBag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdWhatsapp } from "react-icons/md";
import './BottomNavbar.css';

const BottomNavbar = () => {
  // Open menu function for categories
  const handleCategoriesClick = (e) => {
    e.preventDefault();
    // Trigger hamburger menu click
    const hamburgerBtn = document.querySelector('.hamburger-menu-btn');
    if (hamburgerBtn && typeof hamburgerBtn.click === 'function') {
      hamburgerBtn.click();
    }
  };

  // Open login modal function
  const handleAccountClick = (e) => {
    e.preventDefault();
    // Trigger the account icon click from navbar using ID
    const accountIcon = document.getElementById('navbar-account-icon');
    if (accountIcon && typeof accountIcon.click === 'function') {
      accountIcon.click();
    }
  };

  // Open search bar function
  const handleSearchClick = (e) => {
    e.preventDefault();
    // Trigger the search icon click from navbar using ID
    const searchIcon = document.getElementById('navbar-search-icon');
    if (searchIcon && typeof searchIcon.click === 'function') {
      searchIcon.click();
    }
  };

  return (
    <nav className="bottom-navbar">
      <div className="bottom-navbar__container">
        
        {/* حسابي */}
        <button onClick={handleAccountClick} className="bottom-navbar__item">
          <IoPersonOutline className="bottom-navbar__icon" />
          <span className="bottom-navbar__label">حسابي</span>
        </button>

        {/* السلة */}
        <a href="/cart" className="bottom-navbar__item">
          <div className="bottom-navbar__cart-wrapper">
            <PiShoppingBag className="bottom-navbar__icon" />
            <span className="bottom-navbar__cart-badge">0</span>
          </div>
          <span className="bottom-navbar__label">السلة</span>
        </a>

        {/* التصنيفات */}
        <button onClick={handleCategoriesClick} className="bottom-navbar__item bottom-navbar__item--active">
          <AiOutlineAppstoreAdd className="bottom-navbar__icon" />
          <span className="bottom-navbar__label">التصنيفات</span>
        </button>

        {/* البحث */}
        <button onClick={handleSearchClick} className="bottom-navbar__item">
          <CiSearch className="bottom-navbar__icon" />
          <span className="bottom-navbar__label">بحث</span>
        </button>

        {/* الرئيسية */}
        <a href="/" className="bottom-navbar__item">
          <div className="bottom-navbar__home-wrapper">
            <IoHomeOutline className="bottom-navbar__icon" />
            <MdWhatsapp className="bottom-navbar__whatsapp-icon" />
          </div>
          <span className="bottom-navbar__label">الرئيسية</span>
        </a>

      </div>
    </nav>
  );
};

export default BottomNavbar;
