import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Phone, Star, Globe, Clock, CheckCircle, TrendingUp, Users, Shield, AlertTriangle, DollarSign, Calendar, Smartphone, MessageSquare, Target } from 'lucide-react';

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
    <div key="slide1" className="flex flex-col items-center justify-center min-h-screen bg-gradient-hero p-8 text-center">
      <div className="max-w-5xl">
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Turn Missed Calls Into <span className="text-primary">Booked Jobs</span>
          <br />
          <span className="text-accent">— Automatically</span>
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-16 font-medium">
          AI system that captures leads 24/7, while you focus on your business
        </p>
        
        {/* AI Response Demo */}
        <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-glow max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center shadow-card">
              <Phone className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground font-medium">Missed Call</p>
              <p className="text-lg font-bold text-foreground">John's Roofing - 2:47 PM</p>
            </div>
          </div>
          
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-6">
            <p className="text-sm font-bold text-primary uppercase tracking-wide mb-2">AI Response (Instant)</p>
            <p className="text-lg text-foreground leading-relaxed">"Hi! I got your call about roofing work. I can schedule your free estimate - what day works best for you?"</p>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-success">
            <CheckCircle className="w-6 h-6" />
            <span className="text-xl font-bold">Job Booked in 3 minutes</span>
          </div>
        </div>
      </div>
    </div>,

    // Slide 2: Pain Point Breakdown
    <div key="slide2" className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-20">
          Why Businesses Are <span className="text-destructive">Losing Money</span> Every Week
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-10 border-2 border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5 shadow-strong hover:scale-105 transition-smooth">
            <div className="text-7xl mb-6">📞</div>
            <h3 className="text-5xl font-bold text-destructive mb-6">78%</h3>
            <p className="text-xl font-bold mb-4 text-foreground">of customers choose the first business to respond</p>
            <p className="text-muted-foreground text-lg">Every missed call is money walking to your competitor</p>
          </Card>
          
          <Card className="p-10 border-2 border-warning/30 bg-gradient-to-br from-warning/10 to-warning/5 shadow-strong hover:scale-105 transition-smooth">
            <div className="text-7xl mb-6">⭐</div>
            <h3 className="text-5xl font-bold text-warning mb-6">92%</h3>
            <p className="text-xl font-bold mb-4 text-foreground">don't leave a Google review unless you ask</p>
            <p className="text-muted-foreground text-lg">Missing reviews = invisible to new customers</p>
          </Card>
          
          <Card className="p-10 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 shadow-strong hover:scale-105 transition-smooth">
            <div className="text-7xl mb-6">🌐</div>
            <h3 className="text-5xl font-bold text-primary mb-6">97%</h3>
            <p className="text-xl font-bold mb-4 text-foreground">of website visitors leave without converting</p>
            <p className="text-muted-foreground text-lg">No follow-up = no customers</p>
          </Card>
        </div>
        
        <div className="p-8 bg-gradient-to-r from-destructive/20 to-destructive/10 rounded-2xl border-2 border-destructive/30 shadow-strong">
          <p className="text-2xl md:text-3xl font-bold text-destructive">
            The cost of doing nothing: Competitors are booking YOUR customers
          </p>
        </div>
      </div>
    </div>,

    // Slide 3: Real-Time Example
    <div key="slide3" className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-16">
          Watch a <span className="text-primary">Missed Call</span> Turn Into a <span className="text-success">Booked Job</span>
        </h1>
        
        {/* Timeline */}
        <div className="flex items-center justify-between mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-destructive to-destructive/80 rounded-full flex items-center justify-center shadow-glow mb-4">
              <Phone className="w-10 h-10 text-destructive-foreground" />
            </div>
            <p className="text-xl font-bold text-destructive">Missed Call</p>
            <p className="text-muted-foreground font-medium">2:47 PM</p>
          </div>
          
          <div className="text-4xl text-primary">→</div>
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-glow mb-4">
              <Clock className="w-10 h-10 text-primary-foreground" />
            </div>
            <p className="text-xl font-bold text-primary">AI Response</p>
            <p className="text-muted-foreground font-medium">2:47 PM (Instant)</p>
          </div>
          
          <div className="text-4xl text-success">→</div>
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center shadow-glow mb-4">
              <CheckCircle className="w-10 h-10 text-success-foreground" />
            </div>
            <p className="text-xl font-bold text-success">Job Booked</p>
            <p className="text-muted-foreground font-medium">2:52 PM</p>
          </div>
        </div>
        
        {/* Message Exchange */}
        <Card className="p-8 bg-card/90 backdrop-blur-sm border border-border/50 shadow-strong max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-muted/50 border border-muted rounded-2xl p-6 text-left">
              <p className="font-bold text-foreground mb-2">Customer Text:</p>
              <p className="text-lg text-muted-foreground">"Hey, I called about roof repair but no one answered"</p>
            </div>
            
            <div className="bg-gradient-accent border border-primary/30 rounded-2xl p-6 text-left">
              <p className="font-bold text-primary-foreground mb-2">AI Response:</p>
              <p className="text-lg text-primary-foreground">"Hi! Sorry I missed your call. I'm available to schedule your free roof inspection. What day works best - tomorrow or Friday?"</p>
            </div>
            
            <div className="bg-muted/50 border border-muted rounded-2xl p-6 text-left">
              <p className="font-bold text-foreground mb-2">Customer:</p>
              <p className="text-lg text-muted-foreground">"Friday afternoon works"</p>
            </div>
            
            <div className="bg-gradient-success border border-success/30 rounded-2xl p-6 text-left">
              <p className="font-bold text-success-foreground mb-2">✅ Appointment Booked:</p>
              <p className="text-lg text-success-foreground">Friday 2:00 PM - Roof Inspection</p>
            </div>
          </div>
        </Card>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-success/20 to-success/10 rounded-2xl border border-success/30">
          <p className="text-3xl font-bold text-success">Total Time: 5 minutes. Result: $3,500 job booked.</p>
        </div>
      </div>
    </div>,

    // Slide 4: Common Revenue Leaks
    <div key="slide4" className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-20">
          Are These <span className="text-destructive">Costing You Customers?</span>
        </h1>
        
        <div className="space-y-8">
          <Card className="p-8 border-2 border-destructive/30 bg-gradient-to-r from-destructive/15 to-destructive/5 shadow-strong">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl md:text-3xl font-bold text-destructive">How many calls do you miss every week?</h3>
            </div>
            <p className="text-xl text-muted-foreground">Even 5 missed calls = $10,000+ in lost revenue</p>
          </Card>
          
          <Card className="p-8 border-2 border-warning/30 bg-gradient-to-r from-warning/15 to-warning/5 shadow-strong">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-warning" />
              <h3 className="text-2xl md:text-3xl font-bold text-warning">Are customers bouncing off your website with no response?</h3>
            </div>
            <p className="text-xl text-muted-foreground">No chat = no engagement = no bookings</p>
          </Card>
          
          <Card className="p-8 border-2 border-destructive/30 bg-gradient-to-r from-destructive/15 to-destructive/5 shadow-strong">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl md:text-3xl font-bold text-destructive">Are you following up on every lead and review?</h3>
            </div>
            <p className="text-xl text-muted-foreground">Manual follow-up = human error = lost opportunities</p>
          </Card>
        </div>
        
        <div className="mt-16 p-8 bg-gradient-accent rounded-2xl border-2 border-primary/30 shadow-glow">
          <p className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Every "YES" above is costing you thousands per month
          </p>
          <p className="text-xl text-primary-foreground/80">
            While your competitors capture leads 24/7 with AI
          </p>
        </div>
      </div>
    </div>,

    // Slide 5: What You Get
    <div key="slide5" className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-20">
          Smart Automation That Works <span className="text-primary">While You Don't</span>
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 shadow-strong hover:scale-105 transition-smooth">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">AI Receptionist & Text-Back</h3>
            <p className="text-muted-foreground">Responds to missed calls instantly via text</p>
          </Card>
          
          <Card className="p-8 border-2 border-success/30 bg-gradient-to-br from-success/10 to-success/5 shadow-strong hover:scale-105 transition-smooth">
            <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <MessageSquare className="w-8 h-8 text-success-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-success">Website & IG/Facebook Chatbot</h3>
            <p className="text-muted-foreground">Captures leads from your website 24/7</p>
          </Card>
          
          <Card className="p-8 border-2 border-warning/30 bg-gradient-to-br from-warning/10 to-warning/5 shadow-strong hover:scale-105 transition-smooth">
            <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Star className="w-8 h-8 text-warning-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-warning">Google Review Automation</h3>
            <p className="text-muted-foreground">Automatically requests and manages Google reviews</p>
          </Card>
          
          <Card className="p-8 border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 shadow-strong hover:scale-105 transition-smooth">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Target className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-accent">AI Estimator</h3>
            <p className="text-muted-foreground">Provides instant quotes (optional add-on)</p>
          </Card>
        </div>
        
        <div className="mt-16 p-8 bg-gradient-success rounded-2xl border-2 border-success/30 shadow-glow">
          <p className="text-3xl font-bold text-success-foreground">
            ✅ Never miss another customer again
          </p>
        </div>
      </div>
    </div>,

    // Slide 6: ROI Calculator
    <div key="slide6" className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-20">
          Stop Leaving <span className="text-success">Money</span> On The Table
        </h1>
        
        <Card className="p-12 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-success/10 shadow-strong">
          <div className="flex items-center justify-center gap-4 mb-12">
            <DollarSign className="w-12 h-12 text-success" />
            <h2 className="text-4xl font-bold text-foreground">Quick ROI Calculator</h2>
          </div>
          
          <div className="space-y-8 text-left max-w-2xl mx-auto">
            <div className="flex justify-between items-center text-2xl border-b border-border pb-4">
              <span className="font-medium">Missed Calls per Week:</span>
              <span className="font-bold text-destructive text-3xl">5 calls</span>
            </div>
            
            <div className="text-center text-4xl font-bold text-muted-foreground">×</div>
            
            <div className="flex justify-between items-center text-2xl border-b border-border pb-4">
              <span className="font-medium">Average Job Value:</span>
              <span className="font-bold text-primary text-3xl">$2,000</span>
            </div>
            
            <div className="text-center text-4xl font-bold text-muted-foreground">×</div>
            
            <div className="flex justify-between items-center text-2xl border-b border-border pb-4">
              <span className="font-medium">Close Rate:</span>
              <span className="font-bold text-warning text-3xl">50%</span>
            </div>
            
            <div className="border-t-4 border-destructive pt-6">
              <div className="flex justify-between items-center text-3xl font-bold">
                <span>Lost Revenue per Month:</span>
                <span className="text-destructive text-5xl">$20,000</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-gradient-success rounded-2xl border-2 border-success/30 shadow-glow">
            <p className="text-2xl md:text-3xl font-bold text-success-foreground text-center">
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
    <div key="slide7" className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-20">
          Simple Setup, <span className="text-success">Big Results</span>
        </h1>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="relative">
            <Card className="p-10 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 shadow-strong">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
                <span className="text-3xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Same-Day Setup</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">We connect to your phone, website, and Google Business in under 24 hours</p>
            </Card>
            <div className="hidden md:block absolute top-1/2 -right-6 text-5xl text-primary transform -translate-y-1/2">→</div>
          </div>
          
          <div className="relative">
            <Card className="p-10 border-2 border-success/30 bg-gradient-to-br from-success/10 to-success/5 shadow-strong">
              <div className="w-20 h-20 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
                <span className="text-3xl font-bold text-success-foreground">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-success">AI Takes Over</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Responds instantly 24/7 to missed calls, website visitors, and review requests</p>
            </Card>
            <div className="hidden md:block absolute top-1/2 -right-6 text-5xl text-success transform -translate-y-1/2">→</div>
          </div>
          
          <Card className="p-10 border-2 border-warning/30 bg-gradient-to-br from-warning/10 to-warning/5 shadow-strong">
            <div className="w-20 h-20 bg-warning rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
              <span className="text-3xl font-bold text-warning-foreground">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-warning">Jobs Roll In</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Calendar booked, reviews collected, leads converted while you focus on work</p>
          </Card>
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/20 to-success/20 rounded-2xl border-2 border-primary/30 shadow-glow">
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Most customers see results within 48 hours
          </p>
          <p className="text-xl text-muted-foreground">
            Setup once, profit forever
          </p>
        </div>
      </div>
    </div>,

    // Slide 8: Old Way vs Smart Way
    <div key="slide8" className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-20">
          Why <span className="text-primary">Modern Businesses</span> Are Winning
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-10 border-2 border-destructive/30 bg-gradient-to-br from-destructive/15 to-destructive/5 shadow-strong">
            <h3 className="text-3xl font-bold mb-10 text-destructive flex items-center justify-center gap-3">
              <span className="text-4xl">❌</span> Traditional Way
            </h3>
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4">
                <span className="text-destructive text-2xl">✗</span>
                <span className="text-lg">Miss calls during busy times</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-destructive text-2xl">✗</span>
                <span className="text-lg">Slow follow-up on leads</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-destructive text-2xl">✗</span>
                <span className="text-lg">No reviews collected</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-destructive text-2xl">✗</span>
                <span className="text-lg">Website visitors leave</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-destructive text-2xl">✗</span>
                <span className="text-lg">Manual processes everywhere</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-10 border-2 border-success/30 bg-gradient-to-br from-success/15 to-success/5 shadow-strong">
            <h3 className="text-3xl font-bold mb-10 text-success flex items-center justify-center gap-3">
              <span className="text-4xl">✅</span> Smart (AI-Powered)
            </h3>
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4">
                <span className="text-success text-2xl">✓</span>
                <span className="text-lg">Instant response 24/7</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-success text-2xl">✓</span>
                <span className="text-lg">Jobs booked automatically</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-success text-2xl">✓</span>
                <span className="text-lg">Auto review collection</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-success text-2xl">✓</span>
                <span className="text-lg">Website chat captures leads</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-success text-2xl">✓</span>
                <span className="text-lg">Fully automated systems</span>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/20 to-success/20 rounded-2xl border-2 border-primary/30 shadow-glow">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Smart businesses grow 3x faster with AI automation
          </p>
        </div>
      </div>
    </div>,

    // Slide 9: Plans + Guarantee
    <div key="slide9" className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-20">
          Built For <span className="text-primary">Busy Businesses</span>
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 border-2 border-border bg-card shadow-card hover:scale-105 transition-smooth">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Starter</h3>
            <div className="text-4xl font-bold text-primary mb-6">$197<span className="text-lg text-muted-foreground">/mo</span></div>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>AI Text-Back</span></li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>Website Chat</span></li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>Review Requests</span></li>
            </ul>
          </Card>
          
          <Card className="p-8 border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 shadow-glow transform scale-105">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">MOST POPULAR</div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Pro</h3>
            <div className="text-4xl font-bold text-primary mb-6">$297<span className="text-lg text-muted-foreground">/mo</span></div>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>Everything in Starter</span></li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>Social Media Chat</span></li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>Calendar Booking</span></li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>Lead Scoring</span></li>
            </ul>
          </Card>
          
          <Card className="p-8 border-2 border-border bg-card shadow-card hover:scale-105 transition-smooth">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Full Automation</h3>
            <div className="text-4xl font-bold text-success mb-6">$497<span className="text-lg text-muted-foreground">/mo</span></div>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>Everything in Pro</span></li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>AI Estimator</span></li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>CRM Integration</span></li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-success" /><span>Custom AI Training</span></li>
            </ul>
          </Card>
        </div>
        
        <div className="p-8 bg-gradient-to-r from-success/20 to-success/10 rounded-2xl border-2 border-success/30 shadow-glow">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Shield className="w-8 h-8 text-success" />
            <h3 className="text-2xl font-bold text-success">30-Day Performance Guarantee</h3>
          </div>
          <p className="text-xl text-foreground">
            If you don't get 3+ booked calls or 5-star reviews, we'll refund you.
          </p>
        </div>
      </div>
    </div>,

    // Slide 10: Final Slide
    <div key="slide10" className="flex flex-col items-center justify-center min-h-screen bg-gradient-hero p-8 text-center">
      <div className="max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
          Your Competitors Aren't Waiting — <span className="text-destructive">Why Are You?</span>
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-16 font-medium">
          Every missed call could've been your next job.
        </p>
        
        <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl p-12 shadow-glow max-w-3xl mx-auto mb-16">
          <Button className="bg-gradient-accent hover:scale-105 transition-smooth text-primary-foreground font-bold text-2xl px-12 py-6 rounded-2xl shadow-glow mb-8">
            Get Custom Quote
          </Button>
          
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-warning fill-warning" />
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
        
        <p className="text-xl text-muted-foreground">
          Join the smart businesses already capturing leads with AI
        </p>
      </div>
    </div>
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Slide Content */}
      <div className="w-full h-full">
        {slides[currentSlide]}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 shadow-strong">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="hover:bg-primary/10"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <span className="text-sm font-medium text-muted-foreground">
          {currentSlide + 1} / {totalSlides}
        </span>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="hover:bg-primary/10"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              i === currentSlide 
                ? 'bg-primary shadow-glow' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Keyboard Instructions */}
      <div className="absolute top-8 right-8 text-sm text-muted-foreground bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2">
        Use ← → or Space to navigate
      </div>
    </div>
  );
};

export default SalesPresentation;