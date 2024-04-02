"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    closeMenu();
  };

  return (
    <nav className="bg-gray-800 sticky z-20  top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="cursor-pointer text-white font-bold text-xl">
              P<span className="text-red-400">O</span>CKETTECHHUB
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="catagory">Brands</NavLink>
              <NavLink href="products">Products</NavLink>
              <NavLink href="/flashsale">Flash Sale</NavLink>
              <NavLink href="/dashboard/all-products">Dashboard</NavLink>
              <NavLink href="/aboutus">About Us</NavLink>
              <NavLink href="/contactus">Contact Us</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <BiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-gray-800 z-30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" mobile onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink href="catagory" mobile onClick={closeMenu}>
              Brands
            </NavLink>
            <NavLink href="products" mobile onClick={closeMenu}>
              Products
            </NavLink>
            <NavLink href="/flashsale" mobile onClick={closeMenu}>
              Flash Sale
            </NavLink>
            <NavLink href="/dashboard/all-products" mobile onClick={closeMenu}>
              Dashboard
            </NavLink>
            <NavLink href="/aboutus" mobile onClick={closeMenu}>
              About Us
            </NavLink>
            <NavLink href="/contactus" mobile onClick={closeMenu}>
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );

  function NavLink({ href, children, mobile, ...props }: NavLinkProps) {
    const isActive = activeLink === href;

    return (
      <Link href={href} passHref>
        <div
          className={`text-white cursor-pointer ${
            isActive && !mobile ? "hover:bg-gray-700" : ""
          } ${
            isActive ? "bg-gray-700" : ""
          } px-3 py-2 rounded-md text-sm font-medium`}
          onClick={() => handleLinkClick(href)}
          {...props}
        >
          {children}
        </div>
      </Link>
    );
  }
};

export default Navbar;
