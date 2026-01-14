import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import Image from "next/image";
import '@/Style/style.css'
import Testimonials from "@/components/Home/Testimonials";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | BuildZone IT",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
  ];
  return (
    <>
      <HeroSub
        title="About Us"
        description="Empower your online presence with our expert web development team—where innovation meets excellence for digital success."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode py-16">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <h2 className="text-secondary dark:text-white text-3xl md:text-4xl font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed mb-4">
            At BuildZone IT, we stand as a prominent web development company driven by an adept and passionate team. Armed with extensive knowledge, we specialize in translating your vision into robust, visually appealing websites. Our commitment to excellence and innovation ensures tailored solutions that elevate your online presence.
          </p>
          <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed">
            With expertise in diverse technologies, we navigate the digital landscape, providing you with a competitive edge. Trust us to turn your concepts into impactful, user-centric web experiences.
          </p>
        </div>
      </section>

      <section className="dark:bg-darklight py-16">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <h2 className="text-secondary dark:text-white text-3xl md:text-4xl font-bold mb-6">
            Our Team
          </h2>
          <p className="text-SlateBlueText dark:text-darktext text-lg leading-relaxed max-w-3xl mb-10">
            Our team is a collective of experienced developers, designers, and strategists who share a passion for crafting high-performing digital products. We collaborate closely with you from idea to launch, ensuring every project reflects your brand, engages your audience, and achieves measurable results.
          </p>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="w-28 h-28 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/world-class-speakers/speakers_1.png"
                  alt="Team member - Lead Developer"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary dark:text-white">Tharaka</h3>
              <p className="text-primary text-sm font-medium mb-2">Lead Full-Stack Developer</p>
              <p className="text-SlateBlueText dark:text-darktext text-sm leading-relaxed">
                Architects scalable web solutions and leads our engineering practices to ensure robust, future-ready platforms.
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="w-28 h-28 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/world-class-speakers/speakers_2.png"
                  alt="Team member - UI/UX Designer"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary dark:text-white">Nishadi</h3>
              <p className="text-primary text-sm font-medium mb-2">Senior UI/UX Designer</p>
              <p className="text-SlateBlueText dark:text-darktext text-sm leading-relaxed">
                Crafts intuitive, visually engaging interfaces that align your brand identity with user expectations.
              </p>
            </div>

            <div className="bg-white dark:bg-darkmode rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="w-28 h-28 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/world-class-speakers/speakers_3.png"
                  alt="Team member - Project Manager"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary dark:text-white">Chamika</h3>
              <p className="text-primary text-sm font-medium mb-2">Project Manager</p>
              <p className="text-SlateBlueText dark:text-darktext text-sm leading-relaxed">
                Oversees delivery, communication, and timelines to keep every project on track and aligned to your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-darkmode py-16">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default page;
