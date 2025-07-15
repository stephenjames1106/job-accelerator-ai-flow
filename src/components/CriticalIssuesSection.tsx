import { PhoneCall, Star, Globe, AlertCircle } from "lucide-react";

export const CriticalIssuesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Critical Business Issues
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why Contractors Are Losing Money Every Week
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-2">
            These pain points are costing you thousands in lost revenue. Here's what's happening to your business right now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Missed Calls */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center">
                <PhoneCall className="w-6 h-6 text-destructive" />
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Incoming call</div>
                <div className="text-sm text-destructive">→ Competitor</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              📞 Missed Calls = Missed Deals
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-destructive/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-destructive mb-1">78%</div>
                <div className="text-sm text-muted-foreground">CHOOSE FIRST RESPONDER</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              78% of people go with the contractor who responds first. If you don't answer, they move on.
            </p>
            
            <div className="flex items-center gap-2 text-destructive text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Happening right now</span>
            </div>
          </div>

          {/* Poor Reviews */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-warning" />
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Low visibility</div>
                <div className="flex">
                  <Star className="w-4 h-4 fill-warning text-warning" />
                  <Star className="w-4 h-4 fill-warning text-warning" />
                  <Star className="w-4 h-4 text-muted-foreground" />
                  <Star className="w-4 h-4 text-muted-foreground" />
                  <Star className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ⭐ Poor Reviews = Lower Trust
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-warning/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-warning mb-1">92%</div>
                <div className="text-sm text-muted-foreground">DON'T LEAVE REVIEWS</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Happy customers don't leave reviews unless you ask. No follow-up = missed social proof.
            </p>
            
            <div className="flex items-center gap-2 text-destructive text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Happening right now</span>
            </div>
          </div>

          {/* Website Visitors */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">100 visitors</div>
                <div className="text-sm text-warning">3 conversions</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              🌐 Website Visitors Don't Convert
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">97%</div>
                <div className="text-sm text-muted-foreground">LEAVE WITHOUT BUYING</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              People visit your site and leave because there's no one to talk to. You need instant engagement.
            </p>
            
            <div className="flex items-center gap-2 text-destructive text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Happening right now</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card rounded-2xl p-6 border border-border">
            <div className="text-left">
              <div className="text-sm text-muted-foreground">Total Monthly Impact</div>
              <div className="text-3xl font-bold text-destructive">Every minute of delay costs you potential customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};