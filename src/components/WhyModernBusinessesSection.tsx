import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, TrendingUp } from "lucide-react";
import { TextAnimate } from "./magicui/animate-text";
import AnimateBox from "./magicui/animate-box";
import { NumberTicker } from "./magicui/number-ticker";
import { ShineBorder } from "./magicui/shine-border";


export const WhyModernBusinessesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <AnimateBox duration={1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Modern Businesses Are Winning
            </h2>
            </AnimateBox>
            <TextAnimate duration={2} delay={1} by="character" as="p" className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customers prefer to hire companies that respond quickly, look modern, and stay ahead of the curve. 
              Here&apos;s why staying up-to-date helps you close more jobs and build trust.
            </TextAnimate>
          </div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Old Way */}
            <AnimateBox duration={1}> 
            <Card className="shadow-card relative">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <CardContent className="p-8">
                <AnimateBox delay={0.5} className="text-center mb-6">
                  <Badge variant="destructive" className="mb-4">Old Way</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Traditional Contractors</h3>
                </AnimateBox>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <TextAnimate duration={1} delay={0.5} by="character" as="h4" className="font-semibold">Slow Response Times</TextAnimate>
                      <TextAnimate duration={1} delay={0.5} by="character" as="p" className="text-sm text-muted-foreground">Miss calls, return them hours later, lose jobs to faster competitors</TextAnimate>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <TextAnimate duration={1} delay={0.5} by="character" as="h4" className="font-semibold">Manual Everything</TextAnimate>
                      <TextAnimate duration={1} delay={0.5} by="character" as="p" className="text-sm text-muted-foreground">Manually call back, manually schedule, manually follow up for reviews</TextAnimate>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <TextAnimate duration={1} delay={0.5} by="character" as="h4" className="font-semibold">Inconsistent Reviews</TextAnimate>
                      <TextAnimate duration={1} delay={0.5} by="character" as="p" className="text-sm text-muted-foreground">Forget to ask for reviews, get negative ones without responding</TextAnimate>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <TextAnimate duration={1} delay={0.5} by="character" as="h4" className="font-semibold">Outdated Image</TextAnimate>
                      <TextAnimate duration={1} delay={0.5} by="character" as="p" className="text-sm text-muted-foreground">Customers question if you&apos;re professional and up-to-date</TextAnimate>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </AnimateBox>
            {/* New Way */}
            <AnimateBox duration={1} delay={0.5}>
            <Card className="shadow-card border-success relative">
            <ShineBorder shineColor={["#FE8FB5","#A07CFE", "#FFBE7B"]} />
              <CardContent className="p-8">
                <AnimateBox delay={0.5} className="text-center mb-6">
                  <Badge variant="default" className="mb-4 bg-success text-success-foreground">AI-Powered</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Smart Contractors</h3>
                </AnimateBox>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <TextAnimate duration={1} delay={0.5} by="character" as="h4" className="font-semibold">Instant Response</TextAnimate>
                      <TextAnimate duration={1} delay={0.5} by="character" as="p" className="text-sm text-muted-foreground">AI responds within seconds, books jobs while competitors sleep</TextAnimate>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <TextAnimate duration={1} delay={0.5} by="character" as="h4" className="font-semibold">Full Automation</TextAnimate>
                      <TextAnimate duration={1} delay={0.5} by="character" as="p" className="text-sm text-muted-foreground">AI handles calls, texts, scheduling, and follow-ups automatically</TextAnimate>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <TextAnimate duration={1} delay={0.5} by="character" as="h4" className="font-semibold">5-Star Reviews</TextAnimate>
                      <TextAnimate duration={1} delay={0.5} by="character" as="p" className="text-sm text-muted-foreground">Automatic review requests and responses build perfect reputation</TextAnimate>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <TextAnimate duration={1} delay={0.5} by="character" as="h4" className="font-semibold">Modern Image</TextAnimate>
                      <TextAnimate duration={1} delay={0.5} by="character" as="p" className="text-sm text-muted-foreground">Customers see you as innovative, professional, and trustworthy</TextAnimate>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </AnimateBox>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-primary/30 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2"><NumberTicker value={15} className="text-inherit" /><span className="text-primary">sec</span></h3>
              <p className="text-sm text-muted-foreground">Average AI response time</p>
            </div>

            <div className="text-center bg-success/30 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2"><NumberTicker startValue={23} value={73} className="text-inherit" /><span className="text-success">%</span></h3>
              <p className="text-sm text-muted-foreground">More jobs booked with AI</p>
            </div>
            <div className="text-center bg-accent/30 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2"><NumberTicker value={4.9} decimalPlaces={1} className="text-inherit" /><span className="text-accent">★</span></h3>
              <p className="text-sm text-muted-foreground">Average review rating</p>
            </div>
            <div className="text-center bg-warning/30 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2"><NumberTicker value={280} startValue={180} className="text-inherit" /><span className="text-warning">%</span></h3>
              <p className="text-sm text-muted-foreground">ROI in first year</p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-hero text-white rounded-lg p-8">
            <TextAnimate duration={1} delay={0.5} by="character" as="h3" className="text-2xl font-bold mb-4">
              Stop handing your competitors your next job
            </TextAnimate>
            <TextAnimate duration={1} delay={0.5} by="character" as="p" className="text-white/90 mb-6">
              Every day you wait is another day your competitors are booking the jobs that should be yours.
            </TextAnimate>
          </div>
        </div>
      </div>
    </section>
  );
};