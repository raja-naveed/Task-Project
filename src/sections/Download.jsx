import React from "react";
import { motion } from "framer-motion";

const Download = () => {

  return (
    <div className="section" id="section10">
      <div className="container mx-auto flex flex-col justify-between items-center min-h-screen gap-8">
        <div>&nbsp;</div>
        <div className="flex justify-between gap-8 lg:gap-0 flex-col lg:flex-row lg:items-center">
          <div className="w-[250px] 2xl:w-[400px] 3xl:w-[549px] flex justify-between mx-auto gap-x-16">
            <img
              className="w-[120px] 2xl:w-[192px] 3xl:w-[246px]"
              src="/images/react.svg"
              alt=""
            />
            <div className="flex flex-col justify-between items-center text-center gap-x-16 2xl:h-[600px] 3xl:h-[800px] 3xl:pt-[50px]">
              <img src="/images/zimo-download.png" alt="" />
              <div className="tracking-widest">
                <h2 className="text-[25px] lg:text-[30px] 2xl:text-[40px] uppercase">
                  DOWNLOAD
                </h2>
                <p className="uppercase text-[16px] md:text-[20px] mt-3">
                  our app
                </p>
              </div>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.whatsapp&amp;hl=en&amp;gl=US"
                  target="_blank"
                  className="block w-[135px] mx-auto"
                >
                  <img
                    src="/images/android.png"
                    className="h-[45px] w-[135px]"
                    alt=""
                  />
                </a>

                <a
                  href="https://apps.apple.com/us/app/whatsapp-messenger/id310633997"
                  target="_blank"
                  className="block w-[135px] mx-auto"
                >
                  <img
                    src="/images/ios.png"
                    className="h-[45px] w-[135px] mt-4 mb-5"
                    alt=""
                  />
                </a>
                <p className="lg:text-[12px] text-[9px] lg:tracking-[2px] text-[#BE9F56] my-4 uppercase">
                  Get the ZIMO app on a phone or tablet
                </p>
                <p className="lg:text-[12px] text-[9px] lg:tracking-[2px] opacity-50 uppercase">
                  To install ZIMO, follow the link for your device from your
                  smartphone or tablet.
                </p>
              </div>
            </div>
            <img
              className="w-[120px] 2xl:w-[192px] 3xl:w-[246px]"
              src="/images/react.svg"
              alt=""
            />
          </div>

          <div className="w-[250px] 2xl:w-[400px] 3xl:w-[549px] relative flex mx-auto ">
            <img
              className="w-[107px] 2xl:w-[172px] 3xl:w-[236px] relative z-10"
              src="/images/android-1.svg"
              alt=""
            />
            <img
              className="w-[204px] 2xl:w-[327px] 3xl:w-[449px] relative -left-12 lg:absolute top-0 lg:left-12 2xl:left-24"
              src="/images/android-2.svg"
              alt=""
            />
          </div>
        </div>
        <p className="pb-12 lg:text-[12px] text-[9px] text-center lg:tracking-[2px] opacity-50 uppercase">
          ZIMO is available on many devices. The ZIMO app may come pre-installed
          or you may need to download and install it.
        </p>
        <a className="navigate">
          <img
            src="/images/down-arrow.png"
            alt="arrow-dark"
            height={80}
            width={40}
            className="cursor-pointer z-10 hover:scale-150 hover:brightness-100 animate-bounce hover:animate-ping"
          />
        </a>
      </div>
    </div>
  );
};

export default Download;
