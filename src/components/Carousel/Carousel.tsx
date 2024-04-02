"use client";
// components/Carousel.js

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "https://img.freepik.com/free-vector/realistic-gradient-smartphone-different-views_52683-28259.jpg?w=900&t=st=1711355495~exp=1711356095~hmac=7aad42f0aa04243af38839e6ff33fbf70cd9908637a1c2f153e98a0cb026f9aa",
  "https://img.freepik.com/free-vector/flat-design-smartphone-different-perspectives_52683-52558.jpg?w=900&t=st=1711355491~exp=1711356091~hmac=a6585d717210b76e2d2b78f22e9fe0aaf0058b29b5c7fc507ba334658c2d526b",
  "https://img.freepik.com/free-photo/new-smartphone-balancing-with-podium_23-2150296471.jpg?w=900&t=st=1711355488~exp=1711356088~hmac=9c2cbef9303325dddd58c096060e10dbafc1ad6c89644bbe7b0db75308904797",
  "https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?w=900&t=st=1711355485~exp=1711356085~hmac=b3befa52b66e3c2ae4aa07842266eebc49843145fb6184a38b2f4c87d759a10a",
  "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437073.jpg?w=900&t=st=1711355445~exp=1711356045~hmac=b2361d06ebfc9d7c8b960f481c03df63462c67ca0b2ed55f1c2d2d99ecdee6d0",
  "https://img.freepik.com/premium-psd/smartphone-mockup_378375-154.jpg?w=900",
  "https://img.freepik.com/free-photo/mobile-phone-screen-mockup-digital-device_53876-96026.jpg?w=900&t=st=1711355438~exp=1711356038~hmac=d32880a7a38769054f3dbc0f535726b5655ceb53b89be382cf78393d2b126a7e",
  "https://img.freepik.com/free-photo/phone-14-pro-front-side-arabic-themed-background_187299-35433.jpg?w=900&t=st=1711355434~exp=1711356034~hmac=b037d62695e4f9f854a89c8eb40626a5ab8657d6f3b72187f2bca79b038ce51f",
  "https://img.freepik.com/free-photo/phone-14-pro-front-side-arabic-themed-background_187299-35433.jpg?w=900&t=st=1711355434~exp=1711356034~hmac=b037d62695e4f9f854a89c8eb40626a5ab8657d6f3b72187f2bca79b038ce51f",
  "https://img.freepik.com/premium-photo/back-case-two-samsung-galaxy-smartphones_175634-14289.jpg?w=900",
  "https://img.freepik.com/free-vector/realistic-smartphone-different-perspectives_52683-52491.jpg?w=900&t=st=1711360126~exp=1711360726~hmac=0276ace7734d1f4f696fea1ebd87b4dc40b2641221d067ec3de52c3fbf9531da",
  "https://img.freepik.com/premium-photo/mobile-phone-back-view-with-two-cameras-blue-pink-purple-lights-isometric-design_163252-56.jpg?w=900",
  "https://img.freepik.com/premium-photo/presentation-mobile-phone-gold-pacific-blue-colours_241278-191.jpg?w=900",
  "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437080.jpg?w=826&t=st=1711360115~exp=1711360715~hmac=63a2137facb088e9079c77fa0ab65d668c7468e7f7bb5b1ac994852fcd461028",
  "https://img.freepik.com/free-vector/realistic-smartphone-with-three-cameras-different-views_23-2148324135.jpg?w=826&t=st=1711360111~exp=1711360711~hmac=9707bbacd1590b52ba241a35b7d844a8911fc9f03418e6be87b0e33c818d4c8d",
  "https://img.freepik.com/premium-photo/closeup-iphone-14-pro-max-space-black-isolated-black-background-illuminated-by-blue-pink-lights-low-light-3-featured-cameras-selective-focus_442713-5842.jpg?w=900",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative -mb-10 -mt-10">
      <div className="overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ flex: `0 0 ${100 / images.length}%` }}
            >
              <Image
                src={imageUrl}
                alt={`Slide ${index}`}
                layout="responsive"
                width={400}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 px-4 py-2 rounded-l-md"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 px-4 py-2 rounded-r-md"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
