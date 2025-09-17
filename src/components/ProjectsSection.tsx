import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Centro Comercial ModernPlaza",
      category: "Estrutural",
      location: "São Paulo, SP",
      year: "2024",
      description: "Projeto estrutural completo para centro comercial de 15.000m² com tecnologias sustentáveis.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy&auto=format",
      tags: ["Estrutural", "Comercial", "Sustentável"]
    },
    {
      id: 2,
      title: "Residencial Green Tower",
      category: "Civil",
      location: "Rio de Janeiro, RJ",
      year: "2023",
      description: "Complexo residencial com 200 unidades, certificação LEED e sistemas inteligentes.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=entropy&auto=format",
      tags: ["Civil", "Residencial", "LEED"]
    },
    {
      id: 3,
      title: "Ponte Urbana Integrada",
      category: "Infraestrutura",
      location: "Belo Horizonte, MG",
      year: "2023",
      description: "Ponte urbana de 500m integrando transporte público e mobilidade urbana sustentável.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=entropy&auto=format",
      tags: ["Infraestrutura", "Mobilidade", "Urbano"]
    },
    {
      id: 4,
      title: "Planta Industrial EcoTech",
      category: "Industrial",
      location: "Campinas, SP",
      year: "2022",
      description: "Projeto industrial completo com foco em eficiência energética e redução de impactos ambientais.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=entropy&auto=format",
      tags: ["Industrial", "Eficiência", "Ambiental"]
    }
  ];

  return (
    <section id="projetos" className="py-24 bg-engineering-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-engineering-yellow">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-engineering-light leading-relaxed max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos mais importantes e veja como transformamos 
            ideias em realidade através da engenharia de excelência.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-engineering-gray/10 rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-primary text-engineering-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-engineering-yellow transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center space-x-6 text-engineering-light mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>
                
                <p className="text-engineering-light leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-engineering-yellow/20 text-engineering-yellow px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-engineering-yellow text-engineering-yellow hover:bg-engineering-yellow hover:text-engineering-black transition-all duration-300"
                >
                  Ver Detalhes
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-engineering-black font-semibold hover:shadow-hover transition-all duration-300"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;