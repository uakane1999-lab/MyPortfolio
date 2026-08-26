// src/app/components/Navigation.tsx
//ナビゲーションバー

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/profile' },
  { label: 'PROJECTS', href: '/project' },
  { label: 'CONTACT', href: '/#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="Portfolio"
            width={320}
            height={96}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-8 md:gap-10">
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="label-sm text-ink hover:text-blueprint-muted transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="z-50 flex h-6 w-6 flex-col items-center justify-center gap-1.5 focus:outline-none md:hidden"
            aria-label="メニューを開閉"
          >
            <span
              className={`bg-ink h-0.5 w-6 transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`bg-ink h-0.5 w-6 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`bg-ink h-0.5 w-6 transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`bg-paper/95 fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={closeMenu}
            className="font-display text-ink hover:text-blueprint-muted text-2xl"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
