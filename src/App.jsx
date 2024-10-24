import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Activity, Menu, X, Home, BarChart, Sun, Moon } from 'lucide-react';
import HomePage from './components/Home';
import Data from './components/Data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link to="/" className="flex items-center py-4 px-2">
                  <Activity className="h-6 w-6 md:h-8 md:w-8 mr-2 text-cyan-500" />
                  <span className="font-semibold text-gray-500 dark:text-gray-300 text-base md:text-lg">App de Diabetes</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/" className="py-4 px-2 text-gray-500 dark:text-gray-300 font-semibold hover:text-cyan-500 transition duration-300 flex items-center">
                <Home className="h-5 w-5 mr-1" />
                Inicio
              </Link>
              <Link to="/data" className="py-4 px-2 text-gray-500 dark:text-gray-300 font-semibold hover:text-cyan-500 transition duration-300 flex items-center">
                <BarChart className="h-5 w-5 mr-1" />
                Datos
              </Link>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6 text-gray-500 dark:text-gray-300" /> : <Menu className="h-6 w-6 text-gray-500 dark:text-gray-300" />}
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isMenuOpen ? 'max-h-60' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Home className="h-5 w-5 mr-2" />
            Inicio
          </Link>
          <Link to="/data" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center" onClick={() => setIsMenuOpen(false)}>
            <BarChart className="h-5 w-5 mr-2" />
            Datos
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;