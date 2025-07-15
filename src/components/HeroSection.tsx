import { Button } from "@/components/ui/button";
import { PhoneCall, Zap, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">AI Revolution Is Here</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI Is Changing The Game
            <span className="block text-accent">And Smart Contractors</span>
            <span className="block">Are Already Cashing In</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            The businesses adopting AI today are winning more jobs, saving time, and earning more 
            while their competitors get left behind. <strong>Get ahead now or get left behind working more hours for less money.</strong>
          </p>
          
          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <PhoneCall className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Never Miss Another Call</h3>
              <p className="text-sm text-white/80">AI responds instantly to every missed call, booking jobs while you sleep</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Same-Day Setup</h3>
              <p className="text-sm text-white/80">Done-for-you system with plug-and-play automation. No tech skills needed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Job Booking</h3>
              <p className="text-sm text-white/80">AI works around the clock, qualifying leads and scheduling appointments</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-strong">
              Watch Live Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
              Calculate Your ROI
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="mt-12 flex flex-col items-center">
            <p className="text-white/70 mb-3">Trusted by contractors nationwide</p>
            <div className="flex items-center gap-6 text-white/50">
              <span className="text-sm">HVAC • Roofing • Plumbing • Concrete • Landscaping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};