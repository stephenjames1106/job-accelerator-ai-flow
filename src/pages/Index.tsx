import { HeroSection } from "@/components/HeroSection";
import { CriticalIssuesSection } from "@/components/CriticalIssuesSection";
import { AIGameChangerSection } from "@/components/AIGameChangerSection";
import { ROICalculator } from "@/components/ROICalculator";
import { LiveDemoSection } from "@/components/LiveDemoSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyModernBusinessesSection } from "@/components/WhyModernBusinessesSection";
import { PricingSection } from "@/components/PricingSection";
import SalesPresentation from "@/components/SalesPresentation";

const Index = () => {
  // Show presentation if URL has ?presentation=true
  const urlParams = new URLSearchParams(window.location.search);
  const showPresentation = urlParams.get('presentation') === 'true';

  if (showPresentation) {
    return <SalesPresentation />;
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <CriticalIssuesSection />
      <AIGameChangerSection />
      <ROICalculator />
      <LiveDemoSection />
      <HowItWorksSection />
      <WhyModernBusinessesSection />
      <PricingSection />
    </div>
  );
};

export default Index;
