import { useEffect, useState } from "react";
import { Award, BookOpen, Users, Heart } from "lucide-react";

export default function About() {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-200 to-blue-200 shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop" 
                  alt="Dra. Ana Silva"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-blue-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Anos de experiência</p>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Olá! Sou a Dra. Ana Silva, psicóloga clínica formada pela Universidade de São Paulo (USP) 
                com especialização em Terapia Cognitivo-Comportamental (TCC).
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Ao longo de mais de 10 anos de experiência, tenho ajudado pessoas a superarem desafios 
                emocionais, desenvolverem autoconhecimento e alcançarem uma vida mais equilibrada e 
                significativa.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Minha abordagem é acolhedora, empática e baseada em evidências científicas, 
                adaptando-se às necessidades únicas de cada paciente.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                  <Award className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Formação</h3>
                    <p className="text-sm text-gray-600">USP - Psicologia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Especialização</h3>
                    <p className="text-sm text-gray-600">TCC</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-xl">
                  <Users className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Atendimento</h3>
                    <p className="text-sm text-gray-600">Presencial e Online</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                  <Heart className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Abordagem</h3>
                    <p className="text-sm text-gray-600">Humanizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
