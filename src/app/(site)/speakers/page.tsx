import Testimonials from "@/components/Home/Testimonials";
import TicketSection from "@/components/Home/TicketSection";
import WorkSpeakers from "@/components/Home/WorkSpeakers";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Speakers | BuildZone IT",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Our Services"
        description="Elevate your digital presence with tailored websites, mobile apps, and secure hosting.
Our expertise extends to HR solutions, robust security, and personalized support for unparalleled online excellence."
        breadcrumbLinks={breadcrumbLinks}
      />
      <WorkSpeakers showTitle={false} />
     
      <TicketSection />
    </>
  );
};

export default page;
