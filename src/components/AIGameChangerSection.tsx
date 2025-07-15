import { MessageSquare, Bot, Star, Calculator, CheckCircle, Clock, Zap, TrendingUp, Phone } from "lucide-react";

export const AIGameChangerSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What You Get With <span className="text-primary">OptimaxAI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Smart Services That Work While You Don't
          </p>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-success" />
              <span className="text-success font-medium">24/7 Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Instant Response</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">More Revenue</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Missed-Call Text-Back AI */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-success" />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">
              📲 AI Receptionist & Text-Back
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="bg-success/10 p-3 rounded-lg">
                <div className="text-sm text-success font-medium">✅ Missed call detected</div>
              </div>
              <div className="bg-success/10 p-3 rounded-lg">
                <div className="text-sm text-success font-medium">✅ AI responds in 3s</div>
              </div>
              <div className="bg-success/10 p-3 rounded-lg">
                <div className="text-sm text-success font-medium">✅ Lead captured</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">3s</div>
                <div className="text-xs text-muted-foreground">RESPONSE TIME</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">Auto</div>
                <div className="text-xs text-muted-foreground">BOOKING</div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6">
              AI receptionist handles all inbound calls, books appointments on autopilot, and knows everything about your business to answer any question. Works 24/7, never misses opportunities because your hours are closed.
            </p>
            
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Key Features:</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">Handles all inbound calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">Books appointments automatically</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">Knows everything about your business</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">Provides customer support 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Website Chatbot */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">
              🤖 Website & Social Media Chatbot
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <div className="text-sm text-primary font-medium">👤 Visitor detected</div>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <div className="text-sm text-primary font-medium">💬 Chat initiated</div>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <div className="text-sm text-primary font-medium">🎯 Lead converted</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3x</div>
                <div className="text-xs text-muted-foreground">MORE CONVERSIONS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">ACTIVE</div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6">
              Smart chatbot that qualifies leads and books appointments from your website, Facebook, and Instagram pages - all while you sleep.
            </p>
            
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Key Features:</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Website chat widget</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Facebook & Instagram integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Books appointments across platforms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Real-time lead capture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Review Automation */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-accent" />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">
              📝 Google Review Automation
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="bg-accent/10 p-3 rounded-lg">
                <div className="text-sm text-accent font-medium">⭐ Review sent</div>
              </div>
              <div className="bg-accent/10 p-3 rounded-lg">
                <div className="text-sm text-accent font-medium">🚀 Reputation boost</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5⭐</div>
                <div className="text-xs text-muted-foreground">AVERAGE RATING</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">Auto</div>
                <div className="text-xs text-muted-foreground">FOLLOW-UP</div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6">
              Automated texts request reviews with gift card incentives. Reviews below 4 stars go directly to you to make it right. Boosts Google SEO to rank higher when customers search for services in your area.
            </p>
            
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Key Features:</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Gift card incentives (we pay)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Bad reviews filtered to you first</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Boosts Google SEO rankings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Automated text requests</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Estimator */}
          <div className="bg-card rounded-2xl p-8 border border-border relative">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              ⚡ Optional Add-On
            </div>
            
            <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mb-6">
              <Calculator className="w-6 h-6 text-warning" />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">
              🔧 AI Estimator
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="bg-warning/10 p-3 rounded-lg">
                <div className="text-sm text-warning font-medium">📊 Analyzing data</div>
              </div>
              <div className="bg-warning/10 p-3 rounded-lg">
                <div className="text-sm text-warning font-medium">📋 Quote generated</div>
              </div>
              <div className="bg-warning/10 p-3 rounded-lg">
                <div className="text-sm text-warning font-medium">⚡ 90% time saved</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">90%</div>
                <div className="text-xs text-muted-foreground">TIME SAVED</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">Auto</div>
                <div className="text-xs text-muted-foreground">QUOTES</div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6">
              Our AI learns from your past estimates to generate accurate, fast quotes — saving you 80-90% of time.
            </p>
            
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Key Features:</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-warning" />
                  <span className="text-sm text-muted-foreground">Smart pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-warning" />
                  <span className="text-sm text-muted-foreground">Historical data analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-warning" />
                  <span className="text-sm text-muted-foreground">Custom templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-warning" />
                  <span className="text-sm text-muted-foreground">Instant proposals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};