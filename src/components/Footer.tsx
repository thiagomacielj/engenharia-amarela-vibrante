import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Wrench } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-engineering-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-engineering-black" />
              </div>
              <span className="text-2xl font-bold text-engineering-yellow">
                EngPro
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Líder em soluções de engenharia com mais de 15 anos de experiência. 
              Transformamos projetos em realidade com excelência técnica e inovação.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-engineering-gray/20 hover:bg-engineering-yellow hover:text-engineering-black rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-engineering-gray/20 hover:bg-engineering-yellow hover:text-engineering-black rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-engineering-gray/20 hover:bg-engineering-yellow hover:text-engineering-black rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-engineering-yellow mb-6">
              Serviços
            </h3>
            <ul className="space-y-3">
              {[
                "Engenharia Civil",
                "Engenharia Elétrica", 
                "Engenharia Mecânica",
                "Projetos Industriais",
                "Consultoria Técnica",
                "Manutenção Predial"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-engineering-yellow transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-engineering-yellow mb-6">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-engineering-yellow mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Rua das Engenharias, 123</p>
                  <p>Distrito Industrial - SP</p>
                  <p>CEP: 01234-567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-engineering-yellow flex-shrink-0" />
                <p className="text-gray-300">(11) 99999-9999</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-engineering-yellow flex-shrink-0" />
                <p className="text-gray-300">contato@engpro.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-engineering-gray/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} EngPro. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-engineering-yellow text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-engineering-yellow text-sm transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;