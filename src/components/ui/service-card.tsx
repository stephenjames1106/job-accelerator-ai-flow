"use client";
import AnimateBox from "../magicui/animate-box";
import { MessageSquare } from "lucide-react";
import { TextAnimate } from "../magicui/animate-text";
import { CheckCircle } from "lucide-react";

export interface ServiceCardProps {
  delay?: number;
  color: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  features: string[];
  blocks: {
    title: string;
    description: string;
  }[];
}

export default function ServiceCard({ data }: { data: ServiceCardProps }) {
  return (
    <AnimateBox duration={0.5} delay={data.delay}>
      <div className="bg-card rounded-2xl p-8">
        <div
          style={{
            backgroundColor: `color-mix(in srgb, ${data.color} 20%, transparent)`,
          }}
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6`}
        >
          {data.icon}
        </div>

        <TextAnimate
          duration={1}
          delay={0.5}
          as="h3"
          className="text-foreground text-xl font-bold mb-4"
          by="character"
        >
          {data.title}
        </TextAnimate>

        <div className="space-y-3 mb-6">
          {data.points.map((point, index) => (
            <AnimateBox duration={0.5} delay={index * 0.5} key={index}>
              <div
                style={{
                  backgroundColor: `color-mix(in srgb, ${data.color} 10%, transparent)`,
                }}
                className={`p-3 rounded-lg`}
              >
                <div
                  style={{ color: data.color }}
                  className={`text-sm font-medium`}
                >
                  {point}
                </div>
              </div>
            </AnimateBox>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {data.blocks.map((block, index) => (
            <AnimateBox duration={0.5} delay={index * 0.5 + 1} key={index}
            style={{backgroundColor: `color-mix(in srgb, ${data.color} 20%, transparent)`}}
            className="text-center flex flex-col items-center justify-center size-26 p-2 rounded-lg">
                <div
                  style={{ color: data.color }}
                  className={`text-2xl font-bold`}
                >
                  {block.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {block.description}
                </div>
            </AnimateBox>
          ))}
        </div>

        <TextAnimate
          className="text-muted-foreground text-sm mb-6"
          duration={0.5}
          delay={2.5}
          by="character"
        >
          {data.description}
        </TextAnimate>

        <div className="space-y-2">
          <AnimateBox duration={0.5} delay={1}>
            <h4 className="font-medium text-foreground">Key Features:</h4>
          </AnimateBox>
          <div className="space-y-1">
            {data.features.map((feature, index) => (
              <AnimateBox duration={0.5} delay={index * 0.5 + 1} key={index}>
                <div className="flex items-center gap-2">
                  <CheckCircle
                    style={{ color: data.color }}
                    className={`w-4 h-4`}
                  />
                  <TextAnimate
                    duration={0.5}
                    delay={index * 0.5 + 1}
                    by="character"
                    className="text-sm text-muted-foreground"
                  >
                    {feature}
                  </TextAnimate>
                </div>
              </AnimateBox>
            ))}
          </div>
        </div>
      </div>
    </AnimateBox>
  );
}
