import { HeroSection } from "@/components/HeroSection";
import { CriticalIssuesSection } from "@/components/CriticalIssuesSection";
import { AIGameChangerSection } from "@/components/AIGameChangerSection";
import { ROICalculator } from "@/components/ROICalculator";
import { LiveDemoSection } from "@/components/LiveDemoSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyModernBusinessesSection } from "@/components/WhyModernBusinessesSection";
import { PricingSection } from "@/components/PricingSection";

const Index = () => {
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
