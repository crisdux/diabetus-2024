import React from 'react';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Bienvenido a la App de Diabetes</h1>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-48 md:h-64 object-cover object-center" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Diabetes management" />
        <div className="p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">¿Qué es la Diabetes?</h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4">
            La diabetes es una enfermedad crónica que afecta la forma en que tu cuerpo procesa la glucosa (azúcar) en la sangre. 
            Ocurre cuando el páncreas no produce suficiente insulina o cuando el cuerpo no puede utilizar eficazmente la insulina que produce. 
            Esto resulta en un aumento de los niveles de azúcar en la sangre, lo que puede causar graves problemas de salud con el tiempo.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Síntomas Comunes de la Diabetes</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li>Aumento de la sed y micción frecuente</li>
            <li>Fatiga y debilidad</li>
            <li>Visión borrosa</li>
            <li>Hambre excesiva</li>
            <li>Pérdida de peso inexplicable</li>
            <li>Heridas que tardan en sanar</li>
            <li>Hormigueo o entumecimiento en manos o pies</li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-xs md:text-sm italic">
            Si experimentas alguno de estos síntomas, es importante consultar a un profesional de la salud para un diagnóstico adecuado.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;