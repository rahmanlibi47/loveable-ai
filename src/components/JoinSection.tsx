import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HandHeart, Mail, Users, DollarSign, Megaphone } from "lucide-react";

const JoinSection = () => {
  return (
    <section className="py-20 bg-[var(--gradient-warm)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <Card className="bg-background p-6 mb-12 border-transparent">
            <p className="text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">
              Together, we can create a future where no child sees suicide as their only option.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center shadow-warm bg-icon-box hover:shadow-lg transition-shadow border-transparent">
            <Users className="w-12 h-12 text-foreground mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              Collaborate
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              Partner with us to develop interventions and research
            </p>
          </Card>

          <Card className="p-6 text-center shadow-warm bg-icon-box hover:shadow-lg transition-shadow border-transparent">
            <img src="/lovable-uploads/a384ac21-aa38-410c-af55-13d49f589e6b.png" alt="Rupee symbol" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              Fund
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              Support our mission with resources and funding
            </p>
          </Card>

          <Card className="p-6 text-center shadow-warm bg-icon-box hover:shadow-lg transition-shadow border-transparent">
            <Megaphone className="w-12 h-12 text-foreground mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.2] mb-4">
              Advocate
            </h3>
            <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
              Amplify our message and drive policy change
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-background p-6 border-transparent">
            <p className="text-4xl md:text-5xl font-bold text-white leading-[1.2]">
              <a href="https://forms.gle/s9i2FhYiJLBP6JCn6" target="_blank" rel="noopener noreferrer" className="underline">
                Join the Movement. Sign up for Updates.
              </a>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;