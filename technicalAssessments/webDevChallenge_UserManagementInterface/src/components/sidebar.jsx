/* Este é o componente para gerar a sidebar da aplicação. Ele utiliza o Tailwind CSS para estilização, 
garantindo uma aparência moderna e responsiva. */
/* A sidebar inclui um logo, uma lista de itens de menu e um rodapé. 
Os itens de menu são renderizados dinamicamente a partir de um array, facilitando a manutenção 
e a adição de novos itens no futuro. 
O item "Utilizador" é destacado como ativo para indicar a seção atual da aplicação. */

import React from 'react';
import { X } from 'lucide-react';
import logo from '../assets/LOGO-WDR.png';

export const Sidebar = ({isOpen, setIsOpen}) => {
  // Lista de itens do menu para facilitar a manutenção
  const menuItems = [
    { label: 'Dashboard', active: false },
    { label: 'Utilizador', active: true }, // Ativo conforme o exercício
    { label: 'Relatórios', active: false },
    { label: 'Configurações', active: false },
  ];

  return (
    <>
      {/* Overlay: escurece o fundo quando o menu abre no telemóvel */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#2D3548] text-white p-6 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:flex md:flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Botão para fechar (apenas mobile) */}
        <button 
          className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        <img src={logo} alt="WebDev Logo" className="w-40 mb-12 mt-4 md:mt-0" />
        
        <nav className="flex-1 space-y-2 overflow-y-auto pr-2">
          {menuItems.map((item) => (
            <div 
              key={item.label}
              className={`flex items-center p-3 cursor-pointer transition-all ${
                item.active 
                  ? "text-[#00B1E6] border-l-4 border-[#00B1E6] bg-black/10 pl-4" 
                  : "text-gray-400 hover:text-white hover:pl-4"
              }`}
            >
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </nav>
        
        <footer className="text-[10px] opacity-40 mt-10 pb-6 md:pb-0">
          2019® Premium-minds.com
        </footer>
      </aside>
    </>
  );
};