// components/Footer.tsx

import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-white px-6 pt-16 pb-8 mt-32">
      {/* Newsletter */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <div className="flex justify-center mb-4">
          <div className="h-10 w-10 bg-white rounded-full">
            <Logo size={64} />
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Assine nossa newsletter e fique por dentro das novidades e ofertas
          exclusivas
        </h2>
        <div className="flex justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="contato.vesty@vesty.com"
            className="px-4 py-2 w-full rounded-l-md text-white"
          />
          <button className="bg-[#555] px-4 py-2 rounded-r-md hover:bg-[#444] transition">
            &rarr;
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm text-gray-300 mb-12 max-w-6xl mx-auto">
        <div>
          <h3 className="font-semibold mb-2 text-white">Coleções</h3>
          <ul className="space-y-1">
            <li>Outono/Inverno</li>
            <li>Primavera/Verão</li>
            <li>Vesty Básicos</li>
            <li>Vesty Essenciais</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-white">Atendimento</h3>
          <ul className="space-y-1">
            <li>Fale Conosco</li>
            <li>Trocas e Devoluções</li>
            <li>Prazos de Entrega</li>
            <li>Central de Ajuda</li>
            <li>Guia de Tamanhos</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-white">Sobre a Vesty</h3>
          <ul className="space-y-1">
            <li>Quem Somos</li>
            <li>Nossa Missão</li>
            <li>Manifesto</li>
            <li>Carreiras</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-white">Sustentabilidade</h3>
          <ul className="space-y-1">
            <li>Materiais Sustentáveis</li>
            <li>Processos Éticos</li>
            <li>Moda Consciente</li>
            <li>Transparência</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-white">Políticas</h3>
          <ul className="space-y-1">
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
            <li>Cookies</li>
            <li>Pagamentos</li>
            <li>Segurança</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-600 pt-6">
        © 2025 Vesty — Todos os direitos reservados
      </div>
    </footer>
  );
}
