"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiAlignJustify, FiAlignRight } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About Us" },
      { href: "/Events", label: "Events" },
    { href: "/Seal", label: "Seal Application" },
    { href: "/Awards", label: "Awards Nomination" },
    { href: "/Investor", label: "Investor Portal" },
      { href: "/ContactUs", label: "Contact US" },
  ];
  return (
    <nav className="navbar bg-white  sticky top-0 z-[1000] shadow-lg px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>

      <ul className="hidden md:flex gap-6 text-black font-medium">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="transition-colors hover:text-red-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile view */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FiAlignRight size={30} color="black" />
        ) : (
          <FiAlignJustify size={30} color="black" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="fixed top-20 right-0 w-2/3 h-[calc(100vh-5rem)] bg-white flex flex-col p-5 gap-6 z-50 overflow-y-auto">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:bg-gray-700 rounded-md bg-gray-800 p-2 text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
