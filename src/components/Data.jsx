import React, { useState, useEffect } from 'react';
import { Save, Calculator, Loader } from 'lucide-react';

function Data() {
  const [formData, setFormData] = useState({
    embarazos: '',
    glucosa: '',
    presionSanguinea: '',
    insulina: '',
    imc: '',
    edad: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Datos guardados:', formData);
    // Aquí puedes agregar la lógica para guardar los datos
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowResults(false);
    
    // Simulamos un proceso de cálculo que toma entre 2 y 3 segundos
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000 + Math.random() * 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Datos de Diabetes</h1>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4 md:p-6">
        <form className="space-y-4">
          <div>
            <label htmlFor="embarazos" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Embarazos</label>
            <input
              type="number"
              id="embarazos"
              name="embarazos"
              value={formData.embarazos}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="glucosa" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Glucosa</label>
            <input
              type="number"
              id="glucosa"
              name="glucosa"
              value={formData.glucosa}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="presionSanguinea" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Presión Sanguínea</label>
            <input
              type="number"
              id="presionSanguinea"
              name="presionSanguinea"
              value={formData.presionSanguinea}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="insulina" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Insulina</label>
            <input
              type="number"
              id="insulina"
              name="insulina"
              value={formData.insulina}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="imc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">IMC (Índice de Masa Corporal)</label>
            <input
              type="number"
              id="imc"
              name="imc"
              value={formData.imc}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="edad" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Edad</label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:bg-cyan-700 dark:hover:bg-cyan-600"
            >
              <Save className="w-5 h-5 mr-2" />
              Guardar
            </button>
            <button
              type="button"
              onClick={handleCalculate}
              className="flex-1 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-600"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calcular
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 border w-52 shadow-lg rounded-md bg-white dark:bg-gray-800">
              <div className="text-center">
                <Loader className="mx-auto animate-spin text-cyan-600 dark:text-cyan-400" size={40} />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">Calculando...</h2>
              </div>
            </div>
          </div>
        )}

        {showResults && (
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Resultados:</h2>
            <ul className="space-y-2">
              {Object.entries(formData).map(([key, value]) => (
                <li key={key} className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Data;