// Este arquivo é a configuração do Tailwind CSS para o projeto. 
// Ele define as cores personalizadas que serão usadas em toda a aplicação, 
// garantindo uma identidade visual consistente. 
// As cores são nomeadas de forma intuitiva para facilitar o uso nos componentes React. 
// Além disso, o arquivo inclui as diretivas do Tailwind para importar os estilos base, 
// componentes e utilitários necessários para a construção da interface.

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pm-dark': '#2D3548',    // Cor da sidebar 
        'pm-blue': '#00B1E6',    // Cor do botão GUARDAR 
        'pm-gray-bg': '#F4F7F6', // Cor do fundo 
        'pm-text-muted': '#7A869A'
      }
    },
  },
  plugins: [],
}