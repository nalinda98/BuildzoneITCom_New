"use client";
import React from "react";
import { usePathname } from "next/navigation";

const WorkSpeakers = ({ showTitle = true }) => {
  const pathname = usePathname();
  const services = [
    {
      id: 1,
      title: "Website Design and Development",
      description:
        "Crafting bespoke websites with responsive design, intuitive user interfaces, and seamless user experiences to meet diverse client needs and ensure optimal performance across devices.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-14 h-14 text-secondary"
          fill="currentColor"
        >
          <rect x="6" y="10" width="36" height="22" rx="2" ry="2" />
          <rect x="14" y="36" width="20" height="3" rx="1.5" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Designing and developing cross-platform mobile applications for iOS and Android, ensuring a seamless user experience and leveraging frameworks like React Native and Flutter for efficient development.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-14 h-14 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <rect x="14" y="6" width="20" height="36" rx="3" />
          <polyline points="24 18 24 26 28 22" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Web Hosting and Maintenance",
      description:
        "Providing reliable web hosting services and ongoing maintenance support to ensure optimal website performance, accessibility, and security, offering peace of mind for clients and their users.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-14 h-14 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <rect x="8" y="14" width="32" height="14" rx="3" />
          <circle cx="17" cy="21" r="1.5" fill="currentColor" />
          <circle cx="23" cy="21" r="1.5" fill="currentColor" />
          <circle cx="29" cy="21" r="1.5" fill="currentColor" />
          <path d="M16 32h16" />
          <path d="M12 36h24" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Security Services",
      description:
        "Implementing robust security measures and conducting audits to safeguard websites and applications, ensuring protection against potential threats and vulnerabilities for a secure online environment.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-14 h-14 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <rect x="14" y="18" width="20" height="16" rx="2" />
          <path d="M18 18v-3a6 6 0 0 1 12 0v3" />
          <circle cx="24" cy="26" r="2" />
          <path d="M24 28v3" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "UI/UX Design",
      description:
        "Creating visually appealing interfaces with user-centric design, conducting usability testing, and refining designs based on feedback to ensure optimal user experiences and aesthetic appeal for websites and applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-14 h-14 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M10 34l8.5-17.5 6 6L16 38z" />
          <path d="M26 10l4 4" />
          <path d="M30 6l4 4" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "HR Management System",
      description:
        "Revolutionize HR processes with our comprehensive HR Management System. From payroll and attendance tracking to recruitment and performance evaluations, our centralized platform enhances efficiency, compliance, and data-driven decision-making.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-14 h-14 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="18" cy="18" r="4" />
          <path d="M10 30c1.5-3 4-5 8-5s6.5 2 8 5" />
          <circle cx="31" cy="22" r="3" />
          <path d="M30 30h4l3 4" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "E-commerce Development",
      description:
        "Building secure, feature-rich online stores, implementing user-friendly product catalogs, shopping carts, and reliable payment gateways for a seamless and secure shopping experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-14 h-14 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M10 14h4l4 18h16" />
          <circle cx="22" cy="36" r="2.5" />
          <circle cx="32" cy="36" r="2.5" />
          <path d="M18 18h20l-2 10H20" />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Custom Software Development",
      description:
        "Tailoring software solutions to meet unique business requirements, offering bespoke development and consulting services to optimize processes and address specific challenges faced by clients.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-14 h-14 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <rect x="8" y="10" width="32" height="24" rx="3" />
          <path d="M14 20l4 4-4 4" />
          <path d="M34 20l-4 4 4 4" />
          <path d="M24 19v10" />
        </svg>
      ),
    },
    {
      id: 9,
      title: "Training and Support",
      description:
        "Offering comprehensive training sessions for clients to manage their websites and applications, coupled with ongoing support and troubleshooting services to ensure a smooth and hassle-free online presence.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-14 h-14 text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="18" cy="16" r="4" />
          <path d="M10 30c1.5-3 4-5 8-5" />
          <path d="M26 22h8" />
          <path d="M26 28h6" />
          <path d="M26 34h4" />
        </svg>
      ),
    },
  ];
  return (
    <>
      <section className={` dark:bg-darkmode ${pathname === "/" ? "" : ""}`}>
        {showTitle && (
          <h2 className="text-center pb-12">Our Services</h2>
        )}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              data-aos-duration="1000"
              className="col-span-1 bg-white dark:bg-darklight rounded-xl p-8 flex flex-col gap-4 shadow-sm text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-20 h-20 flex items-center justify-center rounded-md bg-[#f5f7fb] dark:bg-darkmode">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm md:text-base font-normal text-SlateBlueText dark:text-darktext leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorkSpeakers;
