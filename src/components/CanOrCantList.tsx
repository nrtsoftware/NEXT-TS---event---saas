import React from 'react';

const CanOrCantList: React.FC = () => {
  const podeItems: string[] = [
    'Levar garrafa de água reutilizável', 
    'Levar protetor solar e repelente Lorem Ipsum is simply dummy text of the printing and typesetting', 
    'Levar um agasalho para as noites frias Lorem ipsum dolor sit amet. In velit accusamus et rerum',
  ];
  const naoPodeItems: string[] = [
    'Levar substâncias ilegais', 
    'Levar vidros ou objetos cortantes', 
    'Levar drones',
    'Est error dolor et ducimus beatae hic quod velit',
    'necessitatibus ab sequi assumenda. Et fuga explicabo ut fugiat modi et quia illum.'
  ];

  return (
    <div className="flex justify-center mb-12 lg:mb-0">
      <div className="flex flex-col md:flex-row  ">
        <div className="w-full md:w-1/2 p-4 rounded-md shadow-md ">
          <h2 className="text-xl font-bold mb-2 text-green-400 md:text-left text-center">Pode / Can</h2>
          <ul className="list-disc pl-6">
            {podeItems.map((item: string, index: number) => (
              <li className="text-white mb-1" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2 md:text-left text-center text-red-500">Não Pode / Can't</h2>
          <ul className="list-disc pl-6">
            {naoPodeItems.map((item: string, index: number) => (
              <li className="text-white mb-1" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CanOrCantList;
