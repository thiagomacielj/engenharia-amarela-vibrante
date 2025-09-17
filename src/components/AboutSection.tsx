import { Users, Award, Calendar, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Calendar, value: "15+", label: "Anos de Experiência" },
    { icon: Users, value: "200+", label: "Projetos Concluídos" },
    { icon: Award, value: "50+", label: "Clientes Satisfeitos" },
    { icon: Target, value: "100%", label: "Comprometimento" },
  ];

  return (
    <section id="sobre" className="py-24 bg-engineering-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-engineering-black mb-6">
              Sobre a <span className="text-engineering-yellow">EngPro</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-engineering-gray leading-relaxed max-w-3xl mx-auto">
              Somos uma empresa de engenharia dedicada à excelência, inovação e qualidade. 
              Com mais de 15 anos de experiência, oferecemos soluções completas para seus projetos.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-engineering-black mb-6">
                Nossa Missão
              </h3>
              <p className="text-engineering-gray leading-relaxed mb-6">
                Transformar ideias em realidade através de soluções de engenharia inovadoras, 
                sustentáveis e de alta qualidade. Buscamos sempre superar as expectativas dos 
                nossos clientes, contribuindo para o desenvolvimento da sociedade.
              </p>
              <h3 className="text-2xl font-bold text-engineering-black mb-6">
                Nossa Visão
              </h3>
              <p className="text-engineering-gray leading-relaxed">
                Ser reconhecida como referência em engenharia, destacando-se pela excelência 
                técnica, inovação constante e compromisso com a sustentabilidade em todos os 
                projetos que desenvolvemos.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-primary p-8 rounded-2xl shadow-elegant">
                <h3 className="text-2xl font-bold text-engineering-black mb-6">
                  Nossos Valores
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-engineering-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-engineering-black font-medium">Excelência Técnica</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-engineering-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-engineering-black font-medium">Inovação Constante</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-engineering-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-engineering-black font-medium">Sustentabilidade</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-engineering-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-engineering-black font-medium">Transparência</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-engineering-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-engineering-black font-medium">Compromisso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-hover transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-engineering-black" />
                </div>
                <div className="text-3xl font-bold text-engineering-black mb-2">
                  {stat.value}
                </div>
                <div className="text-engineering-gray font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;