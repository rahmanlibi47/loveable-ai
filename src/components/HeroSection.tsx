import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingDown, Heart, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/hero-support.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center relative">
          
          <img 
            src="/lovable-uploads/79452741-26cb-4f47-8444-29dbeb9950ff.png" 
            alt="10K to ZERO" 
            className="mx-auto mb-2 mt-16 w-full h-auto"
          />

          {/* Crisis Statistics Card */}
          <Card className="bg-background p-8 mb-12 border-transparent overflow-hidden shadow-none">
            <div className="whitespace-nowrap animate-[ticker-continuous_20s_linear_infinite]">
              <p className="text-4xl md:text-5xl font-bold text-white leading-[1.2] inline-block">
                Every year, over 10,000 children and adolescents in India die by suicide. We believe suicides are preventable, and we're acting now. • Every year, over 10,000 children and adolescents in India die by suicide. We believe suicides are preventable, and we're acting now.
              </p>
            </div>
          </Card>

          {/* Rest of the content outside the yellow box */}
          <div className="text-lg text-foreground/80 mb-6 leading-relaxed max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl text-foreground mb-4 font-medium font-encode">
              In 2022, India recorded its highest suicide numbers ever. The most vulnerable are those under 18, facing:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 mb-8">
            <div className="bg-white p-8 rounded-full flex items-center justify-center w-[200px] h-[200px] mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-black text-center leading-[1.2]">Family and social pressures</p>
            </div>
            <div className="bg-white p-8 rounded-full flex items-center justify-center w-[200px] h-[200px] mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-black text-center leading-[1.2]">Academic stress</p>
            </div>
            <div className="bg-white p-8 rounded-full flex items-center justify-center w-[200px] h-[200px] mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-black text-center leading-[1.2]">Rapid physiological changes</p>
            </div>
            <div className="bg-white p-8 rounded-full flex items-center justify-center w-[200px] h-[200px] mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-black text-center leading-[1.2]">Unhealthy social media exposure</p>
            </div>
          </div>

          <div className="text-foreground/80 mb-6 max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl text-foreground mt-16 mb-8 font-medium font-encode">
              The National Crime Records Bureau lists family problems as the leading cause, but the truth is more complex — suicide is the result of overlapping social, emotional, and environmental challenges.
            </p>
            <p className="text-3xl md:text-4xl text-foreground mb-4 font-medium font-encode">
              The National Suicide Prevention Strategy (2022) calls for stress-free development for children and training educators to equip students with life skills.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;