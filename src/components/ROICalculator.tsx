import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, DollarSign, TrendingUp } from "lucide-react";

export const ROICalculator = () => {
  const [callsPerWeek, setCallsPerWeek] = useState("");
  const [avgJobValue, setAvgJobValue] = useState("");
  const [closeRate, setCloseRate] = useState("");
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    if (!callsPerWeek || !avgJobValue || !closeRate) return;
    
    const weeklyMissedCalls = parseInt(callsPerWeek);
    const jobValue = parseFloat(avgJobValue);
    const closeRateDecimal = parseFloat(closeRate) / 100;
    
    const weeklyLostRevenue = weeklyMissedCalls * jobValue * closeRateDecimal;
    const monthlyLostRevenue = weeklyLostRevenue * 4;
    const yearlyLostRevenue = monthlyLostRevenue * 12;
    
    return {
      weekly: weeklyLostRevenue,
      monthly: monthlyLostRevenue,
      yearly: yearlyLostRevenue
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = calculateROI();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Stop Leaving Money On The Table
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See exactly how much revenue you're missing from calls that go unanswered. 
              Most contractors are shocked by the numbers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-primary" />
                  ROI Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="calls">How many calls do you miss per week?</Label>
                  <Input
                    id="calls"
                    type="number"
                    placeholder="e.g., 15"
                    value={callsPerWeek}
                    onChange={(e) => setCallsPerWeek(e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="jobValue">Average job value ($)</Label>
                  <Input
                    id="jobValue"
                    type="number"
                    placeholder="e.g., 3500"
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="closeRate">Close rate (%)</Label>
                  <Input
                    id="closeRate"
                    type="number"
                    placeholder="e.g., 25"
                    value={closeRate}
                    onChange={(e) => setCloseRate(e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  onClick={handleCalculate}
                  className="w-full bg-primary hover:bg-primary-dark"
                  disabled={!callsPerWeek || !avgJobValue || !closeRate}
                >
                  Calculate Lost Revenue
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-success" />
                  Your Lost Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showResults && results ? (
                  <div className="space-y-6">
                    <div className="bg-destructive/10 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-destructive" />
                        <h4 className="font-semibold text-destructive">Money Left on the Table</h4>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">Weekly: <span className="font-bold">${results.weekly.toLocaleString()}</span></p>
                        <p className="text-sm">Monthly: <span className="font-bold">${results.monthly.toLocaleString()}</span></p>
                        <p className="text-lg font-bold text-destructive">Yearly: ${results.yearly.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="bg-success/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-success mb-2">With OptimaxAI</h4>
                      <p className="text-sm text-muted-foreground">
                        Our AI captures and converts missed calls 24/7, helping you recover up to 80% of this lost revenue.
                      </p>
                    </div>
                    
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Get Your AI System Now
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Fill out the form to see your potential lost revenue
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};