import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ApproachSection from "@/components/ApproachSection";
import StrategySection from "@/components/StrategySection";
import TimelineSection from "@/components/TimelineSection";
import ExpertPanelSection from "@/components/ExpertPanelSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <ApproachSection />
      <StrategySection />
      <TimelineSection />
      <ExpertPanelSection />
      <JoinSection />
      <Footer />
    </main>
  );
};

export default Index;
