import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      subtitle: "Segunda a Sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@engpro.com.br",
      subtitle: "Resposta em até 24h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Paulista, 1000 - São Paulo/SP",
      subtitle: "CEP: 01310-100"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg a Sex: 8h às 18h",
      subtitle: "Sáb: 8h às 12h"
    }
  ];

  return (
    <section id="contato" className="py-24 bg-engineering-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-engineering-black mb-6">
            Entre em <span className="text-engineering-yellow">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-engineering-gray leading-relaxed max-w-3xl mx-auto">
            Pronto para começar seu projeto? Entre em contato conosco e vamos 
            transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-engineering-black mb-6">
              Solicite um Orçamento
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-engineering-black mb-2">
                    Nome *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Seu nome"
                    className="border-engineering-gray/30 focus:border-engineering-yellow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-engineering-black mb-2">
                    E-mail *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="border-engineering-gray/30 focus:border-engineering-yellow"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-engineering-black mb-2">
                    Telefone *
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="(11) 99999-9999"
                    className="border-engineering-gray/30 focus:border-engineering-yellow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-engineering-black mb-2">
                    Modalidade
                  </label>
                  <select className="w-full px-3 py-2 border border-engineering-gray/30 rounded-md focus:border-engineering-yellow focus:outline-none">
                    <option>Selecione uma modalidade</option>
                    <option>Engenharia Civil</option>
                    <option>Engenharia Estrutural</option>
                    <option>Engenharia Elétrica</option>
                    <option>Engenharia Industrial</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-engineering-black mb-2">
                  Assunto *
                </label>
                <Input 
                  type="text" 
                  placeholder="Assunto do projeto"
                  className="border-engineering-gray/30 focus:border-engineering-yellow"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-engineering-black mb-2">
                  Mensagem *
                </label>
                <Textarea 
                  placeholder="Descreva seu projeto e suas necessidades..."
                  rows={5}
                  className="border-engineering-gray/30 focus:border-engineering-yellow resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary text-engineering-black font-semibold hover:shadow-hover transition-all duration-300"
              >
                Enviar Mensagem
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-engineering-black mb-6">
                Informações de Contato
              </h3>
              <p className="text-engineering-black leading-relaxed mb-8">
                Nossa equipe está pronta para atender você. Entre em contato através 
                de qualquer um dos canais abaixo ou preencha o formulário ao lado.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-engineering-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-engineering-black mb-1">
                        {item.title}
                      </h4>
                      <p className="text-engineering-black font-semibold mb-1">
                        {item.info}
                      </p>
                      <p className="text-engineering-gray text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h4 className="font-bold text-engineering-black mb-4">
                Nossa Localização
              </h4>
              <div className="bg-engineering-gray/10 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-engineering-yellow mx-auto mb-2" />
                  <p className="text-engineering-gray">
                    Mapa interativo em breve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;