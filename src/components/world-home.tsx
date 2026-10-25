"use client";

import { useEffect, useState } from "react";
import type { CaseStudy } from "@/data/site-config";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { SebgHero } from "@/components/sebg/sebg-hero";
import { SebgAbout } from "@/components/sebg/sebg-about";
import { Tour3DStage } from "@/components/sebg/tour-3d-stage";
import { SebgWorkGrid } from "@/components/sebg/sebg-work-grid";
import { SebgContact } from "@/components/sebg/sebg-contact";
import { EngineerMascot } from "@/components/sebg/engineer-mascot";
import { SoundToggle } from "@/components/sebg/sound-toggle";

export function WorldHome({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sectionIds = ["hero-section", "about", "tour", "work", "contact"];
    const sectionMap: Record<string, string> = {
      "hero-section": "hero",
      about: "about",
      tour: "tour",
      work: "work",
      contact: "contact",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const mapped = sectionMap[entry.target.id];
            if (mapped) {
              setActiveSection(mapped);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LenisProvider>
      <div className="relative bg-[#fbfbf8] text-[#0b0b0c] selection:bg-[#2261e9] selection:text-white">
        {/* Hero Section (Swiss Blue) */}
        <SebgHero />

        {/* About & Philosophy Section (Paper) */}
        <SebgAbout />

        {/* 3D Perspective Device Tour (Deep Navy) */}
        <Tour3DStage />

        {/* All Work Archive Grid (Stone/Paper) */}
        <SebgWorkGrid />

        {/* Contact & Outro (Ink Black) */}
        <SebgContact />
      </div>
    </LenisProvider>
  );
}
