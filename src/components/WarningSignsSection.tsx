import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Eye, Heart, MessageCircle } from "lucide-react";

const WarningSignsSection = () => {
  const warningSignsCategories = [
    {
      title: "Behavioral Changes",
      icon: <Eye className="w-6 h-6" />,
      signs: [
        "Withdrawal from friends and family",
        "Loss of interest in activities they once enjoyed",
        "Significant changes in sleep or eating patterns",
        "Giving away prized possessions",
        "Increased substance use (if applicable)"
      ]
    },
    {
      title: "Emotional Indicators",
      icon: <Heart className="w-6 h-6" />,
      signs: [
        "Persistent sadness or hopelessness",
        "Intense anger or irritability",
        "Feeling overwhelmed or trapped",
        "Severe mood swings",
        "Feeling like a burden to others"
      ]
    },
    {
      title: "What They Might Say",
      icon: <MessageCircle className="w-6 h-6" />,
      signs: [
        "\"I wish I wasn't here\"",
        "\"Everyone would be better off without me\"",
        "\"I can't take this anymore\"",
        "\"I want the pain to stop\"",
        "Talking about death or dying"
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AlertTriangle className="w-16 h-16 text-care mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Warning Signs to Watch For
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognizing the signs can help save a life. If you notice these changes in yourself or someone you care about, 
              reach out for help immediately.
            </p>
          </div>

          <Alert className="mb-12 border-destructive/50 bg-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertDescription className="text-lg font-medium text-destructive">
              <strong>Important:</strong> If someone is in immediate danger, call emergency services (112) or take them to the nearest hospital emergency room.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-8">
            {warningSignsCategories.map((category, index) => (
              <Card key={index} className="p-8 bg-card hover:shadow-gentle transition-all duration-300">
                <div className="flex items-center mb-6 text-care">
                  {category.icon}
                  <h3 className="text-2xl font-bold ml-3">{category.title}</h3>
                </div>
                <ul className="space-y-4">
                  {category.signs.map((sign, signIndex) => (
                    <li key={signIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-care rounded-full mt-3 mr-3 flex-shrink-0" />
                      <span className="text-foreground leading-relaxed">{sign}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-hope/10 border-hope/30 p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-hope mb-4">Remember</h3>
              <p className="text-lg text-foreground leading-relaxed">
                These signs don't always mean someone is thinking about suicide, but they indicate that a person 
                may be struggling and could benefit from support and professional help. Trust your instincts and 
                reach out with compassion.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarningSignsSection;