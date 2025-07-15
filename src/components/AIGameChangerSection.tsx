import { CheckCircle, TrendingUp, Clock, Star } from "lucide-react";

export const AIGameChangerSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              AI Is Changing The Game — And The 
              <span className="text-primary block">Smartest Contractors Are Already Cashing In</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While most contractors are still manually handling calls and reviews, early adopters are 
              automating their way to bigger profits and more free time.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">78%</h3>
              <p className="text-muted-foreground">of contractors miss calls during busy hours</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">3x</h3>
              <p className="text-muted-foreground">faster response times with AI automation</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground">AI works while you sleep, vacation, or focus on jobs</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">4.8★</h3>
              <p className="text-muted-foreground">average review rating with automated follow-ups</p>
            </div>
          </div>

          {/* Benefits List */}
          <div className="bg-muted/50 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
              Why Early Adopters Are Winning Right Now
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Instant Response = More Jobs</h4>
                  <p className="text-muted-foreground">Customers call the first contractor who answers. AI ensures you're always first.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">24/7 Lead Qualification</h4>
                  <p className="text-muted-foreground">AI pre-qualifies leads and schedules only serious prospects.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Automatic Review Generation</h4>
                  <p className="text-muted-foreground">Get more 5-star reviews without lifting a finger.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Professional Image</h4>
                  <p className="text-muted-foreground">Customers prefer businesses that seem modern and responsive.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Your competitors are already using AI.</strong> Are you ready to keep up — or are you handing them your next job?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};