import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navega para a tela anterior
  };

  return (
    <button
      className="w-[50px] h-[50px] bg-gray-200 p-2 rounded-full shadow-md"
      onClick={handleBack}
    >
      &lt;
    </button>
  );
};
