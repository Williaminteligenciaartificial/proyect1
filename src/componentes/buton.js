// Button.js
import React from 'react';

const Button = ({ children, color }) => {
  // Determinar la clase de color basada en la prop 'color'
  let bgColorClass = '';
  switch (color) {
    case 'red':
      bgColorClass = 'bg-red-500';
      break;
    case 'blue':
      bgColorClass = 'bg-blue-500';
      break;
    case 'green':
      bgColorClass = 'bg-green-500';
      break;
    // Puedes agregar más colores según tus necesidades
    default:
      bgColorClass = 'bg-gray-500'; // Color por defecto si no se especifica ninguno
      break;
  }

  return (
    <button className={`px-4 py-2 rounded ${bgColorClass} text-white`}>
      {children}
    </button>
  );
};

export default Button;
