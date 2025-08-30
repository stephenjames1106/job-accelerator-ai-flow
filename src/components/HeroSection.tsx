"use client";
import { Button } from "@/components/ui/button";
import { PhoneCall, Zap, Star } from "lucide-react";
import { CalendarModal } from "./CalendarModal";
import { useState } from "react";
import { AvatarCircles } from "./magicui/avatar-circles";
import { TextAnimate } from "./magicui/animate-text";
import AnimateBox from "./magicui/animate-box";
import { NumberTicker } from "./magicui/number-ticker";

export const HeroSection = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <section className="container mx-auto xl:px-16 relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Automation
              </span>
            </div>

            {/* Main headline */}
            <AnimateBox duration={1}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
                Turn Missed Calls Into{" "}
                <span className="text-primary">Booked Jobs</span>
                <div className="text-2xl md:text-3xl font-normal mt-2 text-foreground/90">
                  — Automatically
                </div>
              </h1>
            </AnimateBox>

            {/* Subheading */}
            <TextAnimate duration={1} delay={1} by="character" className="text-lg md:text-xl mb-2 text-foreground/80 font-medium">
              AI is changing the game
            </TextAnimate>

            {/* Description */}
            <TextAnimate duration={1} delay={2} by="character" className="text-base md:text-lg mb-8 text-foreground/70 max-w-2xl">
              AI automation + modern websites for contractors, roofers, HVAC,
              and more. Get more leads, reviews, and sales without lifting a
              finger.
            </TextAnimate>

            {/* CTA buttons */}
            <AnimateBox duration={1} delay={2.5} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-primary hover:shadow-glow hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                onClick={() => setIsCalendarOpen(true)}
              >
                Book a Free Demo
              </Button>
              <Button
                size="lg"
                onClick={() => setIsCalendarOpen(true)}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                variant={isHover ? "default" : "outline"}
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg"
              >
                Claim Your $100 Off Web Design
              </Button>
            </AnimateBox>

            {/* Social proof */}
            <AnimateBox duration={1} delay={3} className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <AvatarCircles
                  avatarUrls={[
                    {
                      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
                    },
                    {
                      imageUrl:
                        "https://randomuser.me/api/portraits/women/1.jpg",
                    },
                    {
                      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
                    },
                    {
                      imageUrl:
                        "https://randomuser.me/api/portraits/women/2.jpg",
                    },
                    {
                      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
                    },
                  ]}
                />
                <span className="text-sm text-foreground/70">
                  500+ contractors trust us
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-foreground/70">4.9/5 rating</span>
              </div>
            </AnimateBox>
          </div>

          {/* Right side - Demo interface */}
          <AnimateBox duration={1} className="hidden lg:block">
            <div className="bg-card rounded-2xl p-6 shadow-strong border">
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <AnimateBox duration={1} delay={0.5} className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Missed Call Alert
                    </h3>
                    <p className="text-sm text-foreground/60">
                      AI responding in real-time
                    </p>
                  </div>
                </AnimateBox>

                <div className="space-y-3">
                  <AnimateBox duration={1} delay={1} className="bg-destructive/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-destructive">
                      📞 Missed call detected
                    </p>
                    <p className="text-xs text-foreground/60">
                      from (555) 123-4567
                    </p>
                  </AnimateBox>

                  <AnimateBox duration={1} delay={1.5} className="bg-warning/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-warning">
                      🤖 AI analyzing...
                    </p>
                    <p className="text-xs text-foreground/60">
                      Generating response
                    </p>
                  </AnimateBox>

                  <AnimateBox duration={1} delay={2} className="bg-success/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-success">
                      ✅ Auto-Response Sent
                    </p>
                    <p className="text-xs text-foreground/60">3s</p>
                  </AnimateBox>

                  <AnimateBox duration={1} delay={2.5} className="bg-primary/5 p-3 rounded-lg border border-primary/20">
                    <TextAnimate duration={1} delay={3} by="character" className="text-sm text-foreground/80">
                      &quot;Hi! Thanks for calling ABC Roofing. I&apos;m
                      currently with another customer but would love to help
                      you. What type of roofing project are you
                      considering?&quot;
                    </TextAnimate>
                  </AnimateBox>

                  <AnimateBox duration={1} delay={3} className="bg-success/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-success">
                      🎯 Mission Complete
                    </p>
                    <p className="text-xs text-foreground/60">
                      Missed call converted to lead
                    </p>
                  </AnimateBox>
                </div>
              </div>
            </div>
          </AnimateBox>
        </div>

        {/* Stats at bottom */}
        <div className="container flex gap-8 mt-16 flex-wrap items-center justify-around text-center">
          <div className="flex flex-col p-6 items-center justify-center bg-primary/30 aspect-square rounded-lg  w-36">
            <div className="text-3xl font-bold text-primary mb-2">
              <NumberTicker
                value={3}
                direction="up"
                className="text-primary inline"
              />s
            </div>
            <p className="text-sm text-foreground/60">Response Time</p>
          </div>
          <div className="flex flex-col p-6 items-center justify-center bg-primary/30 aspect-square rounded-lg w-36">
            <div className="text-3xl font-bold text-primary mb-2">
              <NumberTicker
                value={24}
                direction="up"
                className="text-primary inline"
              />
              /
              <NumberTicker
                value={7}
                direction="up"
                className="text-primary inline"
              />
            </div>
            <div className="text-sm text-foreground/60">Availability</div>
          </div>
          <div className="flex flex-col p-6 items-center justify-center bg-primary/30 aspect-square rounded-lg w-36">
            <div className="text-3xl font-bold text-primary mb-2">
              <NumberTicker
                value={90}
                startValue={68}
                direction="up"
                className="text-primary inline"
              />
              %
            </div>
            <div className="text-sm text-foreground/60">Time Saved</div>
          </div>
        </div>
      </div>

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </section>
  );
};
