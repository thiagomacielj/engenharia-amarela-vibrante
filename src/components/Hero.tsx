import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/engineering-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Engenharia e Construção" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-engineering-black/80 via-engineering-black/60 to-engineering-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-engineering-yellow/10 border border-engineering-yellow/20 backdrop-blur-sm mb-8">
            <span className="text-engineering-yellow text-sm font-medium">
              ✨ Líder em Soluções de Engenharia
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Engenharia de
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-4">
              Excelência
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transformamos ideias em realidade através de soluções inovadoras em engenharia. 
            Projetos de qualidade, execução perfeita e resultados que superam expectativas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-engineering-black font-semibold px-8 py-4 hover:shadow-hover transition-all duration-300 group"
            >
              Conheça Nossos Projetos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-engineering-yellow text-engineering-yellow hover:bg-engineering-yellow hover:text-engineering-black px-8 py-4 backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Ver Apresentação
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "500+", label: "Projetos Entregues" },
              { number: "15+", label: "Anos de Experiência" },
              { number: "98%", label: "Satisfação do Cliente" },
              { number: "24/7", label: "Suporte Técnico" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-engineering-yellow mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-engineering-yellow/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-engineering-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;