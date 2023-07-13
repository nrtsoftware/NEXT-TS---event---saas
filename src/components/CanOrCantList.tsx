import React from 'react';

const CanOrCantList: React.FC = () => {
  const podeItems: string[] = ['Levar garrafa de água reutilizável', 'Levar protetor solar e repelente', 'Levar um agasalho para as noites frias'];
  const naoPodeItems: string[] = ['Levar substâncias ilegais', 'Levar vidros ou objetos cortantes', 'Levar drones'];

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-2 text-green-400">Pode</h2>
        <ul className="list-disc pl-6">
          {podeItems.map((item: string, index: number) => (
            <li className="text-gray-700 mb-1" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 p-4 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-2 text-red-500">Não Pode</h2>
        <ul className="list-disc pl-6">
          {naoPodeItems.map((item: string, index: number) => (
            <li className="text-gray-700 mb-1" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CanOrCantList;
