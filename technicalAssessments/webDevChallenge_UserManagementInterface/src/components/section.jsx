/* Este componente representa uma seção colapsável da interface. 
Ele recebe um título e o conteúdo como props, e permite ao usuário expandir ou colapsar a seção 
clicando no botão lateral. O estado de abertura é gerenciado internamente usando o hook useState do React. 
A seção é estilizada com Tailwind CSS para garantir uma aparência limpa e moderna, e 
inclui uma transição suave ao expandir ou colapsar o conteúdo. */

import React, { useState } from 'react';

export const Section = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white mb-4 shadow-sm border border-gray-100">
      <div 
        className="flex justify-between items-center p-4 bg-[#F8F9FA] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-tight">{title}</h2>
        <span className="text-xl font-bold text-gray-400">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="p-6 transition-all duration-300">{children}</div>}
    </div>
  );
};