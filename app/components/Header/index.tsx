// components/Header.tsx
"use client";
import { useState } from "react";
import { ShoppingCart, User, Menu as MenuIcon, X } from "lucide-react";
import Logo from "../Logo";
import Menu from "../Menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { redirectTo: "/", label: "Home" },
    { redirectTo: "/categories", label: "Categories" },
    { redirectTo: "/contact", label: "Contact Us" },
    { redirectTo: "/blog", label: "Blog" },
  ];

  return (
    <header className="w-full px-4  md:h-16 sm:px-6 lg:px-8 flex items-center justify-between fixed top-0 left-0 right-0 bg-[#F1ECE2] z-50 h-16 shadow-md">
      <Logo size={48} />

      {/* Desktop Menu */}
      <div className="hidden md:flex ">
        <Menu links={links} />
      </div>

      {/* Mobile Menu Button */}

      {/* Icons */}
      <div className="flex items-center gap-4">
        <User />
        <ShoppingCart />
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-[#F1ECE2] px-4 py-6 shadow-md z-40 md:hidden">
          <Menu
            links={links}
            isMobile
            onClickLink={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
