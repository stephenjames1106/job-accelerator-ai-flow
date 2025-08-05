"use client";
import { TextAnimate } from "./magicui/animate-text";
import AnimateBox from "./magicui/animate-box";
import {
  MessageSquare,
  Bot,
  Star,
  Calculator,
  Clock,
  Zap,
  TrendingUp,
} from "lucide-react";
import { SparklesText } from "./magicui/sparkles-text";
import ServiceCard, { ServiceCardProps } from "./ui/service-card";

const services: ServiceCardProps[] = [
  {
    color: "#16a249",
    icon: <MessageSquare className="w-6 h-6 text-success" />,
    title: "AI Receptionist & Text-Back",
    description: "AI receptionist handles all inbound calls, books appointments on autopilot, and knows everything about your business to answer any question. Works 24/7, never misses opportunities because your hours are closed.",
    points: [
      "24/7 Automation",
      "Instant Response",
      "More Revenue",
    ],
    features: [
      "Handles all inbound calls",
      "Books appointments automatically",
      "Knows everything about your business",
      "Provides customer support 24/7",
    ],
    blocks: [
      {
        title: "3s",
        description: "RESPONSE TIME",
      },
      {
        title: "Auto",
        description: "BOOKING",
      },
    ],
  },
  {
    delay: 0.5,
    color: "#3c83f6",
    icon: <Bot className="size-6 text-[#3c83f6]" />,
    title: "Website & Social Media Chatbot",
    description: "Smart chatbot that qualifies leads and books appointments from your website, Facebook, and Instagram pages - all while you sleep.",
    points: [
      "👤 Visitor detected",
      "💬 Chat initiated",
      "🎯 Lead converted",
    ],
    features: [
      "Website chat widget",
      "Facebook & Instagram integration",
      "Books appointments across platforms",
      "Real-time lead capture",
    ],
    blocks: [
      {
        title: "3x",
        description: "More conversions",
      },
      {
        title: "24/7",
        description: "Active",
      },
    ],
  },
  {
    delay: 1,
    color: "#ffc105",
    icon: <Star className="size-6 text-[#ffc105]" />,
    title: "Google Review Automation",
    description: "Automated texts request reviews with gift card incentives. Reviews below 4 stars go directly to you to make it right. Boosts Google SEO to rank higher when customers search for services in your area.",
    points: [
      "⭐ Review sent",
      "🚀 Reputation boost",
    ],
    features: [
      "Gift card incentives (we pay)",
      "Bad reviews filtered to you first",
      "Boosts Google SEO rankings",
      "Automated text requests",
    ],
    blocks: [
      {
        title: "4.8⭐",
        description: "Average rating",
      },
      {
        title: "Auto",
        description: "Follow-up",
      },
    ],
  },
  {
    delay: 1.5,
    color: "#f59f0a",
    icon: <Calculator className="size-6 text-[#f59f0a]" />,
    title: "AI Estimator",
    description: "Our AI learns from your past estimates to generate accurate, fast quotes — saving you 80-90% of time.",
    points: [
      "📊 Analyzing data",
      "📋 Quote generated",
      "⚡ 90% time saved",
    ],
    features: [
      "Smart pricing",
      "Historical data analysis",
      "Custom templates",
      "Instant proposals",
    ],
    blocks: [
      {
        title: "90%",
        description: "Time saved",
      },
      {
        title: "Auto",
        description: "Quotes",
      },
    ],
  },
]

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

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} data={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
