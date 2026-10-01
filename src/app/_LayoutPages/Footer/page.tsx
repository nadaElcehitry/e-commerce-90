import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCreditCard
} from "react-icons/fa";
import logo from "../../../assets/freshcart-logo.49f1b44d.svg"
import Additional from "@/app/_sharedComponent/Additional/Additional";

export default function Footer() {
  return (
    <>
      <section className="bg-green-50 max-w-full">
        <Additional />

      </section>
      <footer className="bg-gray-900 max-w-full text-white ">

        <div className="container max-w-7xl  mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

            <div className="lg:col-span-4">
              <Link className="inline-block mb-6" href="/">
                <div className="bg-white rounded-lg px-4 py-2 inline-block">
                  <Image
                    alt="FreshCart Logo"
                    width={160}
                    height={31}
                    className="h-8 w-auto"
                    src={logo}
                  />
                </div>
              </Link>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
              </p>

              <div className="space-y-3 mb-6">
                <Link href={'tel:+18001234567'} className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  <FaPhoneAlt className="text-emerald-500" />
                  <span>+1 (800) 123-4567</span>
                </Link>
                <Link href={'mailto:support@freshcart.co'} className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  <FaEnvelope className="text-emerald-500" />
                  <span>support@freshcart.com</span>
                </Link>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="text-emerald-500 mt-0.5" />
                  <span>123 Commerce Street, New York, NY 10001</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link href={'/'} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors">
                  <FaFacebookF />
                </Link>
                <Link href={'/'} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors">
                  <FaTwitter />
                </Link>
                <Link href={'/'} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors">
                  <FaInstagram />
                </Link>
                <Link href={'/'} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors">
                  <FaYoutube />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Shop</h3>
              <ul className="space-y-3 text-sm">
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/Products'}>All Products</Link></li>
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/Categories'}>Categories</Link></li>
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/Brands'}>Brands</Link></li>
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/Whishlist'}>WhishList</Link></li>

              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Account</h3>
              <ul className="space-y-3 text-sm">
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/Whishlist'}>Wishlist</Link></li>
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/Cart'}>Shopping Cart</Link></li>
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/Login'}>Sign In</Link></li>
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/Register'}>Create Account</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Support</h3>
              <ul className="space-y-3 text-sm">
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href="/">Shipping Info</Link></li>
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href="/">Returns &amp; Refunds</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/Privacy'}>Privacy Policy</Link></li>
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/Terms'}>Terms of Service</Link></li>
                <li><Link className="text-gray-400 hover:text-emerald-400 transition-colors" href={'/'}>Cookie Policy</Link></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="container max-w-7xl  mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {new Date().getFullYear()} FreshCart. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FaCreditCard /> <span>Visa</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FaCreditCard /> <span>Mastercard</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FaCreditCard /> <span>PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}