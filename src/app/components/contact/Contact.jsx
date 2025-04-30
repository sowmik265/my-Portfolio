"use client";

import { useRef } from "react";
import CommonButton from "../common/CommonButton";
import { Player } from "@lottiefiles/react-lottie-player";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // EmailJS integration code here
    e.target.reset();
  };

  return (
    <section className="py-8 md:py-12" id="contact">
      {/* Title Animation */}
      <div className="flex justify-center mb-6 md:mb-8">
        <Player
          autoplay
          loop
          src="/contactTitle.json"
          className="w-[240px] md:w-[320px] lg:w-[400px] h-[90px] md:h-[120px] lg:h-[150px]"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Section: Animation + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left: Animation 3 */}
          <div className="flex justify-center items-center order-1 lg:order-none">
            <Player
              autoplay
              loop
              src="/contactAnimation3.json"
              className="w-full max-w-[360px] lg:max-w-[440px] h-[240px] lg:h-[340px]"
            />
          </div>

          {/* Right: Contact Form */}
          <div className="contact__content order-2">
            <div className="flex items-center justify-center gap-2 mb-4 md:mb-5">
              <Player
                autoplay
                loop
                src="/contactAnimation1.json"
                className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
              <h3 className="text-xl md:text-2xl font-medium text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Write me your project
              </h3>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full p-4 md:p-5 rounded-xl border-2 border-transparent bg-gradient-to-br from-white to-gray-50 shadow-lg relative
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400 before:to-blue-500 before:rounded-xl before:-z-10 before:blur-sm"
            >
              <div className="relative mb-6 md:mb-7">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-green-400 to-blue-500"></div>
                  <label className="text-sm font-medium text-gray-600 bg-white px-3">
                    Name
                  </label>
                  <div className="flex-1 h-px bg-gradient-to-l from-green-400 to-blue-500"></div>
                </div>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border-2 border-green-400 rounded-lg focus:border-blue-500 
                            focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400 text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div className="relative mb-6 md:mb-7">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-green-400 to-blue-500"></div>
                  <label className="text-sm font-medium text-gray-600 bg-white px-3">
                    Email
                  </label>
                  <div className="flex-1 h-px bg-gradient-to-l from-green-400 to-blue-500"></div>
                </div>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border-2 border-green-400 rounded-lg focus:border-blue-500 
                            focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400 text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div className="relative mb-6 md:mb-7">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-green-400 to-blue-500"></div>
                  <label className="text-sm font-medium text-gray-600 bg-white px-3">
                    Project
                  </label>
                  <div className="flex-1 h-px bg-gradient-to-l from-green-400 to-blue-500"></div>
                </div>
                <textarea
                  name="project"
                  className="w-full px-4 py-2 border-2 border-green-400 rounded-lg focus:border-blue-500 
                            focus:ring-2 focus:ring-blue-200 transition-all h-32 resize-none placeholder-gray-400 text-sm"
                  placeholder="Describe your project details..."
                ></textarea>
              </div>

              <CommonButton
                className="w-full py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 
                          hover:to-blue-600 text-white font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Send Message
              </CommonButton>
            </form>
          </div>
        </div>

        {/* Bottom Section: Animation2 + Contact Cards */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex justify-center mb-2 md:mb-3">
            <Player
              autoplay
              loop
              src="/contactAnimation2.json"
              className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-white border-2 border-green-100 rounded-lg p-3 md:p-4 text-center hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex-1 h-px bg-gradient-to-r from-green-400 to-blue-500"></div>
                <i className="bx bx-mail-send text-xl md:text-2xl text-blue-600"></i>
                <div className="flex-1 h-px bg-gradient-to-l from-green-400 to-blue-500"></div>
              </div>
              <h3 className="text-sm md:text-base font-medium mb-1">Email</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-2">
                sowmik265@gmail.com
              </p>
              <a
                href="mailto:sowmik265@gmail.com"
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 text-xs md:text-sm"
              >
                Write me
                <i className="bx bx-right-arrow-alt text-base animate-pulse"></i>
              </a>
            </div>

            <div className="bg-white border-2 border-green-100 rounded-lg p-3 md:p-4 text-center hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex-1 h-px bg-gradient-to-r from-green-400 to-blue-500"></div>
                <i className="bx bxl-whatsapp text-xl md:text-2xl text-green-600"></i>
                <div className="flex-1 h-px bg-gradient-to-l from-green-400 to-blue-500"></div>
              </div>
              <h3 className="text-sm md:text-base font-medium mb-1">
                WhatsApp
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-2">
                +8801745553338
              </p>
              <a
                href="https://wa.me/+8801520100654"
                className="text-green-600 hover:text-green-800 transition-colors inline-flex items-center gap-1 text-xs md:text-sm"
              >
                Message me
                <i className="bx bx-right-arrow-alt text-base animate-pulse"></i>
              </a>
            </div>

            <div className="bg-white border-2 border-green-100 rounded-lg p-3 md:p-4 text-center hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex-1 h-px bg-gradient-to-r from-green-400 to-blue-500"></div>
                <i className="bx bxl-messenger text-xl md:text-2xl text-blue-500"></i>
                <div className="flex-1 h-px bg-gradient-to-l from-green-400 to-blue-500"></div>
              </div>
              <h3 className="text-sm md:text-base font-medium mb-1">
                Messenger
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-2">
                m.me/sowmik.ahamed
              </p>
              <a
                href="https://m.me/sowmik.ahamed"
                className="text-blue-500 hover:text-blue-700 transition-colors inline-flex items-center gap-1 text-xs md:text-sm"
              >
                Chat now
                <i className="bx bx-right-arrow-alt text-base animate-pulse"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
