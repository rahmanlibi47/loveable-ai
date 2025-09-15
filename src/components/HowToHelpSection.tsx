import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Ear, 
  UserCheck, 
  Shield, 
  MessageCircle, 
  HandHeart,
  Users,
  Phone
} from "lucide-react";

const HowToHelpSection = () => {
  const helpSteps = [
    {
      icon: <Ear className="w-8 h-8" />,
      title: "Listen Without Judgment",
      description: "Give them your full attention. Let them know you care and that they're not alone.",
      tips: [
        "Use phrases like 'I'm here for you'",
        "Avoid saying 'Everything will be fine'",
        "Don't try to solve everything immediately"
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Ask Direct Questions",
      description: "It's okay to ask if they're thinking about suicide. This won't put the idea in their head.",
      tips: [
        "'Are you thinking about hurting yourself?'",
        "'Are you having thoughts of suicide?'",
        "'Do you have a plan to end your life?'"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Keep Them Safe",
      description: "Help remove access to means of self-harm and don't leave them alone if they're in crisis.",
      tips: [
        "Remove harmful objects if possible",
        "Stay with them or arrange for someone else to",
        "Help them create a safety plan"
      ]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Connect Them to Help",
      description: "Help them contact professional support or call for them if they can't do it themselves.",
      tips: [
        "Offer to call a helpline together",
        "Help them make an appointment",
        "Go with them to get help if needed"
      ]
    }
  ];

  const supportActions = [
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "For Friends",
      description: "Notice changes, reach out regularly, and be patient with their healing process."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "For Parents",
      description: "Create open communication, remove judgment, and seek professional guidance."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "For Teachers",
      description: "Be alert to warning signs, provide emotional support, and connect families to resources."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "For Communities",
      description: "Reduce stigma, promote mental health awareness, and support local mental health programs."
    }
  ];

  return (
    <section className="py-20 bg-[var(--gradient-hope)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <HandHeart className="w-16 h-16 text-care mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to Help Someone
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your support can make a life-saving difference. Here's how you can help someone 
              who might be struggling with suicidal thoughts.
            </p>
          </div>

          {/* Step-by-step guide */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {helpSteps.map((step, index) => (
              <Card key={index} className="p-8 bg-card/90 backdrop-blur-sm hover:shadow-gentle transition-all duration-300">
                <div className="flex items-center mb-6 text-care">
                  <div className="bg-care/10 p-3 rounded-full mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">{step.description}</p>
                
                <div className="space-y-3">
                  {step.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-hope rounded-full mt-3 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Role-specific guidance */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Support by Role</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportActions.map((action, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-gentle transition-all duration-300">
                  <div className="text-hope mb-4">
                    {action.icon}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{action.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{action.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* What NOT to do */}
          <Card className="bg-destructive/10 border-destructive/30 p-8">
            <h3 className="text-2xl font-bold text-destructive mb-6 text-center">Things to Avoid</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-3">Don't Say:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• "Just think positive"</li>
                  <li>• "You have so much to live for"</li>
                  <li>• "Suicide is selfish"</li>
                  <li>• "Things could be worse"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-3">Don't:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Leave them alone in crisis</li>
                  <li>• Promise to keep suicide plans secret</li>
                  <li>• Minimize their problems</li>
                  <li>• Try to solve everything yourself</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button variant="care" size="lg" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Learn More About Supporting Others
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelpSection;