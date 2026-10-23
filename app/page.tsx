import { DarkBreak } from "@/components/sections/DarkBreak";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LeadForm } from "@/components/sections/LeadForm";
import { MeetDan } from "@/components/sections/MeetDan";
import { RecentJobs } from "@/components/sections/RecentJobs";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { anchors } from "@/lib/nav";
import { buildJsonLd, serializeJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <main id={anchors.main} tabIndex={-1} className="focus:outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildJsonLd()) }}
      />
      <Hero />
      <LeadForm />
      <Services />
      <DarkBreak />
      <WhyUs />
      <RecentJobs />
      <Reviews />
      <HowItWorks />
      <MeetDan />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
      {/* Last, so its effect runs only after the sections above have hydrated. */}
      <ScrollReveal />
    </main>
  );
}
