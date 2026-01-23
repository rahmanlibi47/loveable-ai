import { Card } from "@/components/ui/card";
import { Target, Users, Building } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          {/* Mission Statement Card */}
          <Card className="bg-background p-8 mb-12 border-transparent overflow-hidden shadow-none">
            <p className="text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">
              Our Mission is to reduce suicides among under-18s in India from 10,000 to ZERO.
            </p>
          </Card>

          <p className="text-3xl md:text-4xl text-foreground font-medium font-encode leading-relaxed">
            10K to ZERO is a collaborative effort by the <a href="https://cmhlp.org/" target="_blank" rel="noopener noreferrer" className="underline">Centre for Mental Health Law & Policy (CMHLP)</a>,
            <a href="https://ilslaw.edu/" target="_blank" rel="noopener noreferrer" className="underline"> Indian Law Society (ILS)</a>, and <a href="https://2025.quicksand.co.in/" target="_blank" rel="noopener noreferrer" className="underline">Quicksand</a>. Together, we are building a movement to protect
            young lives through research, interventions, and advocacy. <a href="https://drive.google.com/file/d/1lsrAzOtBIINgzCUpQbvb6Od3sr1EGXfb/view" target="_blank" rel="noopener noreferrer" className="underline">Read Concept Note</a>, <a href="https://drive.google.com/file/d/1oGPG5TxtKO0DM7ER2_xV7W3a4a881Ojv/view" target="_blank" rel="noopener noreferrer" className="underline">See Pitch Deck</a>, <a href="https://drive.google.com/file/d/1wmEd-kdZaoLzTv3YWTAosjC3d7CqX_nI/view" target="_blank" rel="noopener noreferrer" className="underline">See Brochure.</a>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a
              href="https://drive.google.com/file/d/118Sz6WqUkcerPIcrzLDfCqrGgeXDRdDp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-8 rounded-lg flex flex-col items-center justify-start w-full sm:w-[720px] hover:bg-gray-50 transition-colors duration-300 gap-2 border border-gray-200"
            >
              <img
                src="/lovable-uploads/4927c560-4f60-492b-bf29-90f1bf8b17aa.png"
                alt="Policy Brief Document"
                className="w-[700px] object-contain mt-[10px]"
              />
              <span className="text-4xl md:text-5xl font-bold text-center leading-[1.2] text-black">Read Policy Brief</span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a
              href="https://sciencechronicle.in/2025/09/06/why-more-children-in-india-are-dying-by-suicide-a-deeper-look/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-8 rounded-lg flex flex-col items-center justify-start w-full sm:w-[720px] hover:bg-gray-50 transition-colors duration-300 gap-2 border border-gray-200"
            >

              <span className="text-4xl md:text-5xl font-bold text-center leading-[1.2] text-black">Why More Children in India are Dying by Suicide: A Deeper Look
              </span> <br /> <span className="text-2xl md:text-2xl font-bold text-center leading-[1.2] text-black">2025 Article in the Science Chronicle by Ramya Pillutla, Shubhda Sharma, Soumitra Pathare, Avinash Kumar.
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;