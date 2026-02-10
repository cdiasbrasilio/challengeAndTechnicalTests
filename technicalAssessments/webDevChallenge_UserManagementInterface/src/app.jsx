/* Este é o componente principal da aplicação React. Ele define a estrutura geral da interface, 
incluindo a sidebar e o conteúdo principal. O componente utiliza o Tailwind CSS para estilização, 
 garantindo uma aparência moderna e responsiva. A sidebar é importada de um componente separado para manter a 
 organização do código, enquanto o conteúdo principal é estruturado com seções para facilitar a leitura e manutenção. */

 /* Importa o React e os componentes necessários para a construção da interface, 
 incluindo a Sidebar e a Section. O componente App é a raiz da aplicação, onde a estrutura geral é definida. 
 Ele utiliza a classe "flex" do Tailwind para colocar a Sidebar e o conteúdo principal lado a lado, garantindo
uma experiência de usuário fluida e intuitiva. */

import React, { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { Section } from "./components/section"; 
import { Menu } from "lucide-react"; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F4F7F6] w-full overflow-x-hidden">
      
      {/* Sidebar com estado do menu hambúrguer para telas pequenas */}
      <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {/* Conteúdo Principal */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        
        {/* Top Bar Mobile: Visível apenas em telemóveis (md:hidden) */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-[#2D3548] hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Menu size={28} />
          </button>
          <span className="font-bold text-[#2D3548]">WEBDEV</span>
        </div>

        {/* Cabeçalho da Página */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-light text-[#2D3548]">Utilizador</h1>
        </header>

        {/* Formulário */}
        <form className="max-w-4xl" onSubmit={(e) => e.preventDefault()}>
          
          <Section title="Tipo de utilizador">
            <div className="flex flex-col space-y-4">
              {['Project Manager', 'Developer', 'Architect'].map((role) => (
                <label key={role} className="flex items-center space-x-3 cursor-pointer group w-fit">
                  <input 
                    type="checkbox" 
                    defaultChecked={role !== 'Project Manager'}
                    className="w-5 h-5 accent-[#00B1E6] rounded border-gray-300" 
                  />
                  <span className="text-gray-600 group-hover:text-[#00B1E6] transition-colors">
                    {role}
                  </span>
                </label>
              ))}
            </div>
          </Section>

          <Section title="Contacto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex flex-col border-b border-gray-300 focus-within:border-[#00B1E6] transition-all">
                <label className="text-[11px] font-bold text-gray-400 uppercase">Email</label>
                <input type="email" defaultValue="pm@premium-minds.com" className="bg-transparent py-2 outline-none text-gray-700" />
              </div>
              <div className="flex flex-col border-b border-gray-300 focus-within:border-[#00B1E6] transition-all">
                <label className="text-[11px] font-bold text-gray-400 uppercase">Palavra-passe</label>
                <input type="password" defaultValue="********" className="bg-transparent py-2 outline-none text-gray-700" />
              </div>
              <div className="flex flex-col border-b border-gray-300 focus-within:border-[#00B1E6] transition-all md:w-1/2">
                <label className="text-[11px] font-bold text-gray-400 uppercase">Telefone</label>
                <input type="tel" defaultValue="+351" className="bg-transparent py-2 outline-none text-gray-700" />
              </div>
            </div>
          </Section>

          {/* Botões de Ação */}
          <div className="flex justify-end items-center space-x-8 mt-12">
            <button type="button" className="text-gray-500 hover:text-gray-700 font-medium">Cancelar</button>
            <button type="submit" className="bg-[#00B1E6] text-white px-12 py-3 rounded-full font-bold shadow-md hover:brightness-105 transition-all uppercase text-xs tracking-widest">
              Guardar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;