import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageSquare, 
  Globe, 
  Users, 
  BookOpen, 
  Heart,
  MapPin,
  Clock
} from "lucide-react";

const ResourcesSection = () => {
  const helplines = [
    {
      name: "iCall Psychosocial Helpline",
      number: "1800-599-0019",
      description: "Free counseling service by Tata Institute of Social Sciences",
      availability: "Monday to Saturday, 8 AM - 10 PM",
      languages: "English, Hindi, Tamil, Marathi"
    },
    {
      name: "AASRA Mumbai",
      number: "9152987821",
      description: "24-hour crisis helpline",
      availability: "24/7",
      languages: "English, Hindi"
    },
    {
      name: "Vandrevala Foundation",
      number: "9999666555",
      description: "Mental health helpline",
      availability: "24/7",
      languages: "English, Hindi, Tamil, Telugu"
    },
    {
      name: "Sneha Chennai",
      number: "044-24640050",
      description: "Emotional support helpline",
      availability: "24/7",
      languages: "English, Tamil, Telugu, Hindi"
    }
  ];

  const onlineResources = [
    {
      title: "YourDOST",
      description: "Online counseling and mental health support",
      icon: <MessageSquare className="w-8 h-8" />,
      url: "https://yourdost.com"
    },
    {
      title: "Mindpiper",
      description: "Mental health resources and counseling",
      icon: <Globe className="w-8 h-8" />,
      url: "https://mindpiper.com"
    },
    {
      title: "Mental Health India",
      description: "Resources and helpline directory",
      icon: <BookOpen className="w-8 h-8" />,
      url: "https://mentalhealthindia.net"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-hope mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Support Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help is available across India. These resources provide free, confidential support 
              when you need it most.
            </p>
          </div>

          {/* Crisis Helplines */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Crisis Helplines</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {helplines.map((helpline, index) => (
                <Card key={index} className="p-6 hover:shadow-gentle transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-destructive mr-3" />
                      <h4 className="text-xl font-bold text-foreground">{helpline.name}</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-destructive">{helpline.number}</span>
                    </div>
                    
                    <p className="text-muted-foreground">{helpline.description}</p>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {helpline.availability}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Globe className="w-4 h-4 mr-2" />
                      {helpline.languages}
                    </div>
                  </div>
                  
                  <Button variant="destructive" className="w-full mt-4">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Online Resources */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Online Support</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {onlineResources.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-gentle transition-all duration-300 text-center">
                  <div className="text-trust mb-4">
                    {resource.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{resource.title}</h4>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="trust" className="w-full">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Emergency Information */}
          <Card className="bg-destructive/10 border-destructive/30 p-8 text-center">
            <MapPin className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-destructive mb-4">Emergency Situation?</h3>
            <p className="text-lg text-foreground mb-6">
              If someone is in immediate danger of harming themselves:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="crisis" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call 112 (Emergency)
              </Button>
              <Button variant="crisis" size="lg">
                <MapPin className="w-5 h-5 mr-2" />
                Go to Nearest Hospital
              </Button>
              <Button variant="crisis" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Stay With Them
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;