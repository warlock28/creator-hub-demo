import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  HeroSection,
  CTASection,
} from "@/pages/home/HomeSections";
import { Services } from "@/pages/home/Services";
import { TopCreators } from "@/pages/home/TopCreators";
import { WomenCreatorsSection } from "@/pages/home/WomenCreators";
import { TestimonialsSection } from "@/pages/home/Testimonials";

const Index = () => {
  return (
    <PublicLayout>
      <div className="theme-home">
        <HeroSection />
        <Services />
        <TopCreators />
        <WomenCreatorsSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </PublicLayout>
  );
};

export default Index;

