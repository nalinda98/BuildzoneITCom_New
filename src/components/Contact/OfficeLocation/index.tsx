import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="md:py-24 py-10 dark:bg-darkmode">
        <div className="container">
          <div className="">
            <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 xl:gap-30 gap-0 border-b border-solid border-white border-opacity-50 pb-11 dark:border-dark_border">
              <div className="col-span-3">
                <h2 className="text-secondary dark:text-white max-w-219 sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-[2.25rem] font-bold">
                  BuildZone IT Solution (Head Office)
                </h2>
              </div>
              <div className="col-span-3">
                <p className="sm:text-2xl text-xl text-secondary dark:text-darktext font-normal max-w-266 leading-10">
                  "BuildZone IT Solution", 1st Floor, No 38/28, Nelson Lane,
                  Colombo 03, Sri Lanka.
                </p>
              </div>
              <div className="col-span-3">
                <Link
                  href="mailto:hello@buildzoneit.com"
                  className="sm:text-2xl text-xl text-secondary dark:text-SereneSky font-medium underline hover:dark:text-white hover:text-RegalBlue"
                >
                  hello@buildzoneit.com
                </Link>
                <Link
                  href="tel:+94762225001"
                  className="sm:text-2xl text-xl text-secondary dark:text-primary flex items-center gap-2 hover:text-opacity-100 w-fit hover:dark:text-white"
                >
                  <span className="text-primary">Call</span>+94 76 222 5001
                </Link>
              </div>
            </div>
            <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 gap-30 pt-12">
              <div className="col-span-3">
                <h2 className="text-secondary dark:text-white max-w-219 sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-[2.25rem] font-bold">
                  BuildZone IT Solutions (Branch Office)
                </h2>
              </div>
              <div className="col-span-3">
                <p className="sm:text-2xl text-xl text-secondary dark:text-darktext font-normal max-w-266 leading-10">
                  BuildZone IT Solutions, 203/7, Kumaragama, Balangoda.
                </p>
              </div>
              <div className="col-span-3"></div>
            </div>
            <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 gap-30 pt-12">
              <div className="col-span-3">
                <h2 className="text-secondary dark:text-white max-w-219 sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-[2.25rem] font-bold">
                  Contact Via
                </h2>
              </div>
              <div className="col-span-3">
                <p className="sm:text-2xl text-xl text-secondary dark:text-darktext font-normal max-w-266 leading-10">
                  Connect with us via WhatsApp, web or social channels for any
                  inquiries or collaborations.
                </p>
              </div>
              <div className="col-span-3">
                <Link
                  href="https://wa.me/94762225001"
                  className="sm:text-2xl text-xl text-secondary dark:text-SereneSky font-medium underline hover:dark:text-white hover:text-RegalBlue"
                  target="_blank"
                >
                  WhatsApp: (+94) 76 222 5001
                </Link>
                <Link
                  href="https://www.buildzoneit.com"
                  className="sm:text-2xl text-xl text-secondary dark:text-primary flex items-center gap-2 w-fit hover:dark:text-white"
                  target="_blank"
                >
                  Website: buildzoneit.com
                </Link>
                <Link
                  href="https://facebook.com/0BuildZoneIT"
                  className="sm:text-2xl text-xl text-secondary dark:text-primary flex items-center gap-2 w-fit hover:dark:text-white"
                  target="_blank"
                >
                  Facebook: BuildZone IT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
