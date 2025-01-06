"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "What We Do", href: "#what-we-do" },
    { title: "About Us", href: "#about" },
    { title: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="container-padding flex items-center justify-between h-20">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Valley of Flower"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 whitespace-nowrap">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <Button variant="primary">Become a Volunteer</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4 whitespace-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-gray-700 hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Button variant="primary" className="w-full">
                Become a Volunteer
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
