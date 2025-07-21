"use client";
import { TextAnimate } from "./magicui/animate-text";
import AnimateBox from "./magicui/animate-box";
import {
  MessageSquare,
  Bot,
  Star,
  Calculator,
  CheckCircle,
  Clock,
  Zap,
  TrendingUp,
} from "lucide-react";
import { SparklesText } from "./magicui/sparkles-text";

export const AIGameChangerSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimateBox>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What You Get With <span className="text-primary">OptimaxAI</span>
            </h2>
          </AnimateBox>
          <TextAnimate
            duration={1}
            delay={1}
            by="character"
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Smart Services That Work While You Don&apos;t
          </TextAnimate>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-success" />
              <SparklesText
                size={0.2}
                sparklesCount={2}
                className="text-success text-sm font-medium"
              >
                24/7 Automation
              </SparklesText>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <SparklesText
                size={0.2}
                sparklesCount={2}
                className="text-primary text-sm font-medium"
              >
                Instant Response
              </SparklesText>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <SparklesText
                size={0.2}
                sparklesCount={2}
                className="text-accent text-sm font-medium"
              >
                More Revenue
              </SparklesText>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Missed-Call Text-Back AI */}
          <AnimateBox duration={0.5}>
            <div className="bg-card rounded-2xl p-8">
              <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-success" />
              </div>

              <TextAnimate
                duration={1}
                delay={0.5}
                as="h3"
                className="text-foreground text-xl font-bold mb-4"
                by="character"
              >
                AI Receptionist & Text-Back
              </TextAnimate>

              <div className="space-y-3 mb-6">
                <AnimateBox duration={0.5}>
                  <div className="bg-success/10 p-3 rounded-lg">
                    <div className="text-sm text-success font-medium">
                      ✅ Missed call detected
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={0.5}>
                  <div className="bg-success/10 p-3 rounded-lg">
                    <div className="text-sm text-success font-medium">
                      ✅ AI responds in 3s
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={1}>
                  <div className="bg-success/10 p-3 rounded-lg">
                    <div className="text-sm text-success font-medium">
                      ✅ Lead captured
                    </div>
                  </div>
                </AnimateBox>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <AnimateBox duration={0.5} delay={1.5}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">3s</div>
                    <div className="text-xs text-muted-foreground">
                      RESPONSE TIME
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={2}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">Auto</div>
                    <div className="text-xs text-muted-foreground">BOOKING</div>
                  </div>
                </AnimateBox>
              </div>

              <TextAnimate
                className="text-muted-foreground text-sm mb-6"
                duration={0.5}
                delay={2.5}
                by="character"
              >
                AI receptionist handles all inbound calls, books appointments on
                autopilot, and knows everything about your business to answer
                any question. Works 24/7, never misses opportunities because
                your hours are closed.
              </TextAnimate>

              <div className="space-y-2">
                <AnimateBox duration={0.5} delay={1}>
                  <h4 className="font-medium text-foreground">Key Features:</h4>
                </AnimateBox>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={1.5}>
                      <CheckCircle className="w-4 h-4 text-success" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={1.5}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Handles all inbound calls
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={2}>
                      <CheckCircle className="w-4 h-4 text-success" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={2}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Books appointments automatically
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={2.5}>
                      <CheckCircle className="w-4 h-4 text-success" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={2.5}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Knows everything about your business
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={3}>
                      <CheckCircle className="w-4 h-4 text-success" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={3}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Provides customer support 24/7
                    </TextAnimate>
                  </div>
                </div>
              </div>
            </div>
          </AnimateBox>

          {/* Website Chatbot */}
          <AnimateBox duration={0.5}>
            <div className="bg-card rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-primary" />
              </div>

              <TextAnimate
                duration={1}
                delay={0.5}
                as="h3"
                className="text-xl font-bold mb-4 text-foreground"
                by="character"
              >
                Website & Social Media Chatbot
              </TextAnimate>

              <div className="space-y-3 mb-6">
                <AnimateBox duration={0.5}>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="text-sm text-primary font-medium">
                      👤 Visitor detected
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={0.5}>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="text-sm text-primary font-medium">
                      💬 Chat initiated
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={1}>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="text-sm text-primary font-medium">
                      🎯 Lead converted
                    </div>
                  </div>
                </AnimateBox>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <AnimateBox duration={0.5} delay={1.5}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3x</div>
                    <div className="text-xs text-muted-foreground uppercase">
                      More conversions
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={2}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground uppercase">
                      Active
                    </div>
                  </div>
                </AnimateBox>
              </div>

              <TextAnimate
                className="text-muted-foreground text-sm mb-6"
                duration={0.5}
                delay={2.5}
                by="character"
              >
                Smart chatbot that qualifies leads and books appointments from
                your website, Facebook, and Instagram pages - all while you
                sleep.
              </TextAnimate>

              <div className="space-y-2">
                <AnimateBox duration={0.5} delay={1}>
                  <h4 className="font-medium text-foreground">Key Features:</h4>
                </AnimateBox>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={1.5}>
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={1.5}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Website chat widget
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={2}>
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={2}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Facebook & Instagram integration
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={2.5}>
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={2.5}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Books appointments across platforms
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={3}>
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={3}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Real-time lead capture
                    </TextAnimate>
                  </div>
                </div>
              </div>
            </div>
          </AnimateBox>

          {/* Review Automation */}
          <AnimateBox duration={0.5} delay={1}>
            <div className="bg-card rounded-2xl p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-accent" />
              </div>

              <TextAnimate
                duration={1}
                delay={0.5}
                by="character"
                className="text-xl font-bold mb-4 text-foreground"
              >
                Google Review Automation
              </TextAnimate>

              <div className="space-y-3 mb-6">
                <AnimateBox duration={0.5}>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <div className="text-sm text-accent font-medium">
                      ⭐ Review sent
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={0.5}>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <div className="text-sm text-accent font-medium">
                      🚀 Reputation boost
                    </div>
                  </div>
                </AnimateBox>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <AnimateBox
                  duration={0.5}
                  delay={1.5}
                  className="flex items-center justify-center"
                >
                  <div className="text-center bg-accent/10 p-3 rounded-lg aspect-square max-w-32 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-accent">4.8⭐</div>
                    <div className="text-xs text-muted-foreground uppercase">
                      Average Rating
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={2}>
                  <div className="text-center bg-accent/10 p-3 rounded-lg aspect-square max-w-32 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-accent">Auto</div>
                    <div className="text-xs text-muted-foreground uppercase">
                      Follow-up
                    </div>
                  </div>
                </AnimateBox>
              </div>

              <TextAnimate
                className="text-muted-foreground text-sm mb-6"
                duration={0.5}
                delay={2.5}
                by="character"
              >
                Automated texts request reviews with gift card incentives.
                Reviews below 4 stars go directly to you to make it right.
                Boosts Google SEO to rank higher when customers search for
                services in your area.
              </TextAnimate>

              <div className="space-y-2">
                <AnimateBox duration={0.5} delay={1}>
                  <h4 className="font-medium text-foreground">Key Features:</h4>
                </AnimateBox>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={1.5}>
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={1.5}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Gift card incentives (we pay)
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={2}>
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={2}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Bad reviews filtered to you first
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={2.5}>
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={2.5}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Boosts Google SEO rankings
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={3}>
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={3}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Automated text requests
                    </TextAnimate>
                  </div>
                </div>
              </div>
            </div>
          </AnimateBox>

          {/* AI Estimator */}
          <AnimateBox duration={0.5} delay={1.5}>
            <div className="bg-card rounded-2xl p-8">
              <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-warning" />
              </div>

              <TextAnimate
                duration={1}
                delay={0.5}
                by="character"
                as="h3"
                className="text-xl font-bold mb-4 text-foreground"
              >
                AI Estimator
              </TextAnimate>

              <div className="space-y-3 mb-6">
                <AnimateBox duration={0.5}>
                  <div className="bg-warning/10 p-3 rounded-lg">
                    <div className="text-sm text-warning font-medium">
                      📊 Analyzing data
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={0.5}>
                  <div className="bg-warning/10 p-3 rounded-lg">
                    <div className="text-sm text-warning font-medium">
                      📋 Quote generated
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={1}>
                  <div className="bg-warning/10 p-3 rounded-lg">
                    <div className="text-sm text-warning font-medium">
                      ⚡ 90% time saved
                    </div>
                  </div>
                </AnimateBox>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <AnimateBox
                  duration={0.5}
                  delay={1.5}
                  className="flex items-center justify-center"
                >
                  <div className="text-center bg-warning/10 p-3 rounded-lg aspect-square max-w-32 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-warning">90%</div>
                    <div className="text-xs text-muted-foreground uppercase">
                      Time saved
                    </div>
                  </div>
                </AnimateBox>
                <AnimateBox duration={0.5} delay={2}>
                  <div className="text-center bg-warning/10 p-3 rounded-lg aspect-square max-w-32 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-warning">Auto</div>
                    <div className="text-xs text-muted-foreground uppercase">
                      Quotes
                    </div>
                  </div>
                </AnimateBox>
              </div>

              <TextAnimate
                duration={0.5}
                delay={2.5}
                by="character"
                className="text-muted-foreground text-sm mb-6"
              >
                Our AI learns from your past estimates to generate accurate,
                fast quotes — saving you 80-90% of time.
              </TextAnimate>

              <div className="space-y-2">
                <AnimateBox duration={0.5} delay={1}>
                  <h4 className="font-medium text-foreground">Key Features:</h4>
                </AnimateBox>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={1.5}>
                      <CheckCircle className="w-4 h-4 text-warning" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={1.5}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Smart pricing
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={2}>
                      <CheckCircle className="w-4 h-4 text-warning" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={2}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Historical data analysis
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={2.5}>
                      <CheckCircle className="w-4 h-4 text-warning" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={2.5}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Custom templates
                    </TextAnimate>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimateBox duration={0.5} delay={3}>
                      <CheckCircle className="w-4 h-4 text-warning" />
                    </AnimateBox>
                    <TextAnimate
                      duration={0.5}
                      delay={3}
                      by="character"
                      className="text-sm text-muted-foreground"
                    >
                      Instant proposals
                    </TextAnimate>
                  </div>
                </div>
              </div>
            </div>
          </AnimateBox>
        </div>
      </div>
    </section>
  );
};
