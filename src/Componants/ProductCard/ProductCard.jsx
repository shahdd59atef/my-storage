import React from "react";
import { CiHeart } from "react-icons/ci";
import { PiShareFat } from "react-icons/pi";
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className="product-card flex flex-col md:flex-row items-start justify-between bg-[#1F1F2C] text-white p-6 rounded-2xl shadow-lg max-w-5xl mx-auto my-10">
      
      {/* الجزء الشمال (التفاصيل) */}
      <div className="flex-1 space-y-4 relative">
        {/* الأيقونات */}
        <div className="flex items-center gap-4 mb-4">
          <button className="text-gray-300 hover:text-yellow-400 text-2xl transition-all">
            <CiHeart />
          </button>
          <button className="text-gray-300 hover:text-yellow-400 text-2xl transition-all">
            <PiShareFat />
          </button>
        </div>

        {/* الاسم والسعر */}
        <h2 className="text-2xl font-semibold no-divider">مشاهدات سناب 100</h2>
        <p className="text-gray-400 text-lg">75 ﷼</p>

        {/* عدد المبيعات */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span className="text-yellow-400 text-xl">🔥</span>
          تم بيعه أكثر من <span className="font-bold text-white">6</span>
        </div>

        {/* الوصف */}
        <p className="text-gray-400 leading-relaxed">
          ضع اسم المستخدم الخاص بك في منطقة الرابط<br />
          100 مشاهدة فعّالة لجميع قصصك (حد 20 قصة)
        </p>

        {/* الزر */}
        <button className="bg-[#343444] text-white font-semibold w-full py-3 rounded-md hover:bg-yellow-400 hover:text-[#1F1F2C] transition">
          إضافة للسلة
        </button>
      </div>

      {/* الجزء اليمين (الصورة) */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src="https://cdn.salla.sa/DQYwE/40c6b05a-e635-47e1-87ea-ac765b6e3f40-400x500-QGuJ4XmWyyOvg1ZUcOmY28x7RGEIk9PLWpHWXHtd.jpg"
          alt="مشاهدات سناب"
          className="rounded-2xl w-[90%] max-w-sm"
        />
      </div>
    </div>
  );
};

export default ProductCard;
