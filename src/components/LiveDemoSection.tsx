import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PhoneCall, MessageCircle, Calendar, CheckCircle } from "lucide-react";

export const LiveDemoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Watch A Missed Call Turn Into A 
              <span className="text-primary block">Booked Job In Real-Time</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See exactly how our AI captures missed calls and converts them into scheduled appointments 
              while you're busy on other jobs.
            </p>
          </div>

          {/* Demo Timeline */}
          <div className="mb-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full hidden md:block"></div>
              
              {/* Timeline steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex items-center gap-8 md:gap-12">
                  <div className="flex-1 md:text-right">
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <PhoneCall className="w-6 h-6 text-destructive" />
                          <Badge variant="destructive">Missed Call</Badge>
                        </div>
                        <h3 className="font-semibold mb-2">Customer calls during busy hours</h3>
                        <p className="text-sm text-muted-foreground">
                          "Hi, I need my roof inspected after the storm. Can someone come out this week?"
                        </p>
                        <div className="mt-3 text-xs text-muted-foreground">
                          Tuesday, 2:34 PM
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    1
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-8 md:gap-12">
                  <div className="flex-1 hidden md:block"></div>
                  
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    2
                  </div>
                  
                  <div className="flex-1">
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <MessageCircle className="w-6 h-6 text-primary" />
                          <Badge variant="default">AI Response</Badge>
                        </div>
                        <h3 className="font-semibold mb-2">AI texts back instantly</h3>
                        <p className="text-sm text-muted-foreground">
                          "Hi! Thanks for calling about roof inspection. I can help schedule that. What's your address and preferred time?"
                        </p>
                        <div className="mt-3 text-xs text-muted-foreground">
                          Tuesday, 2:34 PM (15 seconds later)
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-8 md:gap-12">
                  <div className="flex-1 md:text-right">
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-6 h-6 text-success" />
                          <Badge variant="default" className="bg-success text-success-foreground">Booked</Badge>
                        </div>
                        <h3 className="font-semibold mb-2">Job scheduled automatically</h3>
                        <p className="text-sm text-muted-foreground">
                          "Perfect! I've scheduled your roof inspection for Thursday at 10 AM. You'll receive a confirmation shortly."
                        </p>
                        <div className="mt-3 text-xs text-muted-foreground">
                          Tuesday, 2:38 PM (4 minutes total)
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Video placeholder */}
          <div className="bg-muted/50 rounded-lg p-8 text-center mb-12">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <PhoneCall className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Live Demo Video</h3>
            <p className="text-muted-foreground mb-6">
              Watch our AI system in action as it converts a real missed call into a booked job in under 5 minutes.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Watch Demo Video
            </Button>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Never Miss Another Job?</h3>
            <p className="text-muted-foreground mb-6">
              AI isn't coming — it's already here. And it's booking jobs for your competitors while you're still checking voicemails.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};