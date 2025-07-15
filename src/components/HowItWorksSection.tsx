import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Zap, TrendingUp } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How It Works
              <span className="text-primary block">Simple. Fast. Profitable.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our done-for-you AI system is designed for busy contractors who want results without the hassle.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <Card className="shadow-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Same-Day Setup</h3>
                <p className="text-muted-foreground mb-6">
                  We handle everything. Phone integration, AI training, calendar sync. 
                  You'll be capturing missed calls within hours, not weeks.
                </p>
                <div className="text-sm text-success font-semibold">
                  ✓ No tech skills needed
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="shadow-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">AI Takes Over</h3>
                <p className="text-muted-foreground mb-6">
                  Every missed call triggers instant AI response. Text messaging, qualification, 
                  scheduling — all automated 24/7.
                </p>
                <div className="text-sm text-success font-semibold">
                  ✓ Works while you sleep
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="shadow-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Watch Jobs Roll In</h3>
                <p className="text-muted-foreground mb-6">
                  Pre-qualified appointments appear in your calendar. Reviews get generated automatically. 
                  Your phone rings with booked jobs.
                </p>
                <div className="text-sm text-success font-semibold">
                  ✓ More jobs, less work
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom section */}
          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              The companies winning right now aren't the cheapest — they're the fastest, 
              the smartest, and the most up-to-date.
            </h3>
            <p className="text-muted-foreground mb-6">
              Stop losing jobs to competitors who respond faster. Get your AI system running today.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Start Your Setup Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};