import HeroSub from "@/components/SharedComponent/HeroSub";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients | BuildZone IT",
};

const globalClients = [
  { name: "Global Client 1", logo: "/images/ThumbnailSlider/Slider_1.png" },
  { name: "Global Client 2", logo: "/images/ThumbnailSlider/Slider_2.jpg" },
  { name: "Global Client 3", logo: "/images/ThumbnailSlider/Slider_3.png" },
];

const localClients = [
  { name: "Local Client 1", logo: "/images/world-class-speakers/speakers_1.png" },
  { name: "Local Client 2", logo: "/images/world-class-speakers/speakers_2.png" },
  { name: "Local Client 3", logo: "/images/world-class-speakers/speakers_3.png" },
];

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/clients", text: "Clients" },
  ];

  return (
    <>
      <HeroSub
        title="Our Clients"
        description="Our clients span across local and global markets, partnering with us to build reliable, high-performing digital solutions that support their growth."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode py-16">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <h2 className="text-secondary dark:text-white text-3xl md:text-4xl font-bold mb-6">
            Trusted By Businesses Worldwide
          </h2>
          <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed mb-4 max-w-3xl">
            We partner with clients across the globe and within our local community, delivering reliable, secure and high-performing digital solutions tailored to their goals.
          </p>
          <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed max-w-3xl">
            From startups to established enterprises, our client relationships are built on transparency, technical excellence and long-term collaboration.
          </p>
        </div>
      </section>

      <section className="dark:bg-darklight py-16">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <h2 className="text-secondary dark:text-white text-3xl md:text-4xl font-bold mb-6">
            Global Clients
          </h2>
          <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed mb-10 max-w-3xl">
            We collaborate with organizations around the world, delivering scalable and secure digital products that help them compete on a global stage.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 items-center">
            {globalClients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center rounded-2xl bg-white dark:bg-darkmode px-6 py-6 shadow-sm"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain w-auto h-12 md:h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark:bg-darkmode py-16">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <h2 className="text-secondary dark:text-white text-3xl md:text-4xl font-bold mb-6">
            Local Clients
          </h2>
          <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed mb-10 max-w-3xl">
            We are proud to support businesses in our local community, building long-term partnerships and solutions tailored to their unique needs.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 items-center">
            {localClients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center rounded-2xl bg-white dark:bg-darklight px-6 py-6 shadow-sm"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain w-auto h-12 md:h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;