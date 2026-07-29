'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-paper/90 backdrop-blur-sm border-b border-graphite/20">
        <Link href="#home" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-widest text-ink">Portfolio</span>
          <span className="label-sm text-graphite mt-1">Web Engineer</span>
        </Link>

        <div className="flex items-center gap-8 md:gap-10">
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label-sm text-graphite hover:text-blueprint transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-6 h-6 gap-1.5 md:hidden z-50 focus:outline-none"
            aria-label="メニューを開閉"
          >
            <span className={`h-0.5 w-6 bg-ink transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-ink transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-ink transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-paper/95 z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="font-display text-2xl text-ink hover:text-blueprint"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}