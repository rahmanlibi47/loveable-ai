import { Card } from "@/components/ui/card";
import { TrendingUp, Megaphone, Users, Heart, Crown } from "lucide-react";

const StrategySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground font-medium font-encode mb-6">
            Our Strategy:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 text-center shadow-warm bg-icon-box hover:shadow-lg transition-shadow border-transparent">
            <TrendingUp className="w-12 h-12 text-foreground mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              Groundbreaking Research
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              & Insights
            </p>
          </Card>

          <Card className="p-6 text-center shadow-warm bg-icon-box hover:shadow-lg transition-shadow border-transparent">
            <Megaphone className="w-12 h-12 text-foreground mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              High-Profile Media
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              Campaigns
            </p>
          </Card>

          <Card className="p-6 text-center shadow-warm bg-icon-box hover:shadow-lg transition-shadow border-transparent">
            <Users className="w-12 h-12 text-foreground mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              Symposiums & Roundtables
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              Expert Panels
            </p>
          </Card>

          <Card className="p-6 text-center shadow-warm bg-icon-box hover:shadow-lg transition-shadow border-transparent">
            <Heart className="w-12 h-12 text-foreground mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              Lived Experience
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              Storytelling
            </p>
          </Card>

          <Card className="p-6 text-center shadow-warm bg-icon-box hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-2 border-transparent">
            <Crown className="w-12 h-12 text-foreground mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              Advocacy with Brand Ambassadors
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              Influential voices driving change
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;