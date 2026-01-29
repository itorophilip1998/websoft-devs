'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn, user } = useUser();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Check if user is admin (you'll need to fetch this from your API)
  const isAdmin = false; // This should be fetched from your API

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Websoft"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                pathname === '/'
                  ? 'text-[var(--primary)] font-semibold'
                  : 'text-gray-700 hover:text-[var(--primary)]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className={`transition-colors ${
                pathname === '/'
                  ? 'text-gray-700 hover:text-[var(--primary)]'
                  : 'text-gray-700 hover:text-[var(--primary)]'
              }`}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`transition-colors ${
                pathname?.startsWith('/blog')
                  ? 'text-[var(--primary)] font-semibold'
                  : 'text-gray-700 hover:text-[var(--primary)]'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                pathname === '/contact'
                  ? 'text-[var(--primary)] font-semibold'
                  : 'text-gray-700 hover:text-[var(--primary)]'
              }`}
            >
              Contact
            </Link>
            {isSignedIn && isAdmin && (
              <Link
                href="/admin"
                className="text-gray-700 hover:text-[var(--primary)] transition-colors"
              >
                Admin
              </Link>
            )}
            {isSignedIn ? (
              <Link
                href="/admin"
                className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/sign-in"
                className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="block text-gray-700 hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-[var(--primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {isSignedIn && isAdmin && (
              <Link
                href="/admin"
                className="block text-gray-700 hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            )}
            {isSignedIn ? (
              <Link
                href="/admin"
                className="block bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-hover)] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/sign-in"
                className="block bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-hover)] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
