import { Button } from "@/components/ui/button";
import { PhoneCall, Zap, TrendingUp, Star } from "lucide-react";
import { CalendarModal } from "./CalendarModal";
import { useState } from "react";

export const HeroSection = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Automation</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Turn Missed Calls Into{" "}
              <span className="text-primary">Booked Jobs</span>
              <div className="text-2xl md:text-3xl font-normal mt-2 text-foreground/90">
                — Automatically
              </div>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl mb-2 text-foreground/80 font-medium">
              AI is changing the game
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg mb-8 text-foreground/70 max-w-2xl">
              AI automation + modern websites for contractors, roofers, HVAC, and more. 
              Get more leads, reviews, and sales — without lifting a finger.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                onClick={() => setIsCalendarOpen(true)}
              >
                🔥 Book a Free Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-semibold px-8 py-4 text-lg">
                🚀 Claim Your $100 Off Web Design
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-primary/30 rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-primary/40 rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-primary/50 rounded-full border-2 border-background"></div>
                </div>
                <span className="text-sm text-foreground/70">500+ contractors trust us</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-foreground/70">4.9/5 rating</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Demo interface */}
          <div className="hidden lg:block">
            <div className="bg-card rounded-2xl p-6 shadow-strong border">
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Missed Call Alert</h3>
                    <p className="text-sm text-foreground/60">AI responding in real-time</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-destructive">📞 Missed call detected</p>
                    <p className="text-xs text-foreground/60">from (555) 123-4567</p>
                  </div>
                  
                  <div className="bg-warning/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-warning">🤖 AI analyzing...</p>
                    <p className="text-xs text-foreground/60">Generating response</p>
                  </div>
                  
                  <div className="bg-success/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-success">✅ Auto-Response Sent</p>
                    <p className="text-xs text-foreground/60">3s</p>
                  </div>
                  
                  <div className="bg-primary/5 p-3 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground/80">
                      "Hi! Thanks for calling ABC Roofing. I'm currently with another customer but would love to help you. What type of roofing project are you considering?"
                    </p>
                  </div>
                  
                  <div className="bg-success/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-success">🎯 Mission Complete</p>
                    <p className="text-xs text-foreground/60">Missed call converted to lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats at bottom */}
        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">3s</div>
            <div className="text-sm text-foreground/60">Response Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-foreground/60">Availability</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">90%</div>
            <div className="text-sm text-foreground/60">Time Saved</div>
          </div>
        </div>
      </div>
      
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </section>
  );
};