import React from 'react';
import './style.css'
const backgroundImageUrl = '/furniture.jpg'
const LandingHero = () => {
    return (
        <div className="relative h-screen">
            {/* Nền mờ và độ trong suốt */}
            <div
                className="absolute inset-0 h-full"
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`, // Đường dẫn đến hình ảnh nền
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'no-repeat' // Màu nền mờ và độ trong suốt
                }}
            ></div>
            {/* Nội dung của phần hero */}
            <div className="relative flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-5xl font-extralight mb-4">Chào mừng đến với nội thất Khang Gia </h1>
                <p className="text-xl mb-8 text-white font-light">Khám phá những mẫu sản phẩm thanh lịch và bền bỉ cho ngôi nhà của bạn</p>

                <a
                    href="/hero"
                    className="bg-orange-500 hover:bg-amber-500 text-white py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Xem thêm
                </a>
            </div>
        </div>
    );
};

export default LandingHero;
