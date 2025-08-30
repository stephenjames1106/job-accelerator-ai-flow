"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap } from "lucide-react";
import { CalendarModal } from "./CalendarModal";
import { useState } from "react";
import { ShineBorder } from "./magicui/shine-border";
import AnimateBox from "./magicui/animate-box";
import { TextAnimate } from "./magicui/animate-text";
import { MagicCard } from "./magicui/magic-card";
import Link from "next/link";
import Image from "next/image";
import imgLoader from "@/lib/imgLoader";

export const PricingSection = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimateBox duration={1} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Done-For-You AI Systems
              <span className="text-primary block">
                Built For Busy Contractors
              </span>
            </h2>
            <TextAnimate
              duration={1}
              delay={1}
              by="character"
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              No setup fees. No learning curve. No tech headaches. Just results
              that pay for themselves from day one.
            </TextAnimate>
          </AnimateBox>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 my-16">
            {/* Starter */}
            <AnimateBox duration={1} className="shadow-card rounded-lg py-4">
              <MagicCard className="bg-card py-4">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <p className="text-muted-foreground">
                  Perfect for growing contractors
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    Custom Pricing
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on your call volume
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">AI missed call text-back</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">24/7 lead qualification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">Calendar integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">Basic review automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">Same-day setup</span>
                  </div>
                </div>
                <Button onClick={() => setIsCalendarOpen(true)} className="w-full bg-primary hover:bg-primary-dark">
                  Get Custom Quote
                </Button>
              </CardContent>

              </MagicCard>
            </AnimateBox>

            {/* Pro - Most Popular */}
            <AnimateBox
              duration={1}
              delay={0.5}
              className="shadow-card relative rounded-lg py-4"
            >
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <p className="text-muted-foreground">
                  For established contractors
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    Custom Pricing
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Includes everything in Starter
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">AI voice agent for calls</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">Website chatbot integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">Advanced review generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">Multi-channel follow-up</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">ROI tracking dashboard</span>
                  </div>
                </div>
                <Button onClick={() => setIsCalendarOpen(true)} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Custom Quote
                </Button>
              </CardContent>
            </AnimateBox>

            {/* Full Automation */}
            <AnimateBox duration={1} delay={1} className="shadow-card rounded-lg py-4">
            <MagicCard className="bg-card py-4">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <CardTitle className="text-2xl">Full Automation</CardTitle>
                <p className="text-muted-foreground">
                  Complete done-for-you system
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    Custom Pricing
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Includes Pro + website
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">High-conversion website</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">
                      Google Business optimization
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">Review raffle system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">White-glove setup</span>
                  </div>
                </div>
                <Button onClick={() => setIsCalendarOpen(true)} className="w-full bg-success hover:bg-success/90 text-success-foreground">
                  Get Custom Quote
                </Button>
              </CardContent>
            </MagicCard>
            </AnimateBox>
          </div>

          {/* Guarantee */}
          <div className="bg-gradient-success text-white rounded-lg p-8 text-center mb-12">
            <TextAnimate
              duration={1}
              delay={1}
              by="character"
              as="h3"
              className="text-2xl font-bold mb-4"
            >
              30-Day Performance Guarantee
            </TextAnimate>
            <TextAnimate
              duration={1}
              delay={1}
              by="character"
              as="p"
              className="text-white/90 mb-6"
            >
              If you don&apos;t get at least 3 additional booked calls or
              multiple 5-star reviews in the first 30 days, we&apos;ll refund
              you completely.
            </TextAnimate>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Risk-free trial</span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <TextAnimate
              duration={1}
              delay={1}
              by="character"
              as="h3"
              className="text-2xl font-bold mb-4"
            >
              Ready to stop losing jobs to faster competitors?
            </TextAnimate>
            <TextAnimate
              duration={1}
              delay={1}
              by="character"
              as="p"
              className="text-muted-foreground mb-6"
            >
              Book a strategy call to see which system is right for your
              business.
            </TextAnimate>
            <AnimateBox duration={1} delay={1}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark"
                onClick={() => setIsCalendarOpen(true)}
              >
                Book Strategy Call
              </Button>
            </AnimateBox>
          </div>
        </div>
      </div>

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
      <AnimateBox duration={1} className="mx-auto w-fit my-4">
        <p className="text-muted-foreground flex items-center gap-2">Powered by <Link href="https://devian.in" target="_blank" className="text-primary hover:underline flex items-center gap-2">
        <Image src="https://devian.in/logo/logo.webp" alt="Devian - Website/App Development Agency" className="size-5 rounded-full" width={20} height={20} loader={imgLoader} />
        Devian</Link></p>
      </AnimateBox>
    </section>
  );
};
