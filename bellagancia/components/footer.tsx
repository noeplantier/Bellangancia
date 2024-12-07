import { Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-pink-900/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-pink-200 mb-4">About Us</h3>
            <p className="text-pink-300">
              Bellagancia offers premium beauty care products for those who appreciate
              luxury and quality in their self-care routine.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-pink-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/body-care" className="text-pink-300 hover:text-pink-100">
                  Body Care
                </Link>
              </li>
              <li>
                <Link href="/nail-beauty" className="text-pink-300 hover:text-pink-100">
                  Nail Beauty
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-pink-200 mb-4">Contact</h3>
            <ul className="space-y-2 text-pink-300">
              <li>Email: contact@bellagancia.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-pink-200 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-pink-300 hover:text-pink-100">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-pink-300 hover:text-pink-100">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-pink-300 hover:text-pink-100">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pink-900/20 text-center text-pink-300">
          <p>&copy; {new Date().getFullYear()} Bellagancia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;