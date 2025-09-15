import { Building2, Zap, Cog, Home, Factory, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ModalidadesSection = () => {
  const modalidades = [
    {
      icon: Building2,
      title: "Engenharia Civil",
      description: "Projetos estruturais, fundações e obras civis de grande porte com excelência técnica e segurança.",
      features: ["Estruturas", "Fundações", "Obras Públicas", "Consultorias"]
    },
    {
      icon: Zap,
      title: "Engenharia Elétrica", 
      description: "Sistemas elétricos industriais e prediais, automação e energia renovável para máxima eficiência.",
      features: ["Instalações", "Automação", "Energia Solar", "Manutenção"]
    },
    {
      icon: Cog,
      title: "Engenharia Mecânica",
      description: "Desenvolvimento de sistemas mecânicos, manutenção industrial e otimização de processos.",
      features: ["Sistemas", "Manutenção", "Caldeiras", "Projetos"]
    },
    {
      icon: Home,
      title: "Engenharia Predial",
      description: "Projetos residenciais e comerciais completos com foco em sustentabilidade e conforto.",
      features: ["Residencial", "Comercial", "Sustentável", "Climatização"]
    },
    {
      icon: Factory,
      title: "Engenharia Industrial", 
      description: "Otimização de processos produtivos, layout industrial e gestão da qualidade.",
      features: ["Processos", "Qualidade", "Layout", "Produção"]
    },
    {
      icon: Truck,
      title: "Engenharia de Infraestrutura",
      description: "Obras de infraestrutura urbana, saneamento, rodovias e sistemas de transporte.",
      features: ["Rodovias", "Saneamento", "Pontes", "Urbanismo"]
    }
  ];

  return (
    <section id="modalidades" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-engineering-yellow/10 border border-engineering-yellow/20 mb-6">
            <span className="text-engineering-yellow text-sm font-medium">
              Nossas Especialidades
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-engineering-black mb-6">
            Modalidades de 
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Engenharia
            </span>
          </h2>
          <p className="text-lg text-engineering-gray max-w-2xl mx-auto leading-relaxed">
            Oferecemos soluções completas em diversas áreas da engenharia, 
            sempre com qualidade técnica e inovação tecnológica.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalidades.map((modalidade, index) => {
            const Icon = modalidade.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 border-border hover:border-engineering-yellow/30 bg-card hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-engineering-black" />
                  </div>
                  <CardTitle className="text-xl font-bold text-engineering-black group-hover:text-engineering-yellow transition-colors duration-300">
                    {modalidade.title}
                  </CardTitle>
                  <CardDescription className="text-engineering-gray leading-relaxed">
                    {modalidade.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {modalidade.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-sm text-engineering-gray"
                      >
                        <div className="w-2 h-2 bg-engineering-yellow rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-engineering-gray mb-6">
            Precisa de uma solução específica? Nossa equipe está pronta para ajudar.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-primary text-engineering-black font-semibold rounded-lg hover:shadow-hover transition-all duration-300 cursor-pointer">
            Fale com Nossos Especialistas
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalidadesSection;