import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, TrendingUp } from "lucide-react";

export const WhyModernBusinessesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Modern Businesses Are Winning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customers prefer to hire companies that respond quickly, look modern, and stay ahead of the curve. 
              Here's why staying up-to-date helps you close more jobs and build trust.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Old Way */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge variant="destructive" className="mb-4">Old Way</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Traditional Contractors</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Slow Response Times</h4>
                      <p className="text-sm text-muted-foreground">Miss calls, return them hours later, lose jobs to faster competitors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Manual Everything</h4>
                      <p className="text-sm text-muted-foreground">Manually call back, manually schedule, manually follow up for reviews</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Inconsistent Reviews</h4>
                      <p className="text-sm text-muted-foreground">Forget to ask for reviews, get negative ones without responding</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Outdated Image</h4>
                      <p className="text-sm text-muted-foreground">Customers question if you're professional and up-to-date</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Way */}
            <Card className="shadow-card border-success">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge variant="default" className="mb-4 bg-success text-success-foreground">AI-Powered</Badge>
                  <h3 className="text-2xl font-bold text-foreground">Smart Contractors</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Instant Response</h4>
                      <p className="text-sm text-muted-foreground">AI responds within seconds, books jobs while competitors sleep</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Full Automation</h4>
                      <p className="text-sm text-muted-foreground">AI handles calls, texts, scheduling, and follow-ups automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">5-Star Reviews</h4>
                      <p className="text-sm text-muted-foreground">Automatic review requests and responses build perfect reputation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Modern Image</h4>
                      <p className="text-sm text-muted-foreground">Customers see you as innovative, professional, and trustworthy</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">15 sec</h3>
              <p className="text-sm text-muted-foreground">Average AI response time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">73%</h3>
              <p className="text-sm text-muted-foreground">More jobs booked with AI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">4.9★</h3>
              <p className="text-sm text-muted-foreground">Average review rating</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">280%</h3>
              <p className="text-sm text-muted-foreground">ROI in first year</p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-hero text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Stop handing your competitors your next job
            </h3>
            <p className="text-white/90 mb-6">
              Every day you wait is another day your competitors are booking the jobs that should be yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};