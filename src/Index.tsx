import AdvantagesSection from "./components/AdvantagesSection";
import CriteriaSection from "./components/CriteriaSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MultiStepForm from "./components/MultiStepForm";
import Navbar from "./components/Navbar";
import PropertiesSection from "./components/PropertiesSection";
import { Toaster } from "./components/ui/sonner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Toaster />
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
