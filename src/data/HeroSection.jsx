import React from "react";
import Hero from "../Components/Hero/Hero";

function HeroSection({ pageType }) {
  const heroDatas = {
    home: {
      title:
        "Empowering <br/> Citizens with Access <br /> to Essential Services",
      tag: "h1",
      description:
        "Access e-government services, learn new skills, informed, and more—all in one place.",
      heroBtn: ["Get Started", "Log In"],
      image: "/assets/hero1.png",
      bgImage: null,
      hasForm: false,
    },
    jobs: {
      title: "Find Your Next Job With Ease",
      tag: "h4",
      description:
        "Explore government and private sector opportunities, apply directly, and take the next step in your career—-all from one platform.",
      image: null,
      bgImage: "/assets/hero8.png",
      heroBtn: null,
      hasForm: false,
    },
    news: {
      title: "Imo State Ushers in a New Era of Growth and Prosperity",
      description:
        "Governor’s Visionary Policies Promise Transformative Progress in Education, Infrastructure, and Healthcare",
      image: null,
      bgImage: "/assets/hero7.png",
      heroBtn: ["Read"],
      hasForm: false,
    },
    digital_literacy: {
      title: "E-Government Services",
      description:
        "Simplify your interactions with government services. Pay taxes, apply for IDs, and access essential services online",
      image: null,
      heroBtn: ["Get Started"],
      bgImage: "/assets/hero3.png",
      hasForm: false,
    },
    e_goverment: {
      title: "E-Government Services",
      description:
        "Simplify your interactions with government services. Pay taxes, apply for IDs, and access essential services online",
      image: "/assets/hero2.png",
      hero_image_alt: "hero image",
      heroBtn: null,
      bgImage: null,
      hasForm: false,
    },
    resources: {
      title:
        "Imo State Government Research Hub: Pioneering Innovation and Development",
      description:
        "Access Cutting-Edge Research, Data Insights, and Solutions Driving Growth in Key Sectors Across the State",
      image: null,
      heroBtn: null,
      bgImage: "/assets/hero5.png",
      hasForm: false,
    },
    emergency: {
      title: "Stay Safe with Quick Access to Essential Emergency Contacts",
      description:
        "Find critical contacts for emergency services across Imo State at your fingertips.",
      image: null,
      heroBtn: null,
      bgImage: "/assets/hero4.png",
      hasForm: false,
    },
    ministries: {
      title: "Your Complete Directory of Imo State Ministries and Parastatals",
      description:
        "Find the information you need to connect with government ministries and departments.",
      heroBtn: null,
      image: null,
      bgImage: "/assets/hero6.png",
      hasForm: true,
    },
  };

  const selectedHero = heroDatas[pageType];

  return <Hero {...selectedHero} />;
}

export default HeroSection;
