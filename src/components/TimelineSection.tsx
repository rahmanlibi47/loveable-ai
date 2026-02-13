import { Card } from "@/components/ui/card";
import { Calendar, Video, Users, Activity } from "lucide-react";

const TimelineSection = () => {
  const timelineEvents = [
    {
      id: 1,
      date: "10 Sept 2025",
      title: "World Suicide Prevention Day",
      description: "Virtual Inaugural Event with experts, researchers, and lived experience advocates.",
      icon: Video,
      position: "top"
    },
    {
      id: 2,
      date: "Apr 2025",
      title: "In-person Symposium",
      description: "Roundtable discussions to deepen engagement and produce academic outputs.",
      icon: Users,
      position: "top"
    },
    {
      id: 3,
      date: "Next 4–6 Months",
      title: "Continuous Campaigns",
      description: "Publications and events to keep the conversation alive and drive change.",
      icon: Activity,
      position: "top"
    }
  ];

  return (
    <section className="py-20 bg-[hsl(var(--timeline-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground font-medium font-encode mb-6">
            Launch Timeline
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute -top-8 left-0 right-0 h-1.5 bg-white z-10"></div>
            
            {/* Timeline Events */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                const isTop = event.position === "top";
                
                return (
                  <div key={event.id} className="relative flex flex-col items-center">
                    {/* Timeline Dot */}
                    <div className="w-6 h-6 bg-white rounded-full border-4 border-transparent shadow-lg z-30 -mt-11 mb-8"></div>
                    
                    {/* Event Card */}
                    <div className={`${event.id === 2 ? '-mt-[20px]' : ''}`}>
                      <Card className="p-6 bg-transparent border-transparent max-w-xs mx-auto">
                        <div className="text-center">
                          <IconComponent className="w-8 h-8 text-foreground mx-auto mb-3" />
                          <h3 className="text-lg font-bold text-foreground mb-2">
                            {event.date}
                          </h3>
                          <p className="text-2xl md:text-3xl font-bold text-white leading-[1.2] mb-2">
                            {event.title}
                          </p>
                          <p className="text-2xl md:text-3xl text-foreground font-medium font-encode leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;