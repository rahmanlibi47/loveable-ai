import { Card } from "@/components/ui/card";
import { Droplets, BookOpen, Wrench, FileText } from "lucide-react";

const ApproachSection = () => {
  return (
    <section className="py-5" bg-background>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          {/* Approach Statement Card */}
          <Card className="bg-background p-8 mb-6 border-transparent">
            <p className="text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">
              Our Approach is to create a high-visibility hub that attracts organisations, funders, and governments to collaborate.
            </p>
          </Card>
          <h3 className="text-3xl md:text-4xl text-foreground mb-8 font-medium font-encode">
            Key pillars of action:
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 shadow-warm bg-icon-box border-transparent">
            <BookOpen className="w-12 h-12 text-foreground mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              Research & Knowledge
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              Data, research papers, policy briefs, and capacity-building for suicide prevention research.
            </p>
          </Card>

          <Card className="p-8 shadow-warm bg-icon-box border-transparent">
            <Wrench className="w-12 h-12 text-foreground mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              Interventions & Tools
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              Gatekeeper trainings in 22 Indian languages, parenting skill games, and youth-friendly mental health resources.
            </p>
          </Card>

          <Card className="p-8 shadow-warm bg-icon-box border-transparent">
            <FileText className="w-12 h-12 text-foreground mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              Policy & Advocacy
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              Evidence-based recommendations to influence policy at every level.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;