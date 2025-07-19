import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Phone, Star, Globe, Clock, CheckCircle, TrendingUp, Users, Shield } from 'lucide-react';

const SalesPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slides = [
    // Slide 1: Attention-Grabbing Intro
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
          Turn Missed Calls Into <span className="text-primary">Booked Jobs</span>
        </h1>
        <h2 className="text-2xl text-muted-foreground mb-12">
          AI system that captures leads 24/7, while you focus on your business
        </h2>
        
        <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-destructive-foreground" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Missed Call</p>
              <p className="font-semibold">John's Roofing - 2:47 PM</p>
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-primary">AI Response (Instant)</p>
            <p className="text-foreground">"Hi! I got your call about roofing work. I can schedule your free estimate - what day works best for you?"</p>
          </div>
          
          <div className="flex items-center gap-2 text-success">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Job Booked in 3 minutes</span>
          </div>
        </div>
      </div>
    </div>,

    // Slide 2: Pain Point Breakdown
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-6xl">
        <h1 className="text-5xl font-bold text-foreground mb-16">
          Why Businesses Are <span className="text-destructive">Losing Money</span> Every Week
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 border-2 border-destructive/20 bg-destructive/5">
            <div className="text-6xl mb-4">📞</div>
            <h3 className="text-4xl font-bold text-destructive mb-4">78%</h3>
            <p className="text-xl font-semibold mb-4">of customers choose the first business to respond</p>
            <p className="text-muted-foreground">Every missed call is money walking to your competitor</p>
          </Card>
          
          <Card className="p-8 border-2 border-warning/20 bg-warning/5">
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="text-4xl font-bold text-warning mb-4">92%</h3>
            <p className="text-xl font-semibold mb-4">don't leave a Google review unless you ask</p>
            <p className="text-muted-foreground">Missing reviews = invisible to new customers</p>
          </Card>
          
          <Card className="p-8 border-2 border-primary/20 bg-primary/5">
            <div className="text-6xl mb-4">🌐</div>
            <h3 className="text-4xl font-bold text-primary mb-4">97%</h3>
            <p className="text-xl font-semibold mb-4">of website visitors leave without converting</p>
            <p className="text-muted-foreground">No follow-up = no customers</p>
          </Card>
        </div>
        
        <div className="mt-16 p-6 bg-destructive/10 rounded-xl border border-destructive/20">
          <p className="text-xl font-bold text-destructive">
            The cost of doing nothing: Competitors are booking YOUR customers
          </p>
        </div>
      </div>
    </div>,

    // Slide 3: Real-Time Example
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-5xl">
        <h1 className="text-5xl font-bold text-foreground mb-12">
          Watch a <span className="text-primary">Missed Call</span> Turn Into a <span className="text-success">Booked Job</span>
        </h1>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-destructive-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold">Missed Call</p>
                <p className="text-muted-foreground">2:47 PM</p>
              </div>
            </div>
            <div className="text-3xl">→</div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold">AI Response</p>
                <p className="text-muted-foreground">2:47 PM (Instant)</p>
              </div>
            </div>
            <div className="text-3xl">→</div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-success-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold">Job Booked</p>
                <p className="text-muted-foreground">2:52 PM</p>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg text-left">
                <p className="font-semibold">Customer Text:</p>
                <p>"Hey, I called about roof repair but no one answered"</p>
              </div>
              
              <div className="bg-primary p-4 rounded-lg text-left">
                <p className="font-semibold text-primary-foreground">AI Response:</p>
                <p className="text-primary-foreground">"Hi! Sorry I missed your call. I'm available to schedule your free roof inspection. What day works best - tomorrow or Friday?"</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg text-left">
                <p className="font-semibold">Customer:</p>
                <p>"Friday afternoon works"</p>
              </div>
              
              <div className="bg-success p-4 rounded-lg text-left">
                <p className="font-semibold text-success-foreground">✅ Appointment Booked:</p>
                <p className="text-success-foreground">Friday 2:00 PM - Roof Inspection</p>
              </div>
            </div>
          </Card>
          
          <p className="text-2xl font-bold text-success">Total Time: 5 minutes. Result: $3,500 job booked.</p>
        </div>
      </div>
    </div>,

    // Slide 4: Common Revenue Leaks
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-foreground mb-16">
          Are These <span className="text-destructive">Costing You Customers?</span>
        </h1>
        
        <div className="space-y-8">
          <Card className="p-8 border-2 border-destructive/20 bg-destructive/5">
            <h3 className="text-3xl font-bold text-destructive mb-4">❌ How many calls do you miss every week?</h3>
            <p className="text-xl text-muted-foreground">Even 5 missed calls = $10,000+ in lost revenue</p>
          </Card>
          
          <Card className="p-8 border-2 border-warning/20 bg-warning/5">
            <h3 className="text-3xl font-bold text-warning mb-4">❌ Are customers bouncing off your website with no response?</h3>
            <p className="text-xl text-muted-foreground">No chat = no engagement = no bookings</p>
          </Card>
          
          <Card className="p-8 border-2 border-destructive/20 bg-destructive/5">
            <h3 className="text-3xl font-bold text-destructive mb-4">❌ Are you following up on every lead and review?</h3>
            <p className="text-xl text-muted-foreground">Manual follow-up = human error = lost opportunities</p>
          </Card>
        </div>
        
        <div className="mt-12 p-8 bg-primary/10 rounded-xl border-2 border-primary/20">
          <p className="text-2xl font-bold text-primary mb-4">
            Every "YES" above is costing you thousands per month
          </p>
          <p className="text-xl text-muted-foreground">
            While your competitors capture leads 24/7 with AI
          </p>
        </div>
      </div>
    </div>,

    // Slide 5: What You Get
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-6xl">
        <h1 className="text-5xl font-bold text-foreground mb-16">
          Smart Automation That Works <span className="text-primary">While You Don't</span>
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 border-2 border-primary/20 bg-primary/5 hover:scale-105 transition-transform">
            <Phone className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-primary">AI Receptionist</h3>
            <p className="text-muted-foreground">Responds to missed calls instantly via text</p>
          </Card>
          
          <Card className="p-6 border-2 border-success/20 bg-success/5 hover:scale-105 transition-transform">
            <Globe className="w-12 h-12 text-success mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-success">Website Chatbot</h3>
            <p className="text-muted-foreground">Captures leads from your website 24/7</p>
          </Card>
          
          <Card className="p-6 border-2 border-warning/20 bg-warning/5 hover:scale-105 transition-transform">
            <Star className="w-12 h-12 text-warning mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-warning">Review Automation</h3>
            <p className="text-muted-foreground">Automatically requests and manages Google reviews</p>
          </Card>
          
          <Card className="p-6 border-2 border-primary/20 bg-primary/5 hover:scale-105 transition-transform">
            <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-primary">AI Estimator</h3>
            <p className="text-muted-foreground">Provides instant quotes (optional add-on)</p>
          </Card>
        </div>
        
        <div className="mt-12 p-6 bg-success/10 rounded-xl border border-success/20">
          <p className="text-2xl font-bold text-success">
            ✅ Never miss another customer again
          </p>
        </div>
      </div>
    </div>,

    // Slide 6: ROI Calculator
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-foreground mb-16">
          Stop Leaving <span className="text-success">Money</span> On The Table
        </h1>
        
        <Card className="p-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-success/5">
          <div className="text-4xl font-bold text-center mb-8">Quick ROI Calculator</div>
          
          <div className="space-y-6 text-left">
            <div className="flex justify-between items-center text-2xl">
              <span>Missed Calls per Week:</span>
              <span className="font-bold text-destructive">5 calls</span>
            </div>
            
            <div className="text-center text-3xl font-bold text-muted-foreground">×</div>
            
            <div className="flex justify-between items-center text-2xl">
              <span>Average Job Value:</span>
              <span className="font-bold text-primary">$2,000</span>
            </div>
            
            <div className="text-center text-3xl font-bold text-muted-foreground">×</div>
            
            <div className="flex justify-between items-center text-2xl">
              <span>Close Rate:</span>
              <span className="font-bold text-warning">50%</span>
            </div>
            
            <div className="border-t-2 border-destructive pt-4">
              <div className="flex justify-between items-center text-3xl font-bold">
                <span>Lost Revenue per Month:</span>
                <span className="text-destructive">$20,000</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-success/20 rounded-lg border-2 border-success/30">
            <p className="text-2xl font-bold text-success text-center">
              OptimaxAI pays for itself in the first recovered call
            </p>
          </div>
        </Card>
        
        <p className="text-xl text-muted-foreground mt-8">
          Most businesses recover 3-5 additional jobs per month with our AI system
        </p>
      </div>
    </div>,

    // Slide 7: Simple Setup
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-5xl">
        <h1 className="text-5xl font-bold text-foreground mb-16">
          Simple Setup, <span className="text-success">Big Results</span>
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <Card className="p-8 border-2 border-primary/20 bg-primary/5">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Same-Day Setup</h3>
              <p className="text-muted-foreground">We connect to your phone, website, and Google Business in under 24 hours</p>
            </Card>
            <div className="hidden md:block absolute top-1/2 -right-4 text-4xl text-primary">→</div>
          </div>
          
          <div className="relative">
            <Card className="p-8 border-2 border-success/20 bg-success/5">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-success-foreground">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-success">AI Takes Over</h3>
              <p className="text-muted-foreground">Responds instantly 24/7 to missed calls, website visitors, and review requests</p>
            </Card>
            <div className="hidden md:block absolute top-1/2 -right-4 text-4xl text-success">→</div>
          </div>
          
          <Card className="p-8 border-2 border-warning/20 bg-warning/5">
            <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-warning-foreground">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-warning">Jobs Roll In</h3>
            <p className="text-muted-foreground">Calendar booked, reviews collected, leads converted while you focus on work</p>
          </Card>
        </div>
        
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-success/10 rounded-xl border border-primary/20">
          <p className="text-2xl font-bold text-foreground mb-4">
            Most customers see results within 48 hours
          </p>
          <p className="text-xl text-muted-foreground">
            Setup once, profit forever
          </p>
        </div>
      </div>
    </div>,

    // Slide 8: Old Way vs Smart Way
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-6xl">
        <h1 className="text-5xl font-bold text-foreground mb-16">
          Why <span className="text-primary">Modern Businesses</span> Are Winning
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-2 border-destructive/20 bg-destructive/5">
            <h3 className="text-3xl font-bold mb-8 text-destructive">❌ Traditional Way</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="text-destructive">✗</span>
                <span>Miss calls during busy times</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-destructive">✗</span>
                <span>Slow follow-ups (hours/days later)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-destructive">✗</span>
                <span>Forget to ask for reviews</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-destructive">✗</span>
                <span>Website visitors leave silently</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-destructive">✗</span>
                <span>Manual lead management</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-destructive/20 rounded-lg">
              <p className="font-bold text-destructive">Result: Losing $10k-50k/month</p>
            </div>
          </Card>
          
          <Card className="p-8 border-2 border-success/20 bg-success/5">
            <h3 className="text-3xl font-bold mb-8 text-success">✅ Smart (AI-Powered)</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Instant response to every call</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Immediate follow-up (under 60 seconds)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Automatic review requests</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Website chat captures every visitor</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>AI manages entire lead pipeline</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-success/20 rounded-lg">
              <p className="font-bold text-success">Result: Gaining $20k-100k/month</p>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 p-8 bg-primary/10 rounded-xl border-2 border-primary/20">
          <p className="text-3xl font-bold text-primary">
            The choice is simple: Automate or get left behind
          </p>
        </div>
      </div>
    </div>,

    // Slide 9: Plans + Guarantee
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-6xl">
        <h1 className="text-5xl font-bold text-foreground mb-16">
          Built For <span className="text-primary">Busy Businesses</span>
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-3xl font-bold mb-6 text-primary">$297/mo</div>
            <div className="space-y-3 text-left mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>AI receptionist & text-back</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Website chatbot</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Review automation</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Perfect for single-location businesses</p>
          </Card>
          
          <Card className="p-8 border-2 border-primary bg-primary/5 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="text-3xl font-bold mb-6 text-primary">$497/mo</div>
            <div className="space-y-3 text-left mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Everything in Starter</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>AI estimator</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Advanced analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Multiple locations</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Best for growing businesses</p>
          </Card>
          
          <Card className="p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4">Full Automation</h3>
            <div className="text-3xl font-bold mb-6 text-primary">$797/mo</div>
            <div className="space-y-3 text-left mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Everything in Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Custom AI training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>White-label solution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Dedicated support</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Enterprise-level automation</p>
          </Card>
        </div>
        
        <div className="mt-12 p-8 bg-success/10 rounded-xl border-2 border-success/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-success" />
            <h3 className="text-2xl font-bold text-success">30-Day Performance Guarantee</h3>
          </div>
          <p className="text-xl text-foreground">
            If you don't get 3+ booked calls or 5-star reviews in 30 days, we'll refund you completely.
          </p>
        </div>
      </div>
    </div>,

    // Slide 10: Final Slide
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background via-primary/5 to-success/5 p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl font-bold text-foreground mb-8">
          Your Competitors <span className="text-destructive">Aren't Waiting</span>
        </h1>
        <h2 className="text-4xl font-bold text-primary mb-12">
          Why Are You?
        </h2>
        
        <div className="mb-12">
          <p className="text-2xl text-muted-foreground mb-8">
            Every missed call could've been your next job.
          </p>
          
          <Card className="p-8 bg-primary/10 border-2 border-primary/20 mb-8">
            <p className="text-xl font-semibold text-foreground">
              While you're reading this, AI-powered businesses are booking jobs from leads you're missing.
            </p>
          </Card>
        </div>
        
        <Button size="lg" className="text-xl px-12 py-6 mb-12">
          Get Custom Quote
        </Button>
        
        <div className="flex justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-warning fill-current" />
            <span className="font-semibold">4.9★ Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-semibold">500+ Users</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-success" />
            <span className="font-semibold">24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {slides[currentSlide]}
      
      {/* Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full border border-border">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="sm"
          className="w-10 h-10 p-0"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <span className="text-sm font-medium text-muted-foreground">
          {currentSlide + 1} / {totalSlides}
        </span>
        
        <Button
          onClick={nextSlide}
          variant="outline"
          size="sm"
          className="w-10 h-10 p-0"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary scale-125'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
      
      {/* Instructions */}
      <div className="absolute top-6 right-6 text-sm text-muted-foreground bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
        Use arrow keys or click buttons to navigate
      </div>
    </div>
  );
};

export default SalesPresentation;