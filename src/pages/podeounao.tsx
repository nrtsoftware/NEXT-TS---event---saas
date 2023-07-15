import React from 'react';
import data from './podeounao.data';
const Podeounao: React.FC = () => {
  const podeItems: string[] = data.pode;
  const naoPodeItems: string[] = data.naopode;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-2 text-green-400">Pode</h2>
        <ul className="list-disc pl-6">
          {podeItems.map((item: string, index: number) => (
            <li className="text-white mb-1" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-2 text-red-500">Não Pode</h2>
        <ul className="list-disc pl-6">
          {naoPodeItems.map((item: string, index: number) => (
            <li className="text-white mb-1" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Podeounao;
