import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModalidadesSection from "@/components/ModalidadesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ModalidadesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
