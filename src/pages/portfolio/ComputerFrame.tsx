import React from 'react';
import { Link } from 'react-router-dom';

interface ComputerFrameProps {
  imageSrc: string;
  title: string;
  link?: string;
  tags?: string[];
}

const ComputerFrame: React.FC<ComputerFrameProps> = ({ imageSrc, title, link = '#', tags = [] }) => {
  return (
    <div className="group w-full cursor-pointer">
      {/* Computer Monitor */}
      <div className="mb-6 transition-all duration-300 group-hover:-translate-y-3">
        {/* Bezel/Frame */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-3 border border-gray-800 w-full">
          {/* Monitor Top Bar */}
          <div className="bg-gray-800 rounded-t-lg h-8 flex items-center px-4 gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-gray-500 ml-auto">Impulsa Digital</span>
          </div>
          
          {/* Screen Content */}
          <div className="bg-black rounded-b-lg overflow-hidden w-full aspect-video max-h-96">
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Monitor Stand */}
        <div className="flex justify-center px-4">
          <div className="w-1/3 h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg border border-gray-800"></div>
        </div>
      </div>

      {/* Project Info */}
      <div className="px-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          <Link 
            to={link}
            className="text-blue-900 hover:text-blue-700 transition-colors duration-300 text-sm font-medium hover:underline whitespace-nowrap ml-4"
          >
            Ver →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComputerFrame;
