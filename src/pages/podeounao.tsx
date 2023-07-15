import React from 'react';
import data from './podeounao.data';
import '@/app/globals.css';

const Podeounao: React.FC = () => {
  const podeItems: string[] = data.pode;
  const naoPodeItems: string[] = data.naopode;

  return (

    <div className="p-3 m-[100px]">
      <div className="font-bold text-2xl text-center"> PODE OU NÃO PODE</div>
      <div className="flex">

        <div className="mr-2 w-full md:w-1/2 p-4 rounded-md shadow-md bg-green-100 pr-3">
            <h2 className="text-xl font-bold mb-2 text-green-600">Pode</h2>
            <ul className="list-disc pl-6 space-y-2">
            {podeItems.map((item: string, index: number) => (
                <li className="text-green-800" key={index}>
                {item}
                </li>
            ))}
            </ul>
        </div>

        <div className="w-full md:w-1/2 p-4 rounded-md shadow-md bg-red-100">
            <h2 className="text-xl font-bold mb-2 text-red-600">Não Pode</h2>
            <ul className="list-disc pl-6 space-y-2">
            {naoPodeItems.map((item: string, index: number) => (
                <li className="text-red-800" key={index}>
                {item}
                </li>
            ))}
            </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Podeounao;
