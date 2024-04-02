"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pl-14">
          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Trending Products</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    iPhone 13 Pro
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Samsung Galaxy S21 Ultra
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Google Pixel 6
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    OnePlus 10 Pro
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Xiaomi Mi 12
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Huawei P50 Pro
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Sony Xperia 1 III
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Oppo Find X4 Pro
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Vivo X80 Pro
                  </span>
                </Link>
              </li>
              {/* Add more hardcoded links as needed */}
            </ul>
          </div>
          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Categories/Brands</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Premium flagship smartphone
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    High-end smartphone
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Mid-range smartphone
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Budget smartphone
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Gaming smartphone
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Camera-centric smartphone
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Rugged smartphone
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Foldable smartphone
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    5G smartphone
                  </span>
                </Link>
              </li>
              {/* Add more hardcoded links as needed */}
            </ul>
          </div>
          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Our Story
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Who We Are
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Meet the Team
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Our Mission
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Company Overview
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Our Values
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Why Choose Us
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Our Commitment
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    About PocketTechHub
                  </span>
                </Link>
              </li>
              {/* Add more hardcoded links as needed */}
            </ul>
          </div>
          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Call Us
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Email Us
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Live Chat
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Visit Our Store
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Fill Out Our Contact Form
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Follow Us on Social Media
                  </span>
                </Link>
              </li>

              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Book an Appointment
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Request a Call Back
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Customer Care</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Care Corner
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Service Station
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">Link 1</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Assistance Avenue
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Support Spot
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <span className="text-gray-400 hover:text-white">
                    Help Haven
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-xs">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
