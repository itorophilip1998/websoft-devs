import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" data-aos="fade-up">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt=""
                width={140}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-lg font-semibold text-white">Websoft</span>
            </Link>
            <p className="text-sm mb-4">
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                  Product Management
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Remote</li>
              <li>Phone: +2349024195493</li>
              <li>
                Email:{' '}
                <a
                  href="mailto:itorophilip1998@example.com"
                  className="hover:text-white transition-colors"
                >
                  itorophilip1998@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar: Websoft left, copyright right */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="font-semibold text-white">Websoft</p>
          <p>&copy; {new Date().getFullYear()} Websoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
