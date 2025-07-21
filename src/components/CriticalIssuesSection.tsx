"use client";
import { PhoneCall, Star, Globe, AlertCircle } from "lucide-react";
import { MagicCard } from "./magicui/magic-card";
import { TextAnimate } from "./magicui/animate-text";
import { NumberTicker } from "./magicui/number-ticker";
import AnimateBox from "./magicui/animate-box";

export const CriticalIssuesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextAnimate
            animation="slideDown"
            by="word"
            duration={0.5}
            as="h2"
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Critical Business Issues
          </TextAnimate>
          <TextAnimate
            delay={0.5}
            animation="fadeIn"
            by="character"
            duration={1.5}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Why Contractors Are Losing Money Every Week
          </TextAnimate>
          <TextAnimate
            delay={2}
            animation="fadeIn"
            by="character"
            duration={1.5}
            className="text-lg text-muted-foreground max-w-4xl mx-auto mt-2"
          >
            These pain points are costing you thousands in lost revenue.
            Here&apos;s what&apos;s happening to your business right now
          </TextAnimate>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Missed Calls */}
          <MagicCard className="rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center">
                <PhoneCall className="w-6 h-6 text-destructive" />
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground animate-pulse">
                  Incoming call
                </div>
                <div className="text-sm text-destructive">
                  &rarr; Competitor
                </div>
              </div>
            </div>

            <h3 className="text-xl text-center font-bold mb-4 text-foreground">
              Missed Calls ={" "}
              <span className="text-destructive">Missed Deals</span>
            </h3>

            <div className="space-y-4 mb-6">
              <div className="bg-destructive/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-destructive mb-1">
                  <NumberTicker
                    value={78}
                    startValue={40}
                    className="text-destructive"
                  />
                  %
                </div>
                <div className="text-sm text-muted-foreground">
                  CHOOSE FIRST RESPONDER
                </div>
              </div>
            </div>

            <TextAnimate
              className="text-muted-foreground mb-4"
              animation="slideRight"
              by="character"
              duration={2}
            >
              78% of people go with the contractor who responds first. If you
              don&apos;t answer, they move on.
            </TextAnimate>

            <div className="flex items-center gap-2 text-destructive text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Happening right now</span>
            </div>
          </MagicCard>

          {/* Poor Reviews */}
          <MagicCard className="rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-warning" />
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">
                  Low visibility
                </div>
                <div className="flex">
                  <Star className="w-4 h-4 fill-warning text-warning" />
                  <Star className="w-4 h-4 fill-warning text-warning" />
                  <Star className="w-4 h-4 text-muted-foreground" />
                  <Star className="w-4 h-4 text-muted-foreground" />
                  <Star className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <h3 className="text-xl text-center font-bold mb-4 text-foreground">
              Poor Reviews = <span className="text-warning">Lower Trust</span>
            </h3>

            <div className="space-y-4 mb-6">
              <div className="bg-warning/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-warning mb-1">
                  <NumberTicker
                    value={92}
                    startValue={50}
                    className="text-warning"
                  />
                  %
                </div>
                <div className="text-sm text-muted-foreground">
                  DON&apos;T LEAVE REVIEWS
                </div>
              </div>
            </div>

            <TextAnimate
              className="text-muted-foreground mb-4"
              animation="slideRight"
              by="character"
              duration={2}
            >
              Happy customers don&apos;t leave reviews unless you ask. No
              follow-up = missed social proof.
            </TextAnimate>

            <div className="flex items-center gap-2 text-warning text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Happening right now</span>
            </div>
          </MagicCard>

          {/* Website Visitors */}
          <MagicCard className="rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">
                  100 visitors
                </div>
                <div className="text-sm text-warning">3 conversions</div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-foreground">
              🌐 Website Visitors Don&apos;t Convert
            </h3>

            <div className="space-y-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">
                  <NumberTicker
                    value={97}
                    startValue={50}
                    className="text-primary"
                  />
                  %
                </div>
                <div className="text-sm text-muted-foreground">
                  LEAVE WITHOUT BUYING
                </div>
              </div>
            </div>

            <TextAnimate
              className="text-muted-foreground mb-4"
              animation="slideRight"
              by="character"
              duration={2}
            >
              People visit your site and leave because there&apos;s no one to
              talk to. You need instant engagement.
            </TextAnimate>

            <div className="flex items-center gap-2 text-primary text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Happening right now</span>
            </div>
          </MagicCard>
        </div>

        <AnimateBox className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card rounded-2xl p-6 border border-border">
            <div className="text-left">
              <div className="text-sm text-muted-foreground">
                Total Monthly Impact
              </div>
              <div className="text-3xl font-bold text-destructive">
                Every minute of delay costs you potential customers
              </div>
            </div>
          </div>
        </AnimateBox>
      </div>
    </section>
  );
};
