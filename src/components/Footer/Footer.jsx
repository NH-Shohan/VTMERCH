"use client";

import Image from "next/image";
import americanexpress from "/public/assets/Icon/american-express.svg";
import amex from "/public/assets/Icon/amex.svg";
import applepay from "/public/assets/Icon/apple-pay.svg";
import dinersclub from "/public/assets/Icon/diners-club.svg";
import mail from "/public/assets/Icon/email.svg";
import facebook from "/public/assets/Icon/facebook.svg";
import instagram from "/public/assets/Icon/instagram-logo.svg";
import linkedin from "/public/assets/Icon/linkedin.svg";
import paypal from "/public/assets/Icon/paypal.svg";
import telephone from "/public/assets/Icon/telephone.svg";
import twitter from "/public/assets/Icon/twitter.svg";
import visa from "/public/assets/Icon/visa.svg";
import logo from "/public/assets/logo/logo_red.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-5 py-20 space-y-12">
        <div className="flex items-center gap-2 border-b border-neutral-700 pb-10">
          <Image
            className="aspect-square h-[6.5vw] w-auto"
            src={logo}
            alt="logo"
            width={115}
            height={115}
          />
          <h3 className="font-semibold sm:font-semibol md:font-bold lg:font-extrabold text-[5.8vw] tracking-widest sm:tracking-widest md:tracking-[12px] leading-none">
            VTMERCH
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-20">
          <div className="space-y-10 col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-2">
            <h5>
              Subscribe and be the first to receive notifications about our
              upcoming releases and the latest news.
            </h5>

            <div className="w-full flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email your email"
                className="bg-transparent border border-white rounded-xl p-2 text-center outline-primary w-full md:w-1/2 lg:w-1/2 xl:w-full"
              />
              <button className="bg-white text-black font-medium rounded-xl p-2 text-center w-full md:w-1/2 lg:w-1/2 xl:w-full hover:bg-primary hover:text-white transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="font-medium text-xl">Customer Services</div>

            <div className="flex flex-col gap-4">
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                About Us
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Search
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Privacy Policy
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Contact Us
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Terms of Service
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Refund Policy
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Track Order
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="font-medium text-xl">Products</div>

            <div className="flex flex-col gap-4">
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Featured Products
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Best Sellers
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Latest Product
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                All Collections
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                All Products
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="font-medium text-xl">Contact Us</div>

            <div className="flex flex-col gap-4">
              <div className="opacity-70">
                Available between 8AM to 8PM. Ready to answer your questions.
              </div>

              <div
                className="flex items-center gap-2 opacity-70 cursor-pointer"
                onClick={() => window.open("tel:+8801234567890")}
              >
                <Image src={telephone} alt="telephone" width={18} height={18} />
                01234567890
              </div>

              <div
                className="flex items-center gap-2 opacity-70 cursor-pointer"
                onClick={() => window.open("mailto:store@valuetainment.com")}
              >
                <Image src={mail} alt="mail" width={18} height={18} />
                store@valuetainment.com
              </div>

              <div className="flex items-center gap-3">
                <Image
                  className="cursor-pointer"
                  src={facebook}
                  alt="facebook"
                  width={18}
                  height={18}
                />
                <Image
                  className="cursor-pointer"
                  src={twitter}
                  alt="twitter"
                  width={18}
                  height={18}
                />
                <Image
                  className="cursor-pointer"
                  src={linkedin}
                  alt="linkedin"
                  width={18}
                  height={18}
                />
                <Image
                  className="cursor-pointer"
                  src={instagram}
                  alt="instagram"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-20">
          <div className="opacity-70">
            © {new Date().getFullYear()} Valuetainment Store. All rights
            reserved.
          </div>

          <div className="flex items-center gap-2">
            <Image src={visa} alt="logo" width={32} height={20} />
            <Image src={applepay} alt="logo" width={32} height={20} />
            <Image src={paypal} alt="logo" width={32} height={20} />
            <Image src={americanexpress} alt="logo" width={32} height={20} />
            <Image src={dinersclub} alt="logo" width={32} height={20} />
            <Image src={amex} alt="logo" width={32} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
