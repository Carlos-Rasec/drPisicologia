import Hero from "@/react-app/components/Hero";
import About from "@/react-app/components/About";
import Services from "@/react-app/components/Services";
import Contact from "@/react-app/components/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Hero />
      <About />
      <Services />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-purple-200">© 2024 Dra. Ana Silva - Psicologia Clínica. Todos os direitos reservados.</p>
          <p className="text-purple-300 text-sm mt-2">CRP: 06/123456</p>
        </div>
      </footer>
    </div>
  );
}
