'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiAlignJustify, FiAlignRight } from "react-icons/fi";
import { hrtime } from "process";


export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false);
 const links = [
      { href: "/", label: "Home" },
      { href: "/Events", label: "Events" },
      {href: "/Seal", label: "Seal Application" },
      { href: "/Awards", label: "Awards Nomination" },
      { href: "/Investor", label: "Investor Portal" },

    ];
  return (
   <nav className="navbar bg-green-900 sticky top-0 z-[1000] shadow-lg px-6 py-4 flex justify-between items-center">
   <div className="text-2xl font-bold">
    <Image
      src="/logo.jpg"
      alt="Logo"    
      width={100}
      height={100}    
    />
   </div>

       <ul className="hidden md:flex gap-6">
        {links.map((link) => (
            <li key={link.href}>
                <Link href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.label}      
                </Link>
            </li>
        ))}
      </ul>

      {/* Mobile view */}
     <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiAlignRight size={30} /> : <FiAlignJustify size={30} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-20 right-0 w-2/3 h-screen bg-gray-900 flex flex-col p-5 gap-6 z-50">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:bg-gray-700 rounded-md bg-gray-800 p-2 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}