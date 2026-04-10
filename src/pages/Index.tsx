import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CriteriaSection from "@/components/CriteriaSection";
import PropertiesSection from "@/components/PropertiesSection";
import MultiStepForm from "@/components/MultiStepForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AdvantagesSection />
      <CriteriaSection />
      <PropertiesSection />
      <MultiStepForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
