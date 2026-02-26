import { useEffect, useState } from "react";
import { Brain, Heart, Users, Sparkles, Shield, Sunrise } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Ansiedade e Estresse",
    description: "Tratamento para ansiedade generalizada, síndrome do pânico e estresse crônico através de técnicas comprovadas.",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    icon: Heart,
    title: "Depressão",
    description: "Acompanhamento terapêutico para quadros depressivos, auxiliando na recuperação do bem-estar emocional.",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description: "Terapia individual ou de casal para melhorar a comunicação e resolver conflitos interpessoais.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Autoestima",
    description: "Desenvolvimento de autoconhecimento e fortalecimento da autoconfiança e autoaceitação.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Traumas",
    description: "Tratamento especializado para processar e superar experiências traumáticas do passado.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Sunrise,
    title: "Transições de Vida",
    description: "Apoio em momentos de mudança, luto, separações e outras transições significativas.",
    gradient: "from-orange-500 to-pink-500"
  }
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
            Áreas de Atendimento
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Ofereço atendimento personalizado em diversas áreas da saúde mental, 
            sempre com uma abordagem acolhedora e baseada em evidências científicas.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Modalidades de Atendimento
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
                <h4 className="font-bold text-xl mb-2 text-purple-700">Presencial</h4>
                <p className="text-gray-700">
                  Consultório localizado em região central, com ambiente acolhedor e privativo.
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  📍 Av. Paulista, 1000 - São Paulo, SP
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
                <h4 className="font-bold text-xl mb-2 text-blue-700">Online</h4>
                <p className="text-gray-700">
                  Sessões por videochamada com a mesma qualidade do atendimento presencial.
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  💻 Plataforma segura e confidencial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
