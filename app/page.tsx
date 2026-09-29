import { Bentham } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col item-center justif-center m-4 bg-black text-white p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">INTRODUCCION A REACT</h1>
      <div className="flex-1 bg-green-500 p-6 rounded-lg mb-4">
        <Image 
          src="/salchicha.jpg" 
          alt="Ejemplo" 
          width={96}
          height={96}
          className="w-24 h-24 rounded-full object-cover" 
        />
        <div>
          <h3 className="text-lg font-bold">Hector Ulises Hernandez Dominguez</h3>
          <h5 className="text-md font-bold">Interes Profesionales:</h5>
          <ul className="text-black-600 text-sm list-disc list-inside">
            <li>Desarrollo Web</li>
            <li>Computo en la Nube</li>
            <li>Big Data</li>
          </ul>
        </div>
        <a href="https://www.linkedin.com/in/uliseshd?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer"className="mt-4 bg-white text-black px-3 py-2 rounded hover:bg-gray-200 flex items-center gap-2 transform transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md inline-flex">
          <img src="/link.png" alt="Ver más" className="w-5 h-5" />
          <span><b>Ver perfil de Linkedin</b></span>
        </a>
        <a href="https://github.com/uliseshd" target="_blank" rel="noopener noreferrer" className="mt-4 bg-white text-black px-3 py-2 rounded hover:bg-gray-200 flex items-center gap-2 transform transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md inline-flex">
          <img src="/github.png" alt="Ver más" className="w-5 h-5" />
          <span><b>Ver perfil de Github</b></span>
        </a>
      </div>
      <div className="flex-1 bg-blue-500 p-6 rounded-lg mb-4">
        <Image 
          src="/pug.jpg" 
          alt="Ejemplo" 
          width={96}
          height={96}
          className="w-24 h-24 rounded-full object-cover" 
        />
        <div>
          <h3 className="text-lg font-bold">Alejandra Roa Alonso</h3>
          <h5 className="text-md font-bold">Interes Profesionales:</h5>
          <ul className="text-black-600 text-sm list-disc list-inside">
            <li>Desarrollo</li>
            <li>Ciberseguridad</li>
            <li>Analisis de Datos</li>
          </ul>
        </div>
        <a href="https://www.linkedin.com/in/alejandra-roa-alonso-165332384?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="mt-4 bg-white text-black px-3 py-2 rounded hover:bg-gray-200 flex items-center gap-2 transform transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md inline-flex">
          <img src="/link.png" alt="Ver más" className="w-5 h-5" />
          <span><b>Ver perfil de Linkedin</b></span>
        </a>
        <a href="https://github.com/alejandraroa" target="_blank" rel="noopener noreferrer" className="mt-4 bg-white text-black px-3 py-2 rounded hover:bg-gray-200 flex items-center gap-2 transform transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md inline-flex">
          <img src="/github.png" alt="Ver más" className="w-5 h-5" />
          <span><b>Ver perfil de Github</b></span>
        </a>
      </div>
      
      <div className="flex-1 bg-pink-500 p-6 rounded-lg">
        <Image 
          src="/mar.jpg" 
          alt="Ejemplo" 
          width={96}
          height={96}
          className="w-24 h-24 rounded-full object-cover" 
        />
        <div>
          <h3 className="text-lg font-bold">Mariano Labrador Acosta</h3>
          <h5 className="text-md font-bold">Interes Profesionales:</h5>
          <ul className="text-black-600 text-sm list-disc list-inside">
            <li>Inteligencia de Negocios</li>
            <li>Ciencia de Datos</li>
            <li>Analisis de Datos</li>
          </ul>
        </div>
        <a href="https://www.linkedin.com/in/marianolabrador?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="mt-4 bg-white text-black px-3 py-2 rounded hover:bg-gray-200 flex items-center gap-2 transform transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-md inline-flex">
          <img src="/link.png" alt="Ver más" className="w-5 h-5" />
          <span><b>Ver perfil de Linkedin</b></span>
        </a>

      </div>
    </div>

  );
}
